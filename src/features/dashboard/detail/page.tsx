import { useParams } from "react-router";

export const DashboardDetailPage = () => {
  const params = useParams();

  return <div>Dashboard Detail Page {params.id}</div>;
};
