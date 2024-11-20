export const extractSearchParam = <T>(searchParam: URLSearchParams): T => {
  return Object.fromEntries(searchParam.entries()) as T;
};
