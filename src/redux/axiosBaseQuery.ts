/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { axiosinstance } from "../lib/axios";

interface AxiosBaseQueryArgs {
  baseUrl?: string; // Optional, so you can skip if not needed
}

interface AxiosQueryArgs {
  url: string;
  method?: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
}


const axiosBaseQuery =
  ({ baseUrl = "" }: AxiosBaseQueryArgs = {}): BaseQueryFn<
    AxiosQueryArgs,
    unknown,
    unknown
  > =>
  async ({ url, method = "GET", data, params, headers }) => {
    try {
      const result = await axiosinstance({
        url: baseUrl + url, // ✅ use baseUrl here
        method,
        data,
        params,
        headers,
      });

      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
