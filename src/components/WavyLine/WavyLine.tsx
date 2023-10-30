"use client";
import { Vector3Props, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Matrix4, Vector3, Vector4 } from "three";
import Curve from "./Curve";
import { WavyLineProps } from "@/types/WavyLineProps";

export default function WavyLine({ points, color, position }: WavyLineProps) {
  const point_matrix: Array<Array<THREE.Vector3>> = [];

  for (let i = 0; i < 20; i++) {
    const rotationMatrix = new Matrix4();
    const angle = 0.1 * i;

    rotationMatrix.makeRotationAxis(new Vector3(0, 1, 0), angle);

    const rotatedPoints = points.map((point: THREE.Vector3, index) => {
      const vector = new Vector4(
        point.x + 0.0 * index,
        point.y + 0.0 * index,
        point.z + 0.3 * index,
        1
      );
      vector.applyMatrix4(rotationMatrix);
      return new Vector3(vector.x, vector.y, vector.z);
    });
    point_matrix.push(rotatedPoints);
  }

  return point_matrix.map((points, index) => (
    <Curve key={index} points={points} color={color} position={position} />
  ));
}
