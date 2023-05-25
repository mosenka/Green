import { DeleteNotificationType } from "./DeleteNotification.type";
import { NotificationType } from "./Notification.type";

import { getLoginFromLocalStorage } from "@entities/login";
import { commonApi } from "@shared/api/commonApi";

export const notificationApi = commonApi.injectEndpoints({
	endpoints: (build) => ({
		getNotification: build.query<NotificationType>({
			query() {
				const { apiTokenInstance, idInstance } =
					getLoginFromLocalStorage();

				return {
					url: `/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
				};
			},
			providesTags: (result) => [{ type: "Notification" }],
		}),
		deleteNotification: build.mutation<DeleteNotificationType, string>({
			query(id) {
				const { apiTokenInstance, idInstance } =
					getLoginFromLocalStorage();

				return {
					url: `/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${id}`,
					method: "DELETE",
				};
			},
			invalidatesTags: ["Notification"],
		}),
	}),
});

export const { useGetNotificationQuery, useDeleteNotificationMutation } =
	notificationApi;
