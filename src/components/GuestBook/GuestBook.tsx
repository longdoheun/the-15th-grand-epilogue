import AppLayout from "@/Layout/AppLayout";
import "@/styles/GuestBook/GuestBook.css";
import React from "react";
import BookCard from "./BookCard";
import { NotionDataType } from "@/types/NotionDataType";
import { GetServerSideProps } from "next";

export type ItemListProps = {
  CardList: NotionDataType[];
};

export default async function GuestBook() {
  const res = await fetch("/comments", { method: "POST" });
  const data = await res.json();
  const CardList = await data.results;
  console.log(CardList);
  // console.log(CardList);

  const getdate = (data: any) =>
    new Date(data.properties.time.created_time).toLocaleString().slice(0, -3);

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
                date={getdate(item)}
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
