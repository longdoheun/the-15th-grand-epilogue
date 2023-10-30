import { DATABASE_GB_ID, TOKEN } from "@/lib/Config";
import { Client } from "@notionhq/client";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
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
    `https://api.notion.com/v1/databases/${DATABASE_GB_ID}/query`,
    options
  );

  const rawdata = await res.json();

  const results = rawdata.results;

  return NextResponse.json({ results });
}

export async function POST(req: Request) {
  try {
    const { name, year, comment } = await req.json();
    console.log(name, year, comment);

    const notion = new Client({
      auth: `${TOKEN}`,
    });
    const response = await notion.pages.create({
      parent: { type: "database_id", database_id: `${DATABASE_GB_ID}` },
      properties: {
        name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        year: {
          number: year,
        },
        comment: {
          rich_text: [
            {
              text: {
                content: comment,
              },
            },
          ],
        },
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ msg: "there was an error" });
  }
}
