import classNames from "classnames";
import * as React from "react";

import styles from "./Sidebar.module.scss";
import { SidebarProps } from "./Sidebar.types";

export const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
	const sidebarClasses = classNames(styles.sidebar, className);

	return <div className={sidebarClasses}>{children}</div>;
};
