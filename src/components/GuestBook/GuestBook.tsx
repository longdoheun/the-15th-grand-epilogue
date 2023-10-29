import AppLayout from "@/Layout/AppLayout";
import "@/styles/GuestBook/GuestBook.css";
import React, { use, useEffect, useState } from "react";
import BookCard from "./BookCard";
import { NotionDataType } from "@/types/NotionDataType";
import { getCardList } from "@/assets/lib/comment";

export type ItemListProps = {
  CardList: NotionDataType[];
};

export default function GuestBook() {
  const [CardList, setCardList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCardList();
      console.log(data, "client");
      setCardList(data.results);
    }

    fetchData();
  }, []);

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
            {CardList.slice(0, 6).map((item: any) => (
              <BookCard
                key={item.id}
                id={item.id}
                year={item.properties.year.number}
                name={item.properties.name.title[0].plain_text}
                date={new Date(item.properties.time.created_time)
                  .toLocaleString()
                  .slice(0, -10)}
                comment={item.properties.comment.rich_text[0].plain_text}
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
