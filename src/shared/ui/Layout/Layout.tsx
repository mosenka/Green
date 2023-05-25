import classNames from "classnames";
import * as React from "react";

import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.types";

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
