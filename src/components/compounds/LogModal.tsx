import React, { useEffect, useState } from "react";
import moment from "moment";
import { Modal } from "antd";
import LogForm from "../elements/LogForm";

const LogModal = (props: any) => {
	const [selectedDate, setSelectedDate] = useState(props.defaultDate);
	const [selectedStartTime, setSelectedStartTime] = useState<any>();
	const [selectedFinishTime, setSelectedFinishTime] = useState<any>();
	const [taskname, setTaskname] = useState("");

   

	const handleOk = () => {};

	const handleCancel = () => {};
	return (
		<Modal
			title="Update Time Log"
			visible={false}
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
