type MessageType = "incoming" | "outgoing";

export interface MessageProps {
	children: React.ReactNode;
	type: MessageType;
	isAngle?: boolean;
	time: string;
}
