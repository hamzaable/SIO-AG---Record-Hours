import { TIMELOG } from "../../interfaces";
import { RootState } from "../store";
import { timeLogActions } from "./timeLogReducer";

const { updateAllData } = timeLogActions;

export const AddNewLogData = (data: TIMELOG) => {
	return async (dispatch: any, getState: any) => {
		const state: RootState = getState();
		const newData = [...state.timeLog.LogData, data];
		console.log("return ~ newData", newData);
		localStorage.setItem("logData", JSON.stringify(newData));
		dispatch(updateAllData(newData));
	};
};

export const UpdateLogData = (data: TIMELOG) => {
	return async (dispatch: any, getState: any) => {
		const state: RootState = getState();
		const oldData = state.timeLog.LogData.filter((Logdata: TIMELOG) => {
			if (Logdata.id === data.id) {
				return false;
			} else {
				return true;
			}
		});
		const newData = [...oldData, data];
		localStorage.setItem("logData", JSON.stringify(newData));
		dispatch(updateAllData(newData));
	};
};

export const deleteLog = (id: string) => {
	return async (dispatch: any, getState: any) => {
		const state: RootState = getState();
		const newData = state.timeLog.LogData.filter((Logdata: TIMELOG) => {
			if (Logdata.id === id) {
				return false;
			} else {
				return true;
			}
		});
		localStorage.setItem("logData", JSON.stringify(newData));
		dispatch(updateAllData(newData));
	};
};


export const AddOldLogData = (data: TIMELOG[]) => {
	return async (dispatch: any, getState: any) => {
		const newData = [...data];
		dispatch(updateAllData(newData));
	};
};