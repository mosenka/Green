import { LoginTypes } from "@entities/login/api/LoginTypes";

export interface LoginLocalStorageType extends LoginTypes {
	isError: boolean;
}
