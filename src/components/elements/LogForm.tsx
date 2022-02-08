import { Col, DatePicker, Form, Input, Row, TimePicker } from "antd";
import moment from "moment";
import { useEffect } from "react";

const LogForm = (props: any) => {
	const [form] = Form.useForm();

	useEffect(() => {
		form.setFieldsValue({
			timeStart: props.selectedStartTime,
			timeFinish: props.selectedFinishTime,
			taskname: props.taskname,
			date: props.selectedDate,
		});
	}, [props.selectedStartTime, props.selectedFinishTime, form, props.taskname, props.selectedDate]);

	return (
		<div>
			<Form
				labelCol={{ md: 24, lg: 24 }}
				wrapperCol={{ md: 24, lg: 24 }}
				layout="vertical"
				form={form}
				autoComplete="off"
			>
				<Row>
					<Col span={24}>
						<Form.Item label="Task Name" name="taskname"  >
							<Input
								value={props.description}
								onChange={(e) => {
									props.setTaskname(e.target.value);
								}}
								placeholder={"Task Name"}
							/>
						</Form.Item>
					</Col>
					<Row gutter={12}>
						<Col>
							<Form.Item label="Date" name="date" >
								<DatePicker
									placeholder="Select Date"
									onChange={(e: any) => {
										props.setSelectedDate(e);
									}}
									showToday={true}
									format="DD.MM.YYYY"
									showTime={false}
									style={{ minWidth: "100%" }}
									allowClear={false}
									value={props.selectedDate}
								/>
							</Form.Item>
						</Col>

						<Col>
							<Form.Item label="Time Start" name="timeStart" >
								<TimePicker
									placeholder="Start Time"
									minuteStep={10}
									format={"HH:mm"}
									style={{ minWidth: "100%" }}
									showNow={true}
									value={moment(
										props.selectedStartTime,
										"HH:mm"
									)}
									onSelect={( value) => {
										
										props.setSelectedStartTime(value);
										form.setFieldsValue({
											timeStart: value,
										});
									}}
									onChange={(value) => {
										props.setSelectedStartTime(value);
									}}
								/>
							</Form.Item>
						</Col>
						<Col>
							<Form.Item label="Time Finish" name="timeFinish" >
								<TimePicker
									placeholder="Finish Time"
									minuteStep={10}
									format={"HH:mm"}
									style={{ minWidth: "100%" }}
									showNow={false}
									value={moment(
										props.selectedFinishTime,
										"HH:mm"
									)}
									onSelect={(value) => {
										props.setSelectedFinishTime(value);
										form.setFieldsValue({
											timeFinish: value,
										});
									}}
									onChange={(value) => {
										props.setSelectedFinishTime(value);
									}}
								/>
							</Form.Item>
						</Col>
					</Row>
				</Row>
			</Form>
		</div>
	);
};

export default LogForm;
