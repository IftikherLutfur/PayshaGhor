import { createApi } from "@reduxjs/toolkit/query";
import axiosBaseQuery from "./axiosBaseQuery";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.LIVE_LINK}),
    tagTypes:["USER"],
      endpoints: () => ({}),
})