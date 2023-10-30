import { GuestBookState } from "@/atoms/GuestBookState";
import { DATABASE_GB_ID, SERVER, TOKEN, DATABASE_USER_ID } from "./Config";
import { WriterType } from "@/components/GuestBook/BookForm";
import axios from "axios";
import { useRecoilState } from "recoil";

export async function getCardList() {
  try {
    const res = await fetch(`${SERVER}/comments`);
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function onSubmit({ name, year, comment }: WriterType) {
  try {
    const res = await axios.post(`${SERVER}/comments`, {
      name: name,
      year: Number(year),
      comment: comment,
    });
  } catch (err) {
    console.log(err);
  }
}
