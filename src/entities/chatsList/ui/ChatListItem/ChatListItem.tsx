import * as React from "react";

import styles from "./ChatListItem.module.scss";
import { ChatListItemProps } from "./ChatListItem.types";

import { Icon, Text } from "@shared/ui";
import { Avatar } from "@widgets/index";

export const ChatListItem: React.FC<ChatListItemProps> = ({
	id,
	avatarUrl,
	name,
	date,
	text,
	handlerClick,
}) => (
	<button
		className={styles.wrapper}
		onClick={() => handlerClick(id)}
		type="button"
	>
		<div className={styles.avatar}>
			<Avatar src={avatarUrl} altText={name} />
		</div>
		<div className={styles.text}>
			<div className={styles.header}>
				<Text As="p">{name}</Text>
				<Text size={12} isCapitalize className={styles.date}>
					{date}
				</Text>
			</div>
			<Text As="p" size={14}>
				{text}
			</Text>
			<span className={styles.tisk}>
				<Icon icon="tick" width={24} />
			</span>
		</div>
	</button>
);
