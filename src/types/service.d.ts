/* eslint-disable @typescript-eslint/no-explicit-any */
export type ServiceQueryArgs<T, KType> = Parameters<KType[T]>[0];
export type ServiceQueryFn = (...args: any[]) => any;
