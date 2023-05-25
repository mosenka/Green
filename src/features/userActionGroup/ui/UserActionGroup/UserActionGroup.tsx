import { useRouter } from "next/router";
import * as React from "react";

import styles from "./UserActionGroup.module.scss";

import { Button, Icon } from "@shared/ui";

export const UserActionGroup: React.FC = () => {
	const router = useRouter();

	const logout = () => {
		localStorage.removeItem("user");
		router.push("/login");
	};

	return (
		<div className={styles.wrapper}>
			<Button onClick={logout}>
				<Icon icon="exit" width={24} className={styles.icon} />
			</Button>
			<Button>
				<Icon icon="status" width={24} />
			</Button>
			<Button>
				<Icon icon="message" width={24} />
			</Button>
			<Button>
				<Icon icon="dots" width={24} />
			</Button>
		</div>
	);
};
