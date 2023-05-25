import { useMemo, useState } from "react";

import { useAppSelector } from "@app/hooks/useReducer";

export const useMassageList = () => {
	const [chatId, setChatId] = useState<string>();
	const { history } = useAppSelector((state) => state.history);

	const messagesList = useMemo(() => {
		if (history.length === 0) return [];

		const list = history.find((item) => item.isActive);

		if (list !== null && list?.messagesList) {
			setChatId(list.chatId);
			return list.messagesList;
		}

		return [];
	}, [history]);

	return { messagesList, chatId };
};
