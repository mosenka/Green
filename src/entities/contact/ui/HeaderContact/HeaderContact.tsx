import * as React from "react";

import styles from "./HeaderContact.module.scss";
import { HeaderContactProps } from "./HeaderContact.types";

import { useContactInfo } from "@entities/contact/lib/useContactInfo";
import { Header, Text } from "@shared/ui";
import { Avatar } from "@widgets/index";

export const HeaderContact: React.FC<HeaderContactProps> = ({
	buttonsSlot,
}) => {
	const { contactInfo, activeChatId } = useContactInfo();

	return (
		<Header>
			<div className={styles.user}>
				<Avatar src={contactInfo?.avatar} />
				<div className={styles.info}>
					<Text As="p">
						{contactInfo?.name ? contactInfo.name : activeChatId}
					</Text>
					<Text As="p">был в сети тогда то...</Text>
				</div>
			</div>
			{buttonsSlot}
		</Header>
	);
};
