import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

import { commonApi } from "@shared/api/commonApi";

export const setupStore = () =>
	configureStore({
		reducer: rootReducer,
		// devTools: process.env.NODE_ENV !== "production",
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(commonApi.middleware),
	});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
