import { LoginLocalStorageType } from "@entities/login";
import { LoginTypes } from "@entities/login/api/LoginTypes";

export const getLoginFromLocalStorage = (): LoginLocalStorageType => {
	let idInstance = "";
	let apiTokenInstance = "";
	const user = localStorage.getItem("user");
	let isError = false;

	if (!user) {
		isError = true;
	}
	if (user?.length === 0) {
		isError = true;
	}

	if (user !== null && user.length > 0) {
		const {
			idInstance: localidInstance,
			apiTokenInstance: localApiTokenInstance,
		} = JSON.parse(user) as LoginTypes;
		if (!localidInstance || !localApiTokenInstance) {
			isError = true;
		} else {
			idInstance = localidInstance;
			apiTokenInstance = localApiTokenInstance;
		}
	}
	return { idInstance, apiTokenInstance, isError };
};
