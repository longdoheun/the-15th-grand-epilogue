"use client";
import WavyLine from "@/components/WavyLine/WavyLine";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import MainPage from "@/components/MainPage/MainPage";
import Invitation from "@/components/Invitation/Invitation";
import Header from "@/Layout/Header";
import AppLayout from "@/Layout/AppLayout";
import Footer from "@/Layout/Footer";
import { useLoading } from "@/hooks/useLoading";
import Loading from "./loading";
import ImgPage from "@/components/ImgPage/ImgPage";
import Location from "@/components/Location/Location";
import GuestBook from "@/components/GuestBook/GuestBook";
import Overlay from "@/Layout/Overlay";
import { useRecoilState } from "recoil";
import { OverlayState } from "@/atoms/OverlayState";
import BookForm from "@/components/GuestBook/BookForm";

export default function Home() {
  const [isOn, setIsOn] = useRecoilState(OverlayState);
  const isLoading = useLoading();

  return (
    <>
      {isLoading && <Loading />}
      {isOn && (
        <Overlay>
          <BookForm />
        </Overlay>
      )}
      <AppLayout.Scene>
        <MainPage isMain={true} />
        <Header />
        <Invitation />
        <ImgPage />
        <Location />
        <GuestBook isMain={false} />
        <MainPage isMain={false} />
        <Footer />
      </AppLayout.Scene>
    </>
  );
}
