import { combineReducers } from "redux";
import settingsReducer from "./settings/settingsReducer";
import timeLogReducer from "./timeLog/timeLogReducer";

const rootReducers = combineReducers({
	settings: settingsReducer,
	timeLog: timeLogReducer,
});

export default rootReducers;
