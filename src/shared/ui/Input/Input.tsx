import classNames from "classnames";
import * as React from "react";

import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
	value,
	handlerChange,
	className,
	placeholderText,
	isError,
	handlerKeyDown,
	...props
}) => {
	const inputClasses = classNames(styles.input, className, {
		[styles["is-error"]]: isError,
	});

	return (
		<input
			className={inputClasses}
			value={value}
			onChange={handlerChange}
			placeholder={placeholderText}
			onKeyDown={handlerKeyDown}
			{...props}
		/>
	);
};
