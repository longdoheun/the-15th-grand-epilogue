import { DATABASE_PH_ID, TOKEN } from "@/assets/lib/Config";

export async function POST() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    //sort 추가
    body: JSON.stringify({ page_size: 100 }),
  };

  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_PH_ID}/query`,
    options
  );

  const rawdata = await res.json();

  const results = rawdata.results;

  return Response.json({ results });
}
