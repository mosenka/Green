import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import config from "../lib/config";

import { tags } from "@shared/api/tags";

export const commonApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: config.API__URL,
		prepareHeaders: (headers) => {
			headers.set("Content-Type", "application/json");
			return headers;
		},
	}),
	tagTypes: tags,
	reducerPath: "commonApi",
	endpoints: () => ({}),
});
