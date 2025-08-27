/* eslint-disable @typescript-eslint/no-explicit-any */
// features/auth/auth.api.ts
import axiosBaseQuery from "@/redux/axiosBaseQuery";
import type { LoginPayload, RegisterPayload } from "@/types/auth.type";
import { createApi } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.LIVE_LINK }),
  tagTypes: ["USER"],
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
      invalidatesTags:["USER"]
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
       
      }),
    }),

    userInfo: builder.query<any, void>({
      query: () => {
        return {
          url: "/user/me",
          method: "GET",
        };
      },
      providesTags: ["USER"],
    }),

  }),
});

export const { useRegisterMutation, useLoginMutation, useUserInfoQuery, useLogoutMutation } = authApi;
