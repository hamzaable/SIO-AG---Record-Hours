import React, { useEffect, useState } from "react";
import OneLogCard from "../elements/oneLogCard";
import { useSelector, } from "react-redux";
import { Col, Divider, Row, Space, Typography } from "antd";
import { RootState } from "../../redux/store";
import { makeTimeArray } from "../../functions";
import { TIMELOG } from "../../interfaces";
import { Moment } from "moment";

interface PROPS{
    defaultDate:Moment;
}

const LogCards:React.FC<PROPS> = (props) => {
	const [data, setData] = useState<TIMELOG[]>([]);
	const logData: TIMELOG[] = useSelector(
		(state: RootState) => state.timeLog.LogData
	);

	useEffect(() => {
		const currentLogData = logData.filter((log) => {
			if (log.date?.format("DD.MM.YYYY") === props.defaultDate.format("DD.MM.YYYY")) {
				return true;
			} else {
				return false;
			}
		});
        console.log('currentLogData ~ currentLogData', currentLogData)
		setData(currentLogData);
	}, [logData, props.defaultDate]);

    
	const totalMinutes = () => {
		const temp = makeTimeArray(
			data.map((obj: TIMELOG) => {
					return obj.durationMinutes!;
				})
				.reduce((a, b) => {
					return a + b;
				}, 0) / 60
		);

		return (
			temp[0].toString().padStart(2, "0") +
			":" +
			temp[1].toString().padStart(2, "0")
		);
	};

	return (
		<>
			{data.length > 0 && (
				<Space
					direction="vertical"
					size={"middle"}
					style={{ width: "100%" }}
				>
					{data.map((log: TIMELOG) => {
						return (
							<OneLogCard
								key={log.id}
								id={log.id}
								startTime={log.startTime}
								finishTime={log.finishTime}
								duration={log.durationMinutes}
								taskname={log.taskname}
							/>
						);
					})}

					<div>
						<Divider
							orientation="right"
							plain
							style={{ borderWidth: "2px", margin: "0 0 10px 0" }}
						></Divider>
						<Row style={{ width: "100%" }}>
							<Col span={23}>
								<Typography.Title
									level={4}
									style={{ textAlign: "right" }}
								>
									{"Total : " + totalMinutes()}
								</Typography.Title>
							</Col>
						</Row>
					</div>
				</Space>
			)}
		</>
	);
}

export default LogCards;
