import AppLayout from "@/Layout/AppLayout";
import "@/styles/GuestBook/GuestBook.css";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { NotionDataType } from "@/types/NotionDataType";
import { getCardList } from "@/lib/comment";
import { useRecoilState } from "recoil";
import { OverlayState } from "@/atoms/OverlayState";
import { GuestBookState } from "@/atoms/GuestBookState";
import { useRouter } from "next/navigation";

export type ItemListProps = {
  CardList: NotionDataType[];
};

export default function GuestBook({ isMain }: { isMain: boolean }) {
  const router = useRouter();
  const [CardList, setCardList] = useRecoilState(GuestBookState);
  const [isOn, setIsOn] = useRecoilState(OverlayState);

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
          <div
            onClick={() => {
              setIsOn(true);
            }}
            className="gb-exp underlined-text"
          >
            Click to Write Message
          </div>
        </section>
      </AppLayout.Main>
      {!isMain ? (
        <>
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
            <div
              onClick={() => {
                router.push("/guestbook");
              }}
              className="gb-more"
            >
              더보기
            </div>
          </AppLayout.Main>
        </>
      ) : (
        <>
          <section className="gb-inner-con">
            <AppLayout.Book>
              <div className="gb-renderer-con">
                {CardList.map((item: any) => (
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
            </AppLayout.Book>
          </section>
        </>
      )}
    </div>
  );
}
