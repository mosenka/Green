import * as iconsList from "./icons";

export type IconsNameType = keyof typeof iconsList;

export interface IconProps {
	icon: IconsNameType;
	className?: string;
	width: number | string;
	height?: number | string;
}
