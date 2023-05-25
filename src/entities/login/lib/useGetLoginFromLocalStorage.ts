import { useEffect, useState } from "react";

import { LoginTypes } from "@entities/login/api/LoginTypes";

export const useGetLoginFromLocalStorage = () => {
	const [isError, setIsError] = useState(false);
	const [idInstance, setIdInstance] = useState<string>("");
	const [apiTokenInstance, setApiTokenInstance] = useState<string>("");

	useEffect(() => {
		const user = localStorage.getItem("user");

		if (!user) {
			setIsError(true);
			return;
		}
		if (user.length === 0) {
			setIsError(true);
		}
		const {
			idInstance: localIdInstance,
			apiTokenInstance: localApiTokenInstance,
		} = JSON.parse(user) as LoginTypes;
		if (
			localApiTokenInstance.length === 0 ||
			localIdInstance.length === 0
		) {
			setIsError(true);
			return;
		}
		setIdInstance(localIdInstance);
		setApiTokenInstance(localApiTokenInstance);
	}, []);

	return {
		isError,
		idInstance,
		apiTokenInstance,
	};
};
