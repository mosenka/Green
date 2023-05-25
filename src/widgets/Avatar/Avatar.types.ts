type TSize = "small" | "normal";

export interface AvatarProps {
	size?: TSize;
	src?: string | undefined;
	altText: string;
}
