"use client";
import AppLayout from "@/Layout/AppLayout";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import WavyLine from "./WavyLine";
import { Vector3 } from "three";

export const points1 = [
  new Vector3(0, 12, 0),
  new Vector3(-2, 6, 0),
  new Vector3(2, -6, 0),
  new Vector3(0, -12, 0),
];

export default function Background() {
  return (
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
  );
}
