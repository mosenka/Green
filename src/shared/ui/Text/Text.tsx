import classNames from "classnames";
import * as React from "react";

import styles from "./Text.module.scss";
import { TextProps } from "./Text.types";

export const Text: React.FC<TextProps> = ({
	As = "span",
	children,
	size = 16,
	className,
	weight = 400,
	isUppercase = false,
	isCapitalize = false,
}) => {
	const textClasses = classNames(
		styles.text,
		className,
		{
			[styles["text--uppercase"]]: isUppercase,
		},
		{
			[styles["text--capitalize"]]: isCapitalize,
		},
		{
			[styles[`w${weight}`]]: weight,
		},
		{
			[styles[`s-${size}`]]: size,
		}
	);

	return <As className={textClasses}>{children}</As>;
};
