/* eslint-disable @typescript-eslint/no-explicit-any */
// features/auth/auth.api.ts
import axiosBaseQuery from "@/redux/axiosBaseQuery";
import type { LoginPayload, RegisterPayload } from "@/types/auth.type";
import { createApi } from "@reduxjs/toolkit/query/react";
 

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.LIVE_LINK }),
  endpoints: (builder) => ({
    register: builder.mutation<any, RegisterPayload>({
      query: (credentials) => ({
        url: "/user",
        method: "POST",
        data: credentials,
      }),
    }),

    login: builder.mutation<any, LoginPayload>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        data: credentials,
      }),
    }),

  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
