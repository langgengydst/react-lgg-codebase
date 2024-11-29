import { memberOptions } from "@/repositories/members/service";
import { extractSearchParam } from "@/lib/search-params";
import { QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";
import {
  Await,
  Link,
  LoaderFunctionArgs,
  NavLink,
  useLoaderData,
  useLocation,
} from "react-router";
import { MemberFilter } from "@/repositories/members";

export const dashboardLoader = (
  queryClient: QueryClient,
  { request }: Pick<LoaderFunctionArgs, "request">,
) => {
  const url = new URL(request.url);
  const filter = extractSearchParam<MemberFilter>(url.searchParams);
  const data = queryClient.ensureQueryData(memberOptions("list", filter));
  return { data, filter };
};

export function DashboardPage() {
  const data = useLoaderData() as {
    data: MemberFilter;
    filter: MemberFilter;
  };
  const path = useLocation();

  const dummyData = Array.from({ length: 100 }, () => ({}));

  return (
    <div>
      <h1>{path.pathname}</h1>

      <div className="flex flex-col gap-3 my-4">
        <Link to="/tes">Tes</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div className="flex gap-2 flex-wrap">
        {dummyData.map((_, i) => (
          <NavLink
            to={`${i}`}
            className="p-4 rounded-md bg-pink-200 hover:cursor-pointer w-28 "
          >
            <p key={i}>Data {i}</p>
          </NavLink>
        ))}
      </div>

      <Suspense fallback={<p>Loading package location...</p>}>
        <Await
          resolve={data.data}
          errorElement={<p>Error loading package location!</p>}
        >
          {(data) => (
            <p>Your package is at {JSON.stringify(data, null, 2)} lat and </p>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
