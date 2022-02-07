import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    showModal:false,
};

const settingsSlice = createSlice({
	name: "settingsReducer",
	initialState,
	reducers: {
		updateModalState(state, action: any) {
			state.showModal = action.payload;
		},
	},
});

export const settingsActions = settingsSlice.actions;

const settingsReducer = settingsSlice.reducer;
export default settingsReducer;
