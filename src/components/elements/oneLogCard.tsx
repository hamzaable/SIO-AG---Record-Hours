import React from "react";
import { Row, Col, Typography, Button,notification } from "antd";
import moment from "moment";
import { MdWorkOutline } from "react-icons/md";
import { getTimeLogModal } from "../../redux/settings/settingsActions";
import { useDispatch } from "react-redux";
import { minutesToDuration } from "../../functions";
import { deleteLog } from "../../redux/timeLog/timeLogActions";

function OneLogCard({ id, duration, taskname, startTime, finishTime }: any) {
	const dispatch = useDispatch();
	
	const editHandler = (logId: string) => {
		dispatch(getTimeLogModal(true, logId));
        
	};
	const deleteHandler = (logId: string) => {
		dispatch(deleteLog(logId));

        notification["success"]({
            message: "Log Deleted",
            description: "Log deleted sucessfully",
        });
	};

	return (
		<div
			style={{
				width: "100%",
				backgroundColor: "rgb(255, 255, 255)",
				borderRadius: "10px",
				padding: "12px",
				paddingLeft: "24px",
				paddingRight: "24px",
				cursor: "pointer",
			}}
		>
			<Row style={{ width: "100%", alignItems: "center" }}>
				<Col span={10}>
					<Row
						style={{
							justifyContent: "space-evenly",
							alignItems: "center",
						}}
					>
						<Col span={10}>
							<Row
								gutter={6}
								style={{
									alignItems: "flex-start",
								}}
							>
								<Col
									style={{
										fontSize: "14px",
										marginBottom: "0px",
										marginTop: "6px",
									}}
								>
									<MdWorkOutline />
								</Col>
								<Col>
									<Typography.Paragraph
										style={{
											fontSize: "large",
											margin: "0px",
										}}
									>
										{taskname}
									</Typography.Paragraph>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
				<Col span={5}>
					<div>
						{startTime.format("hh:mm")} {" - "}
						{finishTime.format("hh:mm")}
					</div>
				</Col>
				<Col span={4}>
					<Typography.Paragraph
						style={{
							fontSize: "18px",
							margin: "0px",
							// fontWeight: "600",
						}}
					>
						{minutesToDuration(duration)} {"hrs"}
					</Typography.Paragraph>
				</Col>

				<Col>
					<Row gutter={6}>
						<Col>
							<Button
								onClick={() => {
									editHandler(id);
								}}
                                style={{minWidth:"80px"}}
							>
								Edit
							</Button>
						</Col>
						<Col>
							<Button style={{minWidth:"80px"}} onClick={() => deleteHandler(id)}>
								Delete
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
}

export default OneLogCard;
