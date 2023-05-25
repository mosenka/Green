import * as React from "react";

export interface TextareaProps {
	value: string;
	handlerChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	handlerKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	className?: string;
}
