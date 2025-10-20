/* eslint-disable @typescript-eslint/no-explicit-any */
// features/auth/auth.api.ts
import axiosBaseQuery from "@/redux/axiosBaseQuery";
import type { IUserUpdate, LoginPayload, RegisterPayload } from "@/types/auth.type";
import { createApi } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.VITE_LIVE_LINK }),
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

    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"], // this will trigger useUserInfoQuery to refetch
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

    editUser: builder.mutation<any, IUserUpdate>({
      query: (body) => {
        return {
          url: "/user/edit-profile",
          method: "PATCH",
          data: body,
          headers: { "Content-Type": "application/json" }, // optional, backend যদি json expect করে
        };
      },
    }),

    approveAgent: builder.mutation({
      query: ({ agentId, userStatus }) => ({
        url: `/user/agent-approve/${agentId}`,
        method: "PATCH",
        data: { userStatus },  // ✅ must match backend
      }),
    }),

    userStatus: builder.mutation({
      query: ({ userId, userStatus }) => ({
        url: `/user/userStatus/${userId}`,
        method: "PATCH",
        data: { userStatus },  // ✅ must match backend
      }),
    }),

    getAllUser: builder.query({
      query: () => {
        return {
          url: "/user",
          method: "GET"
        }
      }
    }),

    getAgentUser: builder.query({
      query: () => {
        return {
          url: "/user/userAndAgent",
          method: "GET"
        }
      }
    }),

    getAllTransaction: builder.query({
      query: () => {
        return {
          url: "/wallet/transaction",
          method: "GET"
        }
      }
    }),

  }),
});

export const { useRegisterMutation, useLoginMutation, useUserInfoQuery, useLogoutMutation, useEditUserMutation, useGetAllUserQuery, useApproveAgentMutation,
  useGetAllTransactionQuery, useUserStatusMutation, useGetAgentUserQuery
} = authApi;