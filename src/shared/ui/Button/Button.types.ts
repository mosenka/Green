import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isTransparent?: boolean;
	children?: React.ReactNode;
}
