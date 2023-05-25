import { useEffect } from "react";

import {
	useDeleteNotificationMutation,
	useGetNotificationQuery,
} from "../api/notificationApi";

import { useAppDispatch } from "@app/hooks/useReducer";

import { addHistory } from "@entities/history/model/HistorySlice";

export const useNotification = () => {
	const { data: notification, refetch } = useGetNotificationQuery(undefined, {
		pollingInterval: 500,
	});

	const [deleteNotification] = useDeleteNotificationMutation();

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!notification) return;

		if (notification?.body?.typeWebhook !== "incomingMessageReceived") {
			deleteNotification(notification.receiptId);
			refetch();
		}
		const { body } = notification;
		if (body && body?.messageData?.typeMessage === "textMessage") {
			dispatch(
				addHistory({
					chatId: body.senderData?.chatId ?? "",
					message: {
						time: body.timestamp,
						text: body.messageData?.textMessageData?.textMessage,
						type: "incoming",
					},
				})
			);
			refetch();
		}
		deleteNotification(notification.receiptId);
	}, [notification, dispatch, deleteNotification, refetch]);

	return { notification };
};
