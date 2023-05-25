export interface ChatListItemProps {
	id: string;
	avatarUrl?: string;
	name: string;
	date: string;
	text?: string;
	handlerClick: (id: string) => void;
}
