import { combineReducers } from "redux";

import { HistorySlice } from "@entities/history";
import { commonApi } from "@shared/api/commonApi";

export const rootReducer = combineReducers({
	[HistorySlice.name]: HistorySlice.reducer,
	[commonApi.reducerPath]: commonApi.reducer,
});
