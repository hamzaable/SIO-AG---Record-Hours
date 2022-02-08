import React, {  useState } from "react";
import { Modal,notification } from "antd";
import LogForm from "../elements/LogForm";
import { useDispatch, useSelector } from "react-redux";
import { getTimeLogModal } from "../../redux/settings/settingsActions";
import { RootState } from "../../redux/store";
import { TIMELOG } from "../../interfaces";
import { UpdateLogData } from "../../redux/timeLog/timeLogActions";

const LogModal = (props: any) => {
	const [selectedDate, setSelectedDate] = useState(props.defaultDate);
	const [selectedStartTime, setSelectedStartTime] = useState<any>();
	const [selectedFinishTime, setSelectedFinishTime] = useState<any>();
	const [taskname, setTaskname] = useState("");
	const dispatch = useDispatch();
	const currentData = useSelector(
		(state: RootState) => state.timeLog.LogData
	);
	const modalData = useSelector(
		(state: RootState) => state.settings.showModal
	);

	React.useEffect(() => {
		if (modalData.isVisible === true) {
			const currentLog: TIMELOG = currentData.find(
				(data: TIMELOG) => data.id === modalData.openID
			)!;

			setTaskname(currentLog.taskname);
			setSelectedStartTime(currentLog.startTime);
			setSelectedFinishTime(currentLog.finishTime);
			setSelectedDate(currentLog.date);
		}
	}, [modalData]);

	const handleOk = () => {
		const minutes = selectedFinishTime.diff(selectedStartTime, "minutes");
		const data: TIMELOG = {
			id: modalData.openID,
			taskname: taskname,
			startTime: selectedStartTime,
			finishTime: selectedFinishTime,
			date: selectedDate,
			durationMinutes: minutes,
		};
		dispatch(UpdateLogData(data));
        handleCancel()
        notification["success"]({
            message: "Log Updated",
            description: "Log updated sucessfully",
        });
	};

	const handleCancel = () => {
		dispatch(getTimeLogModal(false, ""));
		setTaskname("");
		setSelectedStartTime("");
		setSelectedFinishTime("");
		setSelectedDate("");
	};
	return (
		<Modal
			title="Update Time Log"
			visible={true}
			onOk={handleOk}
			onCancel={handleCancel}
			destroyOnClose={true}
			keyboard={true}
			width={600}
			style={{ top: "50px" }}
		>
			<LogForm
				taskname={taskname}
				setTaskname={(e: any) => {
					setTaskname(e);
				}}
				setSelectedDate={(e: any) => {
					setSelectedDate(e);
				}}
				selectedDate={selectedDate}
				setSelectedStartTime={(e: any) => {
					setSelectedStartTime(e);
				}}
				selectedStartTime={selectedStartTime}
				setSelectedFinishTime={(e: any) => {
					setSelectedFinishTime(e);
				}}
				selectedFinishTime={selectedFinishTime}
			/>
		</Modal>
	);
};

export default LogModal;
