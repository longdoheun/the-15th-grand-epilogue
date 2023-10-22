import AppLayout from "@/Layout/AppLayout";
import "@/styles/GuestBook/GuestBook.css";
import React, { use, useEffect, useState } from "react";
import BookCard from "./BookCard";
import { NotionDataType } from "@/types/NotionDataType";
import { GetServerSideProps } from "next";
import { SERVER } from "@/assets/lib/Config";

export type ItemListProps = {
  CardList: NotionDataType[];
};

export async function getCardList() {
  try {
    const res = await fetch(`${SERVER}/comments`, {
      method: "POST",
    });
    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
  }
}

export default function GuestBook() {
  const data = use(getCardList());
  // const CardList = data.results;

  const [CardList, setCardList] = useState([]);

  useEffect(() => {
    setCardList(data.results);
  }, []);
  // console.log(CardList);

  return (
    <div className="gb-con">
      <AppLayout.Main>
        <section className="gb-wrap">
          <div className="gb-title">GUEST BOOK</div>
          <div className="gb-exp">Click to write Message</div>
        </section>
      </AppLayout.Main>
      <section className="gb-inner-con">
        <AppLayout.Main>
          <div className="gb-card-renderer">
            {CardList.map((item: any) => (
              <BookCard
                key={item.id}
                id={item.id}
                year={item.properties.year.number}
                name={item.properties.name.title[0].plain_text}
                date={new Date(item.properties.time.created_time)
                  .toLocaleString()
                  .slice(0, -3)}
                comment={item.properties.comment.rich_text[0].plain_text}
                // bgUrl={item.properties.image.files[0].file.url}
              />
            ))}
          </div>
        </AppLayout.Main>
      </section>
      <AppLayout.Main>
        <div className="gb-more">see more</div>
      </AppLayout.Main>
    </div>
  );
}
