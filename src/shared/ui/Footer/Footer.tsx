import classNames from "classnames";
import * as React from "react";

import styles from "./Footer.module.scss";
import { FooterProps } from "./Footer.types";

export const Footer: React.FC<FooterProps> = ({ children, className }) => {
	const footerClasses = classNames(styles.footer, className);

	return <footer className={footerClasses}>{children}</footer>;
};
