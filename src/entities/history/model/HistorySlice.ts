import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
	HistoryInitalStateTypes,
	MessagePayloadAction,
} from "./HistorySlice.types";

const initialState: HistoryInitalStateTypes = {
	history: [],
};

export const HistorySlice = createSlice({
	name: "history",
	initialState,
	reducers: {
		// { chatId: 'test, message: { text: 'any text', time: 1223344, type: 'type'} }
		addHistory: (state, action: PayloadAction<MessagePayloadAction>) => {
			const { chatId, message } = action.payload;

			if (state.history.find((elem) => elem.chatId === chatId) != null) {
				state.history = state.history.map((elem) =>
					elem.chatId === chatId
						? {
								...elem,
								messagesList: message
									? [...elem.messagesList, message]
									: [...elem.messagesList],
								isActive: true,
						  }
						: elem
				);
			} else if (!message) {
				state.history = [
					...state.history,
					{ chatId, messagesList: [], isActive: true },
				];
			} else {
				state.history = [
					...state.history,
					{ chatId, messagesList: [message], isActive: true },
				];
			}
		},
		setActiveChat: (state, action: PayloadAction<string>) => {
			const chatId = action.payload;

			state.history = state.history.map((elem) =>
				elem.chatId === chatId
					? { ...elem, isActive: true }
					: { ...elem, isActive: false }
			);
		},
	},
});

export const { addHistory, setActiveChat } = HistorySlice.actions;
