export interface ContactInfoTypes {
	avatar: string;
	name: string;
	email: string;
	category: string;
	description: string;
	products?: object;
	chatId: string;
	lastSeen?: string;
	isArchive: boolean;
	isDisappearing: boolean;
	isMute: boolean;
	messageExpiration: number;
	muteExpiration: number;
}
