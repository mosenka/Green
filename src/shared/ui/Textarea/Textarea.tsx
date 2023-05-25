import classNames from "classnames";
import * as React from "react";

import styles from "./Textarea.module.scss";
import { TextareaProps } from "./Textarea.types";

export const Textarea: React.FC<TextareaProps> = ({
	value,
	handlerChange,
	className,
	...props
}) => (
	<textarea
		className={classNames(styles.textarea, className)}
		value={value}
		onChange={handlerChange}
		rows={1}
		{...props}
	/>
);
