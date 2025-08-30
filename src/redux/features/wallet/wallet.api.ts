/* eslint-disable @typescript-eslint/no-explicit-any */
// features/auth/auth.api.ts
import axiosBaseQuery from "@/redux/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";


export const walletApi = createApi({
  reducerPath: "walletApi",
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.VITE_LIVE_LINK }),
  endpoints: (builder) => ({

    getWallet: builder.query({
      query: (userId: string) => ({
        url: `/wallet/${userId}`,
        method: "GET",
      }),
    }),

    popup: builder.mutation({
      query: (transaction) => ({
        url: "/wallet/deposite",
        method: "POST",
        data: transaction
      }),
    }),

    sendMoney: builder.mutation({
      query: (transaction) => ({
        url: "/wallet/sendMoney",
        method: "POST",
        data: transaction
      }),
    }),

    withdraw: builder.mutation({
      query: (transaction) => ({
        url: "/wallet/withdraw",
        method: "POST",
        data: transaction
      }),
    }),
    
    getOwnTransaction: builder.query({
      query: (id: string) => ({
        url: `/wallet/transaction/${id}`,
        method: "GET",
      }),
    }),

    cashin: builder.mutation({
      query: (cashInInfo) => ({
        url: "/wallet/cash-in",
        method: "POST",
        data: cashInInfo
      }),
    }),

    cashout: builder.mutation({
      query: (cashInInfo) => ({
        url: "/wallet/cash-out",
        method: "POST",
        data: cashInInfo
      }),
    }),
    

  }),
});

export const { 
  useGetWalletQuery, 
  useSendMoneyMutation, 
  usePopupMutation, 
  useWithdrawMutation,
  useGetOwnTransactionQuery,
  useCashinMutation,
  useCashoutMutation
 } = walletApi;
