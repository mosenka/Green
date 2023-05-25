import * as React from "react";

import emptyScreen from "@shared/assets/img/emptyScreen.svg";
import { BrowserSpriteSymbol } from "@shared/lib/BrowserSpriteSymbol";

import { Icon, Text } from "@shared/ui";
import styles from "entities/history/ui/EmptyScreen/EmptyScreen.module.scss";

export const EmptyScreen: React.FC = () => {
	const symbol = emptyScreen as BrowserSpriteSymbol;

	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<svg viewBox={symbol.viewBox} width={360}>
					<use xlinkHref={`#${symbol.id}`} />
				</svg>
				<Text
					As="h1"
					weight={300}
					size={32}
					className={styles.subtitle}
				>
					WhatsApp Web
				</Text>
				<Text As="p" size={14} className={styles.desc}>
					Отправляйте и получайте сообщения без необходимости
					оставлять телефон подключённым. <br />
					Используйте WhatsApp одновременно на четырёх связанных
					устройствах и одном телефоне.
				</Text>
				<div className={styles.footer}>
					<Icon icon="lock" width={10} />
					<Text size={14} className={styles.footer__text}>
						Защищено сквозным шифрованием
					</Text>
				</div>
			</div>
		</div>
	);
};
