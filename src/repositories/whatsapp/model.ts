import { DefaultFilter } from "@/types/service";

export type WhatsappFilter = {} & DefaultFilter;

export type WhatsappBroadcast = {
  id: string;
  name: string;
  status: string;
  updated_at: string;
  author: string;
};

export type WhatsappBroadcastPayload = Omit<WhatsappBroadcast, "id">;
