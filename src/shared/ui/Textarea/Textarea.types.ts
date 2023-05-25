export interface TextareaProps {
	value: string;
	handlerChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	className?: string;
}
