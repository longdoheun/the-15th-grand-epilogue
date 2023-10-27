"use client";
import WavyLine from "@/components/WavyLine/WavyLine";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import MainPage from "@/components/MainPage/MainPage";
import Invitation from "@/components/Invitation/Invitation";
import React, { Suspense, useEffect, useState } from "react";
import Header from "@/Layout/Header";
import AppLayout from "@/Layout/AppLayout";
import Footer from "@/Layout/Footer";
import { useLoading } from "@/hooks/useLoading";
import Loading from "./loading";
import ImgPage from "@/components/ImgPage/ImgPage";
import Location from "@/components/Location/Location";
import GuestBook from "@/components/GuestBook/GuestBook";

export default function Home() {
  const [color, setColor] = useState("#f1f1f1");
  const isLoading = useLoading();
  const points1 = [
    new Vector3(0, 12, 0),
    new Vector3(-2, 6, 0),
    new Vector3(2, -6, 0),
    new Vector3(0, -12, 0),
  ];

  const onClickEvent = () => {
    // setColor("#000000");
  };

  return (
    <>
      {/* main layout of website container */}
      {isLoading && <Loading />}
      <AppLayout.Scene>
        <MainPage isMain={true} />
        <Invitation />
        <ImgPage />
        <Location />
        <GuestBook />
        <MainPage isMain={false} />
        <Footer />
      </AppLayout.Scene>
      {/* background canvas rendering */}
      <Canvas>
        <directionalLight position={[1, 1, 1]} />
        {/* <axesHelper scale={10} /> */}
        <OrbitControls />
        <WavyLine
          points={points1}
          color="#945273"
          position={new Vector3(0, 0, 0)}
        />
        <color attach={"background"} args={[color]} />
      </Canvas>
    </>
  );
}
