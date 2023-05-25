type MessageTypeType = "incoming" | "outgoing";

export interface MessageItemType {
	text: string;
	time: number;
	type: MessageTypeType;
}

export interface MessagePayloadAction {
	chatId: string;
	message?: MessageItemType;
}

export interface HistoryItemType {
	messagesList: MessageItemType[];
	chatId: string;
	isActive: boolean;
}

export interface HistoryInitalStateTypes {
	history: HistoryItemType[];
}
