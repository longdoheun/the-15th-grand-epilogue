"use client";
import { WavyLineProps } from "@/types/WavyLineProps";
import { CatmullRomLine, CurveModifier, Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Curve({ points, color, position }: WavyLineProps) {
  const refMesh = useRef<any>(null);
  useFrame((state, delta) => {
    if (refMesh.current) {
      refMesh.current.rotation.y += delta;
    }
  });

  return (
    <>
      <mesh ref={refMesh} position={position}>
        <CatmullRomLine
          points={points}
          color={color}
          curveType="catmullrom"
          tension={0.5}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
