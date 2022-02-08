import React, { useEffect, useState } from "react";
import BarChart from "../elements/BarChart";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import moment from "moment";
import { TIMELOG } from "../../interfaces";

const weekDate = [
	moment().startOf("weeks").add(1, "day").format("DD.MM.YYYY"), //Monday
	moment().startOf("weeks").add(2, "day").format("DD.MM.YYYY"),
	moment().startOf("weeks").add(3, "day").format("DD.MM.YYYY"),
	moment().startOf("weeks").add(4, "day").format("DD.MM.YYYY"),
	moment().startOf("weeks").add(5, "day").format("DD.MM.YYYY"),
	moment().startOf("weeks").add(6, "day").format("DD.MM.YYYY"),
	moment().startOf("weeks").add(7, "day").format("DD.MM.YYYY"),
];

const WeeklyChart = () => {
	const rawData = useSelector((state: RootState) => {
		return state.timeLog.LogData;
	});
	const [chartData, setChartData] = useState<any>([]);

	useEffect(() => {
		const makeData = weekDate.map((day) => {
			let minutes = 0;
			rawData.map((min: TIMELOG) => {
				if (min.date?.format("DD.MM.YYYY") === day) {
					minutes = minutes + min.durationMinutes!;
				}
			});

			return { date: day, totalTime:  minutes };
		});
		setChartData(makeData);
	}, [rawData]);

	return (
		<>
			<BarChart data={chartData} />
		</>
	);
};

export default WeeklyChart;
