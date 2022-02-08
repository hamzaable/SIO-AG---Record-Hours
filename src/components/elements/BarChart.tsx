import React from "react";
import { ResponsiveBar } from "@nivo/bar";

function BarChart(props: any) {
	return (
		<div style={{height:"300px", }}>
			<ResponsiveBar
				data={props.data}
				keys={[
					"totalTime",
					
				]}
				indexBy="date"
				margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
				padding={0.3}
				colors={{ scheme: "nivo" }}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "Date",
					legendPosition: "middle",
					legendOffset: 32,
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "Time (minutes)",
					legendPosition: "middle",
					legendOffset: -40,
				}}
				
				labelTextColor={{
					from: "color",
					modifiers: [["darker", 1.6]],
				}}
                label={d => `${d.value==0 ? "" : d.value}`}
				
				ariaLabel="Weekly Logs Chart"
				
			/>
		</div>
	);
}

export default BarChart;
