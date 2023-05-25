import { useAppDispatch } from "@app/hooks/useReducer";
import { convertPhoneToChatId } from "@entities/contact/lib/helpers";
import { addHistory } from "@entities/history";

export const useAddActiveContact = () => {
	const dispatch = useAppDispatch();

	const setChat = (id: string) => {
		if (!id) return;
		if (id.length === 0) return;
		const chatId = convertPhoneToChatId(id);
		dispatch(addHistory({ chatId }));
	};

	return { setActiveChat: setChat };
};
