export interface InputProps {
	value: string;
	handlerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	placeholderText?: string;
	isError?: boolean;
}
