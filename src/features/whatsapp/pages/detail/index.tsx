import { BaseRouteObject } from "@/types/router";

export const routeDetailWhatsapp = {
  path: ":id",

  async lazy() {
    const { WhatsappDetailPage } = await import("./page");

    return {
      Component: WhatsappDetailPage,
    };
  },
} satisfies BaseRouteObject;
