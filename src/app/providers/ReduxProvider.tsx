import React from "react";

import { Provider } from "react-redux";

import { setupStore } from "../api/store";

const store = setupStore();

export const ReduxProvider: React.FC = ({
	children,
}: {
	children: React.ReactNode;
}) => <Provider store={store}>{children}</Provider>;
