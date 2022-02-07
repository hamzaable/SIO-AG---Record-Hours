import { TIMELOG } from "../../interfaces";
import { RootState } from "../store";
import { timeLogActions } from "./timeLogReducer";

const { updateAllData } = timeLogActions;

export const AddNewLogData = (data:TIMELOG) => {
	return async (dispatch: any, getState:any) => {
        const state: RootState = getState();
        const newData = [...state.timeLog.LogData,data]
		dispatch(updateAllData(newData));
	};
};