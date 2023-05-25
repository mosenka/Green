import { useEffect, useState } from "react";

import { useAppSelector } from "@app/hooks/useReducer";

export const useGetActiveChat = () => {
	const { history } = useAppSelector((state) => state.history);
	const [activeChatId, setActiveChatId] = useState<string>();

	useEffect(() => {
		if (history.length === 0) return;
		const historyItem = history.find((item) => item.isActive);

		if (!historyItem) return;
		setActiveChatId(historyItem.chatId);
	}, [history]);

	return { activeChatId };
};
