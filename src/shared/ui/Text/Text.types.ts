type TSizes = 32 | 17 | 16 | 14 | 12;

export interface TextProps {
	As?: "div" | "p" | "span" | "h1" | "h2" | "h3" | "h4";
	children: React.ReactNode;
	className?: string;
	weight?: 100 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
	isUppercase?: boolean;
	isCapitalize?: boolean;
	size?: TSizes;
}
