import classNames from "classnames";
import * as React from "react";

import styles from "./icon.module.scss";
import { IconProps } from "./Icon.types";

import * as iconsList from "./icons";

import { BrowserSpriteSymbol } from "@shared/lib/BrowserSpriteSymbol";

export const Icon: React.FC<IconProps> = ({
	icon,
	width,
	height = "100%",
	className,
	...props
}) => {
	const iconClasses = classNames(className, styles.icon);

	const symbol = iconsList[icon] as BrowserSpriteSymbol;

	return (
		<svg
			viewBox={symbol.viewBox}
			width={width}
			height={height}
			className={iconClasses}
			{...props}
		>
			<use xlinkHref={`#${symbol.id}`} />
		</svg>
	);
};
