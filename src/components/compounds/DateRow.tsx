import {
	CalendarOutlined,
	ArrowLeftOutlined,
	ArrowRightOutlined,
} from "@ant-design/icons";
import { Typography, DatePicker, Button } from "antd";
import moment, { Moment } from "moment";
import React, { useState } from "react";

interface PROPS {
	activeDate: Moment;
    setShowNewLog:(data:boolean)=>void;
    setActiveDate:(data:Moment)=>void;
    showNewLog:boolean;
}

const DateRow: React.FC<PROPS> = (props) => {
	const [showDatePicker, setShowDatePicker] = useState(false);
	const handleHideLog = () => {
		props.setShowNewLog(!props.showNewLog);
	};
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				width: "100%",
				justifyContent: "space-between",
				flexWrap: "wrap",
			}}
		>
			<div
				style={{
					display: "flex",
					gap: "30px",
					placeContent: "center flex-start",
					alignItems: "center",
				}}
			>
				<div>
					<Typography.Title
						level={3}
						style={{
							lineHeight: "1.6",
							marginBottom: "0px",
							width: "165px",
							color: "#ba1a1b",
						}}
					>
						{props.activeDate.format("DD.MM.YYYY") ===
						moment(new Date()).format("DD.MM.YYYY")
							? "Today, " + props.activeDate.format("DD MMM")
							: props.activeDate.format("ddd, DD MMM")}
					</Typography.Title>
				</div>
				<div>
					<CalendarOutlined
						onClick={() => setShowDatePicker(!showDatePicker)}
					/>

					<DatePicker
						defaultValue={moment("2015-01-01", "YYYY-MM-DD")}
						inputReadOnly
						allowClear={false}
						bordered={false}
						open={showDatePicker}
						onSelect={(e) => {
							props.setActiveDate(e);
							setShowDatePicker(false);
						}}
						style={{
							border: "0px",
							background: "transparent",
							padding: "0px",
							margin: "0px",
							visibility: "hidden",
							width: "0px",
						}}
					/>
				</div>
				<div
					onClick={() =>
						props.setActiveDate(
							moment(props.activeDate).subtract(1, "days")
						)
					}
					style={{ cursor: "pointer" }}
				>
					<ArrowLeftOutlined />
				</div>
				<div
					onClick={() =>
						props.setActiveDate(
							moment(props.activeDate).add(1, "days")
						)
					}
					style={{ cursor: "pointer" }}
				>
					<ArrowRightOutlined />
				</div>
			</div>
			<Button onClick={handleHideLog}>
				{props.showNewLog ? "Hide New Log" : "Add New Log"}
			</Button>
		</div>
	);
};

export default DateRow;
