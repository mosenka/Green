import classNames from "classnames";
import * as React from "react";

import { Content } from "./Content/Content";

import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.types";
import { Sidebar } from "./Sidebar/Sidebar";

export const Layout: React.FC<LayoutProps> = ({
	children,
	isSmall = false,
}) => {
	const popupClasses = classNames(styles.popup, {
		[styles["is-small"]]: isSmall,
	});

	return (
		<div className={styles.layout}>
			<div className={popupClasses}>{children}</div>
		</div>
	);
};

Layout.Content = Content;
Layout.Sidebar = Sidebar;
