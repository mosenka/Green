import * as React from "react";

export interface TextareaProps {
	value: string;
	handlerChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	handlerKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
	className?: string;
}
