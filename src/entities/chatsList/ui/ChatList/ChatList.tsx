import * as React from "react";

import styles from "./ChatList.module.scss";

import { ChatListItem } from "../ChatListItem/ChatListItem";

import { useAppDispatch, useAppSelector } from "@app/hooks/useReducer";
import { setActiveChat } from "@entities/history";

export const ChatList: React.FC = () => {
	const { history } = useAppSelector((state) => state.history);

	const dispatch = useAppDispatch();

	const handlerClick = (id: string) => {
		dispatch(setActiveChat(id));
	};

	const chatListData = history?.map((elem) => (
		// console.log(elem.messagesList?.at(-1));
		<ChatListItem
			key={elem.chatId}
			id={elem.chatId}
			name={elem.chatId}
			text=""
			date="02.05.2022"
			handlerClick={handlerClick}
		/>
	));

	return <div className={styles.wrapper}>{chatListData}</div>;
};
