"use client";
import AppLayout from "@/Layout/AppLayout";
import React from "react";
import Header from "@/Layout/Header";
import GuestBook from "@/components/GuestBook/GuestBook";
import Footer from "@/Layout/Footer";
import Overlay from "@/Layout/Overlay";
import BookForm from "@/components/GuestBook/BookForm";
import { useRecoilState } from "recoil";
import { OverlayState } from "@/atoms/OverlayState";

export default function GuestBooks() {
  const [isOn, setIsOn] = useRecoilState(OverlayState);
  return (
    <>
      {isOn && (
        <Overlay>
          <BookForm />
        </Overlay>
      )}
      <AppLayout.Scene>
        <Header />
        <GuestBook isMain={true} />
        <Footer />
      </AppLayout.Scene>
    </>
  );
}
