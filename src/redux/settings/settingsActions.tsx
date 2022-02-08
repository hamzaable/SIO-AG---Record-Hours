import { settingsActions } from "./settingsReducer";

const {
    setTimeLogModal
} = settingsActions;



export const getTimeLogModal = (visibility: boolean, id: string) => {
	return async (dispatch: any, getState: any,) => {
		dispatch(setTimeLogModal({ isVisible: visibility, openID: id }));
	};
};

