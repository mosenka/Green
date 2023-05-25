import React from "react";

import { Provider } from "react-redux";

import { setupStore } from "../api/store";

const store = setupStore();

interface ReduxReduxProviderProps {
	children: React.ReactNode;
}

export const ReduxProvider: React.FC<ReduxReduxProviderProps> = ({
	children,
}) => <Provider store={store}>{children}</Provider>;
