import { settingsActions } from "./settingsReducer";

const {
	updateModalState
} = settingsActions;

export const showModal = () => {
	return async (dispatch: any, getState: any, { getFirebase }: any) => {
		dispatch(updateModalState(true));
	};
};

export const hideModal = () => {
	return async (dispatch: any, getState: any, { getFirebase }: any) => {
		dispatch(updateModalState(false));
	};
};

