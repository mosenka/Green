import classNames from "classnames";
import * as React from "react";

import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
	isTransparent = false,
	children,
	...props
}) => {
	const buttonClasses = classNames(styles.button, {
		[styles["is-transparent"]]: isTransparent,
	});

	return (
		<button className={buttonClasses} type="button" {...props}>
			{children}
		</button>
	);
};
