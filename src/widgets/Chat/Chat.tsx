import * as React from "react";

import styles from "./Chat.module.scss";

import { HeaderContact } from "@entities/contact";
import { History, useGetActiveChat } from "@entities/history";
import { SendingPanel } from "@entities/sending";
import { ChatActionsGroup } from "@features/chatActionsGroup";

export const Chat: React.FC = () => {
	const { activeChatId } = useGetActiveChat();
	return (
		<div className={styles.wrapper}>
			{activeChatId && (
				<HeaderContact buttonsSlot={<ChatActionsGroup />} />
			)}
			<div className={styles.chat}>
				<History />
			</div>
			<SendingPanel />
		</div>
	);
};
