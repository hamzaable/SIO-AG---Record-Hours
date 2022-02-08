import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Typography } from "antd";
import WeeklyChart from "./WeeklyChart";

const LogChart = () => {
	const logData = useSelector((state: RootState) => {
		return state.timeLog.LogData;
	});

	return (
		<>
			{logData.length > 0 && (
				<>
					<Typography.Title level={3} style={{ color: "#ba1a1b" }}>
						Weekly Overview
					</Typography.Title>

					<WeeklyChart />
				</>
			)}
		</>
	);
};

export default LogChart;
