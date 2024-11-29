import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div>
      <h1>Layout Dashboard </h1>
      <Outlet />
    </div>
  );
}
