import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showModal: { isVisible: false, openID: "id" },
};

const settingsSlice = createSlice({
	name: "settingsReducer",
	initialState,
	reducers: {
		setTimeLogModal(state, action) {
			state.showModal = action.payload;
		},
	},
});

export const settingsActions = settingsSlice.actions;

const settingsReducer = settingsSlice.reducer;
export default settingsReducer;
