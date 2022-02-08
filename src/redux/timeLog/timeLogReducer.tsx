import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../functions";


const initialState = {
	LogData: [],
};

const timeLogSlice = createSlice({
	name: "timeLogReducer",
	initialState,
	reducers: {
		updateAllData(state, action: any) {
			state.LogData = action.payload;
		},
	},
});

export const timeLogActions = timeLogSlice.actions;

const timeLogReducer = timeLogSlice.reducer;
export default timeLogReducer;
