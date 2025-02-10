import { atom } from "recoil";

export const authEmailAtom = atom({
  key: "authEmailAtom",
  default: "",
});

export const authPasswordAtom = atom({
  key: "authPasswordAtom",
  default: "",
});

export const authUsernameAtom = atom({
  key: "authUsernameAtom",
  default: "",
});

export const tokenAtom = atom({
  key: "tokenAtom",
  default: "",
});

