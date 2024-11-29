import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="bg-primary-foreground p-4 rounded-xl">
      <div className="w-full p-6 bg-slate-300 rounded-xl">
        <h1>Ini custom layout</h1>
      </div>
      <Outlet />
    </div>
  );
}
