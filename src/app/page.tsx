"use client";
import MainText from "@/components/MainText/MainText";
import MyElement from "@/components/MyElement";
import WavyLine from "@/components/WavyLine/WavyLine";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import Scene from "./Scene";
import MainPage from "@/components/MainPage/MainPage";

export default function Home() {
  const points1 = [
    new Vector3(0, 12, 0),
    new Vector3(-2, 6, 0),
    new Vector3(2, -6, 0),
    new Vector3(0, -12, 0),
  ];
  return (
    <>
      {/* main layout of website container */}
      <Scene>
        <div className="line">The 15th Grand Epilogue</div>
        <MainPage />
      </Scene>
      {/* background canvas rendering */}
      <Canvas>
        <directionalLight position={[1, 1, 1]} />
        <axesHelper scale={10} />
        <OrbitControls />
        <WavyLine
          points={points1}
          color="#945273"
          position={new Vector3(0, 0, 0)}
        />
        <color attach={"background"} args={["#f1f1f1"]} />
      </Canvas>
    </>
  );
}
