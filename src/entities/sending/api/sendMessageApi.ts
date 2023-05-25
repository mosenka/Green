import {
	SendMessageResponseType,
	SendMessageType,
} from "../model/SendMessage.type";

import { getLoginFromLocalStorage } from "@entities/login";

import { commonApi } from "@shared/api/commonApi";

export const sendMessageApi = commonApi.injectEndpoints({
	endpoints: (build) => ({
		sendMessage: build.mutation<SendMessageResponseType, SendMessageType>({
			query(data) {
				const { apiTokenInstance, idInstance } =
					getLoginFromLocalStorage();

				return {
					url: `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["SendMessage"],
		}),
	}),
});

export const { useSendMessageMutation } = sendMessageApi;
