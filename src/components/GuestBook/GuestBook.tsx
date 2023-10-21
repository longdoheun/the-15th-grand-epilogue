import AppLayout from "@/Layout/AppLayout";
import "@/styles/GuestBook/GuestBook.css";
import React from "react";

export default function GuestBook() {
  return (
    <div className="gb-con">
      <AppLayout.Main>
        <div className="gb-title">GUEST BOOK | 방명록</div>
        <section className="img-inner-con">
          <div className="photo"></div>
          <div className="photo"></div>
          <div className="photo"></div>
          <div className="photo"></div>
          <div className="photo"></div>
          <div className="photo"></div>
        </section>
      </AppLayout.Main>
    </div>
  );
}
