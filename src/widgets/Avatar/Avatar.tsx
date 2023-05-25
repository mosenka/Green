import classNames from "classnames";
import * as React from "react";

import styles from "./Avatar.module.scss";
import { AvatarProps } from "./Avatar.types";

import { Icon } from "@shared/ui";

export const Avatar: React.FC<AvatarProps> = ({
	src,
	size = "normal",
	altText,
}) => {
	const wrapperClasses = classNames(styles.wrapper, styles[size]);

	return (
		<div className={wrapperClasses}>
			{src ? (
				<img src={src} alt={altText} className={styles.img} />
			) : (
				<Icon
					icon="user"
					width={size === "normal" ? 49 : 40}
					height={size === "normal" ? 49 : 40}
				/>
			)}
		</div>
	);
};
