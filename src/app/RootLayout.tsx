import React from "react";

import { ReduxProvider } from "@app/providers/ReduxProvider";

export const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<ReduxProvider>{children}</ReduxProvider>
);
