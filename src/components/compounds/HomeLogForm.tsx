import { Moment } from "moment";
import React, { useEffect, useState } from "react";
import { AddNewLogData } from "../../redux/timeLog/timeLogActions";
import LogForm from "../elements/LogForm";
import {useDispatch} from 'react-redux'


const HomeLogForm = (props: any) => {
	const [selectedDate, setSelectedDate] = useState(props.defaultDate);
	const [selectedStartTime, setSelectedStartTime] = useState<Moment>();
	const [selectedFinishTime, setSelectedFinishTime] = useState<Moment>();
	const [taskname, setTaskname] = useState("");

    const dispatch = useDispatch()


	useEffect(() => {
		setSelectedDate(props.defaultDate);
	}, [props]);

	const AddNewLogHandler = () => {
		const data = {
			id: Math.random()
				.toString(36)
				.replace(/[^a-z]+/g, "")
				.substring(2, 20),
			taskname: taskname,
			startTime: selectedStartTime,
			finishTime: selectedFinishTime,
			date: selectedDate,
		};
		dispatch(AddNewLogData(data))
	};
	return (
		<>
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

			<button
				style={{
					width: "100%",
					backgroundColor: "#ba1a1b",
					border: 0,
					borderRadius: "6px",
					color: "white",
					padding: "4px 0px",
					cursor: "pointer",
				}}
				onClick={AddNewLogHandler}
			>
				Add New Log
			</button>
		</>
	);
};

export default HomeLogForm;
