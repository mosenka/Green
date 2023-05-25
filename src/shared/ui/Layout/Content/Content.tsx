import classNames from "classnames";
import * as React from "react";

import styles from "./Content.module.scss";
import { ContentProps } from "./Content.types";

export const Content: React.FC<ContentProps> = ({ className, children }) => {
	const contentClassses = classNames(styles.content, className);

	return <div className={contentClassses}>{children}</div>;
};
