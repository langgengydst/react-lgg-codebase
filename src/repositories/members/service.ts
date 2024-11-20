import { queryOptions } from "@tanstack/react-query";
import { MemberEditPayload, MemberFilter, MemberPayload } from "./model";
import { ServiceQueryArgs, ServiceQueryFn } from "@/types/service";

const membersService = {
  list: async (filters: MemberFilter) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return {
      data: [filters, filters, filters],
      meta: { total: 3 },
      success: true,
    };
  },
  add: async (payload: MemberPayload) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return { id: 4, ...payload };
  },
  update: async (payload: MemberEditPayload) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return payload;
  },
};

type ServiceType = typeof membersService;

export function memberOptions<T extends keyof ServiceType>(
  serviceKey: T,
  queryFnArgs: ServiceQueryArgs<T, ServiceType>,
) {
  const queryFn: ServiceQueryFn = membersService[serviceKey];

  return queryOptions({
    queryKey: ["members", serviceKey, queryFnArgs],
    queryFn: () => queryFn(queryFnArgs),
    staleTime: 5 * 1000,
  });
}
