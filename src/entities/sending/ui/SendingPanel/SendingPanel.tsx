import React, { useEffect, useState } from "react";

import styles from "./SendingPanel.module.scss";

import { useSendMessageMutation } from "../../api/sendMessageApi";

import { useAppDispatch } from "@app/hooks/useReducer";
import { useGetActiveChat } from "@entities/history";
import { addHistory } from "@entities/history/model/HistorySlice";

import { Button, Footer, Icon, Textarea } from "@shared/ui";

export const SendingPanel: React.FC = () => {
	const [message, setMessage] = useState("");
	const { activeChatId } = useGetActiveChat();

	const [sendMessage, { isSuccess }] = useSendMessageMutation();

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!isSuccess) return;
		if (!activeChatId) return;

		const time = new Date();

		dispatch(
			addHistory({
				chatId: activeChatId,
				message: {
					text: message,
					time: time.getTime(),
					type: "outgoing",
				},
			})
		);

		setMessage("");
	}, [isSuccess, dispatch]);

	const handlerClick = () => {
		if (!activeChatId) return;
		if (message.length > 0) {
			sendMessage({
				chatId: activeChatId,
				message,
			});
		}
	};

	const handlerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const target = event.target as HTMLTextAreaElement;
		setMessage(target.value);
	};

	const handlerKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			handlerClick();
		}
	};

	return (
		<Footer>
			<div className={styles.buttons}>
				<Button>
					<Icon icon="smiley" width={24} />
				</Button>
				<Button>
					<Icon icon="clip" width={24} />
				</Button>
			</div>
			<Textarea
				value={message}
				handlerChange={handlerChange}
				className={styles.field}
				onKeyDown={handlerKeyDown}
			/>
			<Button onClick={handlerClick}>
				<Icon icon="send" width={24} />
			</Button>
		</Footer>
	);
};
