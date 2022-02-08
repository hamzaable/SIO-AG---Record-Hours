import { Moment } from "moment";
import React, { useEffect, useState } from "react";
import { AddNewLogData } from "../../redux/timeLog/timeLogActions";
import LogForm from "../elements/LogForm";
import { useDispatch } from "react-redux";
import { Button, notification } from "antd";

interface PROPS {
	defaultDate: Moment;
}
const HomeLogForm: React.FC<PROPS> = (props) => {
	const [selectedDate, setSelectedDate] = useState(props.defaultDate);
	const [selectedStartTime, setSelectedStartTime] = useState<Moment>();
	const [selectedFinishTime, setSelectedFinishTime] = useState<Moment>();
	const [taskname, setTaskname] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		setSelectedDate(props.defaultDate);
	}, [props]);

	const AddNewLogHandler = () => {
		if (taskname === "" || !selectedStartTime || !selectedFinishTime) {
			notification["error"]({
				message: "Error",
				description: "Please Enter data in all fields",
			});
			return;
		}

		if (selectedStartTime.isAfter(selectedFinishTime)) {
			notification["error"]({
				message: "Error",
				description: "Start time cannot be greater than finish time",
			});
			return;
		}

		const minutes = Math.round(
			selectedFinishTime.diff(selectedStartTime, "minutes", true)
		);
		const data = {
			id: Math.random()
				.toString(36)
				.replace(/[^a-z]+/g, "")
				.substring(2, 20),
			taskname: taskname,
			startTime: selectedStartTime,
			finishTime: selectedFinishTime,
			date: selectedDate,
			durationMinutes: minutes,
		};
		dispatch(AddNewLogData(data));

		setTaskname("");
		setSelectedStartTime(undefined);
		setSelectedFinishTime(undefined);

		notification["success"]({
			message: "Log Added",
			description: "Log added sucessfully",
		});
	};
	return (
		<>
			<LogForm
				taskname={taskname}
				setTaskname={(e: string) => {
					setTaskname(e);
				}}
				setSelectedDate={(e: Moment) => {
					setSelectedDate(e);
				}}
				selectedDate={selectedDate}
				setSelectedStartTime={(e: Moment) => {
					setSelectedStartTime(e);
				}}
				selectedStartTime={selectedStartTime}
				setSelectedFinishTime={(e: Moment) => {
					setSelectedFinishTime(e);
				}}
				selectedFinishTime={selectedFinishTime}
			/>

			<Button
				style={{
					width: "100%",
				}}
				onClick={AddNewLogHandler}
			>
				Add New Log
			</Button>
		</>
	);
};

export default HomeLogForm;
