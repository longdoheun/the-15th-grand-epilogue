import {
  DATABASE_GB_ID,
  SERVER,
  TOKEN,
  DATABASE_USER_ID,
} from "@/assets/lib/Config";
import { Client } from "@notionhq/client";

export async function getCardList() {
  try {
    const res = await fetch(`${SERVER}/comments`, {
      method: "POST",
      // cache: "force-cache",
      // body: JSON.stringify({ page_size: 6 }),
    });

    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
