import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import rootReducer from "./rootReducers";


const store = createStore(
	rootReducer,
    applyMiddleware(thunk)
);



export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch