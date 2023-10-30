import { atom, useSetRecoilState } from "recoil";

export type GuestBookType = {
  id: string;
  name: string;
  year: string | number;
  comment: string | number;
  date: string;
};

export const GuestBookState = atom<GuestBookType[]>({
  key: "GuestBookState",
  default: [],
});

export function useGuestBook() {
  const set = useSetRecoilState(GuestBookState);
}
