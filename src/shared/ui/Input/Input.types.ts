import * as React from "react";

export interface InputProps {
	value: string;
	handlerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handlerKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	className?: string;
	placeholderText?: string;
	isError?: boolean;
}
