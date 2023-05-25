import classNames from "classnames";
import * as React from "react";

import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.types";

export const Header: React.FC<HeaderProps> = ({ children, className }) => {
	const headerClasses = classNames(styles.header, className);

	return <header className={headerClasses}>{children}</header>;
};
