export type WebhookType =
	| "incomingMessageReceived"
	| "outgoingMessageReceived"
	| "outgoingAPIMessageReceived"
	| "outgoingMessageStatus"
	| "stateInstanceChanged"
	| "statusInstanceChanged"
	| "deviceInfo"
	| "incomingCall";

export interface NotificationType {
	receiptId: string;
	body: {
		typeWebhook: WebhookType;
		instanceData: object;
		timestamp: number;
		idMessage?: string;
		senderData?: {
			chatId: string;
			sender: string;
		};
		messageData?: {
			typeMessage: string;
			textMessageData: {
				textMessage: string;
			};
		};
	};
}
