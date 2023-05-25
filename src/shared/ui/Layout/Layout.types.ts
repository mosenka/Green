import React from "react";

export interface LayoutProps {
	children: React.ReactNode;
	Content?: React.FC;
	Sidebar?: React.FC;
	isSmall?: boolean;
}
