import { useRouter } from "next/router";
import * as React from "react";
import { useEffect, useState } from "react";

import styles from "./LoginForm.module.scss";

import { useLoginQuery } from "@entities/login/api/loginApi";
import { LoginTypes } from "@entities/login/api/LoginTypes";

import { Button, Input, Text } from "@shared/ui";

export const LoginForm: React.FC = () => {
	const router = useRouter();

	const [idInstance, setIdInstance] = useState<string>("");
	const [apiTokenInstance, setApiTokenInstance] = useState<string>("");
	const [loginCredentials, setLoginCredentials] = useState<LoginTypes>({
		idInstance: "",
		apiTokenInstance: "",
	});

	const { data, isSuccess, isError, isLoading } = useLoginQuery(
		loginCredentials,
		{
			skip:
				loginCredentials.idInstance?.length === 0 ||
				loginCredentials.apiTokenInstance?.length === 0,
		}
	);

	const handlerClick = () => {
		if (idInstance.length > 0 && apiTokenInstance.length > 0) {
			setLoginCredentials({ apiTokenInstance, idInstance });
		}
	};

	useEffect(() => {
		if (!isSuccess || !data) return;

		router.push("/");
	}, [data, isSuccess, router]);

	if (isLoading) {
		return <Text As="p"> загрузка... </Text>;
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.subtitle}>
				<Text size={17}>Пожалуйст авторизуйтесь</Text>
				{isError && (
					<Text As="p" className={styles.error}>
						ошибка авторизации...
					</Text>
				)}
			</div>
			<div className={styles.input}>
				<Input
					placeholderText="idInstance"
					handlerChange={(
						event: React.ChangeEvent<HTMLInputElement>
					) => setIdInstance(event.target.value)}
					isError={isError}
				/>
			</div>
			<div className={styles.input}>
				<Input
					placeholderText="ApiTokenInstance"
					handlerChange={(
						event: React.ChangeEvent<HTMLInputElement>
					) => setApiTokenInstance(event.target.value)}
					isError={isError}
				/>
			</div>
			<Button isTransparent onClick={handlerClick}>
				<Text>Войти</Text>
			</Button>
		</div>
	);
};
