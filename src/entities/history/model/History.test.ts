import React from "react";

import { addHistory, HistorySlice } from "./HistorySlice";

import {
	HistoryItemType,
	HistoryInitalStateTypes,
	MessageItemType,
	MessagePayloadAction,
} from "./HistorySlice.types";

describe("entities/history/model/HistorySlice", () => {
	let initalState: HistoryInitalStateTypes;
	let message: MessageItemType;
	let historyItem: HistoryItemType;
	const chatId = "123@c.us";

	beforeEach(() => {
		initalState = {
			history: [],
		};

		message = {
			text: "test2",
			time: 1223456,
			type: "incoming",
		};

		historyItem = {
			chatId,
			messagesList: [message],
			isActive: true,
		};
	});

	it("initialize slice with initialValue", () => {
		const historySliceInit = HistorySlice.reducer(undefined, {
			type: "unknown",
		});

		expect(historySliceInit).toEqual(initalState);
	});

	it("add new message to history for new contact ", () => {
		const actionPayload: MessagePayloadAction = { chatId, message };
		const state = HistorySlice.reducer(
			initalState,
			addHistory(actionPayload)
		);

		expect(state.history).toEqual([historyItem]);
	});

	it("add new history item without message", () => {
		const actionPayload: MessagePayloadAction = { chatId };
		const state = HistorySlice.reducer(
			initalState,
			addHistory(actionPayload)
		);

		expect(state.history).toEqual([
			{
				chatId,
				isActive: true,
				messagesList: [],
			},
		]);
	});

	it("add new message for existing contact", () => {
		const actionPayload = { chatId, message };
		const initState: HistoryInitalStateTypes = {
			history: [
				{
					chatId,
					messagesList: [
						{ text: "test1", time: 123456, type: "incoming" },
					],
					isActive: false,
				},
			],
		};

		const result = [
			{
				chatId,
				messagesList: [
					{ text: "test1", time: 123456, type: "incoming" },
					message,
				],
				isActive: true,
			},
		];

		const state = HistorySlice.reducer(
			initState,
			addHistory(actionPayload)
		);

		expect(state.history).toEqual(result);
	});

	it("add empty message for existing contact", () => {
		const actionPayload = { chatId };
		const initState: HistoryInitalStateTypes = {
			history: [
				{
					chatId,
					messagesList: [
						{ text: "test1", time: 123456, type: "incoming" },
					],
					isActive: false,
				},
			],
		};

		const result = [
			{
				chatId,
				messagesList: [
					{ text: "test1", time: 123456, type: "incoming" },
				],
				isActive: true,
			},
		];

		const state = HistorySlice.reducer(
			initState,
			addHistory(actionPayload)
		);

		expect(state.history).toEqual(result);
	});
});
