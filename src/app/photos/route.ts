import { DATABASE_PH_ID, DATABASE_USER_ID, TOKEN } from "../../lib/Config";
import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: TOKEN,
});

export async function POST() {
  const query = await notion.databases.query({
    database_id: DATABASE_PH_ID,
  });

  console.log(query);

  const results = query.results;

  return NextResponse.json(results);
}

// export async function POST() {
//   const options = {
//     method: "POST",
//     headers: {
//       accept: "application/json",
//       "Notion-Version": "2022-06-28",
//       "content-type": "application/json",
//       Authorization: `Bearer ${TOKEN}`,
//     },
//     //sort 추가
//     body: JSON.stringify({ page_size: 6 }),
//   };

//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(
//     `https://api.notion.com/v1/databases/${DATABASE_PH_ID}/query`,
//     options
//   );

//   const rawdata = await res.json();

//   const results = rawdata.results;

//   return NextResponse.json({ results });
// }
