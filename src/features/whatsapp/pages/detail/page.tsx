import { useParams } from "react-router";

export const WhatsappDetailPage = () => {
  const params = useParams();

  return <div>Whatsapp Detail Page {params.id}</div>;
};
