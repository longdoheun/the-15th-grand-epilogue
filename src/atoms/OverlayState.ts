import { atom, useSetRecoilState } from "recoil";

// export interface ItemType {
//   id: string;
//   name: string;
//   desc: string;
//   remaining: number;
// }

export const OverlayState = atom<boolean>({
  key: "OverlayState",
  default: false,
});

export function useItemSelection() {
  const set = useSetRecoilState(OverlayState);
}
