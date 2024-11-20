export interface MemberFilter {
  name: string;
  createdAt: string;
}

export interface MemberPayload {
  name: string;
}

export interface MemberEditPayload {
  id: number;
  name: string;
}
