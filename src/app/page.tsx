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

export default function Home() {
  const isLoading = useLoading();
  const points1 = [
    new Vector3(0, 12, 0),
    new Vector3(-2, 6, 0),
    new Vector3(2, -6, 0),
    new Vector3(0, -12, 0),
  ];

  return (
    <>
      {isLoading && <Loading />}
      <AppLayout.Scene>
        <Canvas>
          <directionalLight position={[1, 1, 1]} />
          {/* <axesHelper scale={10} /> */}
          <OrbitControls />
          <WavyLine
            points={points1}
            color="#945273"
            position={new Vector3(0, 0, 0)}
          />
          <color attach={"background"} args={["#f1f1f1"]} />
        </Canvas>
      </AppLayout.Scene>
      <AppLayout.Scene>
        <MainPage isMain={true} />
        <Header />
        <Invitation />
        <ImgPage />
        <Location />
        <GuestBook />
        <MainPage isMain={false} />
        <Footer />
      </AppLayout.Scene>
    </>
  );
}
