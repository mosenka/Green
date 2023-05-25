import * as React from "react";

import styles from "./ChatActionsGroup.module.scss";

import { Button, Icon } from "@shared/ui";

export const ChatActionsGroup: React.FC = () => (
	<div className={styles.wrapper}>
		<Button>
			<Icon icon="glass" width={24} />
		</Button>
		<Button>
			<Icon icon="dots" width={24} />
		</Button>
	</div>
);
