/* eslint-disable @typescript-eslint/no-explicit-any */
// features/auth/auth.api.ts
import axiosBaseQuery from "@/redux/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";


export const walletApi = createApi({
  reducerPath: "walletApi",
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.LIVE_LINK }),
  endpoints: (builder) => ({

    getWallet: builder.query({
      query: (userId: string) => ({
        url: `/wallet/${userId}`,
        method: "GET",
      }),
    }),

    sendMoney: builder.mutation({
      query: (transaction) => ({
        url: "/wallet/sendMoney",
        method: "POST",
        data: transaction
      }),
    }),
  }),
});

export const { useGetWalletQuery, useSendMoneyMutation } = walletApi;
