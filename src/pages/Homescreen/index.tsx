import React, { useState, useEffect } from "react";
import DateRow from "../../components/compounds/DateRow";
import moment from "moment";
import LogModal from "../../components/compounds/LogModal";
import HomeLogForm from "../../components/compounds/HomeLogForm";
import { Space } from "antd";
import AntCard from "../../components/elements/AntCard";

const Homescreen = () => {
	const [activeDate, setActiveDate] = useState<moment.Moment>(moment());
	const [showNewLog, setShowNewLog] = useState<boolean>(true);
	useEffect(() => {
		console.log(activeDate);
	}, [activeDate]);

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
				<LogModal defaultDate={activeDate} />

				{showNewLog && (
					<AntCard>
						<div style={{ maxWidth: "450px",margin:"auto" }}>
							<HomeLogForm defaultDate={activeDate} />
						</div>
					</AntCard>
				)}
			</Space>
		</>
	);
};

export default Homescreen;
