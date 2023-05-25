import { LoginStatusType } from "./loginStatus.type";

import { LoginTypes } from "@entities/login/api/LoginTypes";
import { commonApi } from "@shared/api/commonApi";

export const loginApi = commonApi.injectEndpoints({
	endpoints: (build) => ({
		login: build.query<LoginStatusType | LoginTypes, LoginTypes>({
			query(arg) {
				return {
					url: `/waInstance${arg.idInstance}/getStateInstance/${arg.apiTokenInstance}`,
				};
			},
			transformResponse: (
				response: LoginStatusType,
				meta,
				arg: LoginTypes
			) => {
				if (response.stateInstance === "authorized") {
					localStorage.setItem("user", JSON.stringify(arg));
					return arg;
				}
				return response;
			},
			providesTags: ["Login"],
		}),
	}),
});

export const { useLoginQuery } = loginApi;
