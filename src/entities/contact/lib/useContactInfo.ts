import { useEffect } from "react";

import { useGetContactInfoMutation } from "@entities/contact/api/contactApi";
import { useGetActiveChat } from "@entities/history";

export const useContactInfo = () => {
	const { activeChatId } = useGetActiveChat();

	const [getContactInfo, { data: contactInfo, isLoading, isError }] =
		useGetContactInfoMutation();

	useEffect(() => {
		if (!activeChatId) return;
		getContactInfo(activeChatId);
	}, [activeChatId, getContactInfo]);

	return {
		contactInfo,
		isError,
		isLoading,
		activeChatId,
	};
};
