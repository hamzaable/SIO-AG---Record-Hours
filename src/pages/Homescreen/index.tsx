import React, { useState, useEffect } from "react";
import DateRow from "../../components/compounds/DateRow";
import moment from "moment";
import LogModal from "../../components/compounds/LogModal";
import HomeLogForm from "../../components/compounds/HomeLogForm";
import { Space } from "antd";
import AntCard from "../../components/elements/AntCard";
import LogCards from "../../components/compounds/LogCards";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import LogChart from "../../components/compounds/LogChart";
import { AddOldLogData } from "../../redux/timeLog/timeLogActions";
import { TIMELOG } from "../../interfaces";

const Homescreen = () => {
	const [activeDate, setActiveDate] = useState<moment.Moment>(moment());
	const [showNewLog, setShowNewLog] = useState<boolean>(true);

	const showModal = useSelector((state: RootState) => {
		return state.settings.showModal.isVisible;
	});

	const dispatch = useDispatch();
	useEffect(() => {
		const existingData = JSON.parse(localStorage.getItem("logData")!);
		if (existingData !== null) {
			const cleanData = existingData.map((oneElem: TIMELOG) => {
				return {
					id: oneElem.id,
					taskname: oneElem.taskname,
					date: moment(oneElem.date),
					startTime: moment(oneElem.startTime),
					finishTime: moment(oneElem.finishTime),
					durationMinutes: oneElem.durationMinutes,
				};
			});
			dispatch(AddOldLogData(cleanData));
		}
		console.log("useEffect ~ existingData", existingData);
	}, []);

	return (
		<>
			<Space direction="vertical" style={{ width: "100%" }}>
				<AntCard>
					<DateRow
						activeDate={activeDate}
						setActiveDate={(e: moment.Moment) => {
							setActiveDate(e);
						}}
						showNewLog={showNewLog}
						setShowNewLog={(e: boolean) => {
							setShowNewLog(e);
						}}
					/>
				</AntCard>
				{showModal && <LogModal defaultDate={activeDate} />}

				{showNewLog && (
					<AntCard>
						<div style={{ maxWidth: "450px", margin: "auto" }}>
							<HomeLogForm defaultDate={activeDate} />
						</div>
					</AntCard>
				)}

				<LogCards defaultDate={activeDate} />
				<LogChart />
			</Space>
		</>
	);
};

export default Homescreen;
