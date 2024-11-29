import { AxiosRequestConfig } from "axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type ServiceQueryArgs<T, KType> = Parameters<KType[T]>[0];
export type ServiceQueryFn = (...args: any[]) => any;
export type RequestConfig<TFilter = any, TData = any> = Omit<
  AxiosRequestConfig<TData>,
  "params"
> & { id?: string; params?: TFilter };

export type DefaultFilter = {
  q?: string;
  limit?: number | string;
  offset?: number | string;
  sortBy?: string;
  orderBy?: "asc" | "desc";
};
