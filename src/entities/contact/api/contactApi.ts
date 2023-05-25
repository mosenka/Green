import { ContactInfoTypes } from "./ContactInfo.types";

import { getLoginFromLocalStorage } from "@entities/login";

import { commonApi } from "@shared/api/commonApi";

export const contactApi = commonApi.injectEndpoints({
	endpoints: (build) => ({
		getContactInfo: build.mutation<ContactInfoTypes, string>({
			query(chatId) {
				const { apiTokenInstance, idInstance } =
					getLoginFromLocalStorage();

				return {
					url: `/waInstance${idInstance}/GetContactInfo/${apiTokenInstance}`,
					method: "POST",
					body: { chatId },
				};
			},
			invalidatesTags: ["ContactInfo"],
		}),
	}),
});

export const { useGetContactInfoMutation } = contactApi;
