import { createApi } from "@reduxjs/toolkit/query";
import axiosBaseQuery from "./axiosBaseQuery";
import { config } from "@/config";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: axiosBaseQuery({ baseUrl: config.baseUrl }),
    endpoints: () => ({})
})