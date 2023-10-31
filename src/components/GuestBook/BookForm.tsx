import Input from "@/Layout/Input";
import SquareBtn from "@/Layout/SquareBtn";
import { getCardList, onSubmit } from "@/lib/comment";
import { OverlayState } from "@/atoms/OverlayState";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { GuestBookState } from "@/atoms/GuestBookState";
import "@/styles/GuestBook/BookForm.css";

export type WriterType = {
  name: string;
  year: string | number;
  comment: string | number;
};

export default function BookForm() {
  // state
  const [CardList, setCardList] = useRecoilState(GuestBookState);
  const [isOn, setIsOn] = useRecoilState(OverlayState);
  const [writer, setWriter] = useState<WriterType>({
    name: "",
    year: "",
    comment: "",
  });

  // event handler 1
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter({ ...writer, [e.target.name]: e.target.value });
  };

  // event handler 2
  const changeTA = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWriter({ ...writer, [e.target.name]: e.target.value });
  };

  return (
    <div className="semi-con">
      <section className="wr-bg">
        <div className="wr-con">
          <span>
            <Input
              type="number"
              name="year"
              value={writer.year}
              maxLength={2}
              onChange={changeInput}
              placeholder="학번 두 자리 (ex. 22)"
              autoComplete="on"
            />
          </span>
          <span>
            <Input
              type="text"
              name="name"
              value={writer.name}
              onChange={changeInput}
              maxLength={8}
              placeholder="닉네임 입력하기"
              autoComplete="on"
            />
          </span>
          <div className="label-style">
            <textarea
              className="t-a"
              name="comment"
              value={writer.comment}
              onChange={changeTA}
              placeholder="동기, 선후배, 교수님께 전하고 싶은 말 남기기"
            />
            <span className="wr-alert">
              * 비방, 욕설 등의 부적절한 댓글은 동의 없이 삭제될 수 있습니다.
            </span>
          </div>
          <SquareBtn
            context="작성하기"
            onClickEvent={async () => {
              setIsOn(false);
              onSubmit(writer);
              const data = await getCardList();
              setCardList(data.results);
            }}
          />
        </div>
      </section>
      <span
        className="wr-btn"
        onClick={() => {
          setIsOn(false);
        }}
      >
        CLOSE
      </span>
    </div>
  );
}
