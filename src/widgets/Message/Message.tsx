import classNames from "classnames";
import * as React from "react";

import styles from "./Message.module.scss";
import { MessageProps } from "./Message.types";

import { Icon } from "@shared/ui";

export const Message: React.FC<MessageProps> = ({
	type,
	children,
	isAngle = true,
	time,
}) => {
	const wrapperClasses = classNames(styles.wrapper, {
		[styles["wrapper--outgoing"]]: type === "outgoing",
	});
	const containerClasses = classNames(
		styles.container,
		{
			[styles["container--outgoing"]]: type === "outgoing",
		},
		{
			[styles["container--not-angle"]]: !isAngle,
		}
	);
	const angleClasses = classNames(styles.angle, {
		[styles["angle--outgoing"]]: type === "outgoing",
	});

	return (
		<div className={wrapperClasses}>
			<div className={containerClasses}>
				{isAngle && (
					<span className={angleClasses}>
						<Icon
							icon={
								type === "outgoing" ? "angleReverse" : "angle"
							}
							width={8}
						/>
					</span>
				)}
				<div className={styles.text}>{children}</div>
				<div className={styles.time}>{time}</div>
			</div>
		</div>
	);
};
