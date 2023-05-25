import { LoginLocalStorageType } from "@entities/login";
import { LoginTypes } from "@entities/login/api/LoginTypes";

export const getLoginFromLocalStorage = (): LoginLocalStorageType => {
	const user = localStorage.getItem("user");
	let isError = false;

	if (!user) {
		isError = true;
	}
	if (user.length === 0) {
		isError = true;
	}
	const { idInstance, apiTokenInstance } = JSON.parse(user) as LoginTypes;

	if (!idInstance || !apiTokenInstance) {
		isError = true;
	}

	return { idInstance, apiTokenInstance, isError };
};
