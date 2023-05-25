import * as React from "react";
import { useState } from "react";

import styles from "./AddContactForm.module.scss";

import { useAddActiveContact } from "@entities/contact";

import { Button, Icon, Input } from "@shared/ui";

export const AddContactForm: React.FC = () => {
	const [value, setValue] = useState("");
	const [isError, setIsError] = useState(false);

	const { setActiveChat } = useAddActiveContact();

	const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsError(false);
		const target = event.target as HTMLInputElement;
		setValue(target.value);
	};

	const handlerClick = () => {
		if (!Number.isFinite(+value)) {
			setIsError(true);
			return;
		}
		setActiveChat(value);
		setValue("");
	};

	const handlerKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			handlerClick();
		}
	};

	return (
		<div className={styles.wrapper}>
			<Input
				value={value}
				handlerChange={handlerChange}
				placeholderText="введите номер телефона"
				isError={isError}
				handlerKeyDown={handlerKeyDown}
			/>
			<Button
				className={styles.button}
				title="добавить"
				onClick={handlerClick}
			>
				<Icon icon="add" width={24} />
			</Button>
		</div>
	);
};
