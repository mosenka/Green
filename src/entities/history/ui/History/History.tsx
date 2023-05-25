import classNames from "classnames";
import React from "react";

import styles from "./History.module.scss";
import { HistoryProps } from "./History.types";

import { useMassageList } from "../../lib/useMassageList";

import { EmptyScreen } from "../EmptyScreen/EmptyScreen";

import { Message } from "@/widgets";
import { useNotification } from "@entities/history/lib/useNotification";

import bgChat from "@shared/assets/img/bgChat.png";

export const History: React.FC<HistoryProps> = ({ className }) => {
	useNotification();

	const { chatId, messagesList } = useMassageList();

	const list = messagesList?.map((elem, index) => {
		const notAngle =
			index > 0 && messagesList[index - 1].type === elem.type;

		return (
			<Message
				type={elem.type}
				time="12:56"
				isAngle={!notAngle}
				key={elem.time}
			>
				{elem.text}
			</Message>
		);
	});

	if (!chatId || chatId.length === 0) {
		return <EmptyScreen />;
	}

	return (
		<div className={classNames(styles.wrapper, className)}>
			<div className={styles.overlay}>
				<div
					className={styles["overlay--image"]}
					style={{
						backgroundImage: `url(${bgChat.src})`,
					}}
				/>
				{list}
			</div>
		</div>
	);
};
