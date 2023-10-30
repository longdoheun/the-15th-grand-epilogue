import React from "react";
import "@/styles/Layout/overlay.css";
import AppLayout from "@/Layout/AppLayout";
import { useRecoilState } from "recoil";
import { OverlayState } from "@/atoms/OverlayState";
import { childrenProps } from "@/types/childrenProps";

export default function Overlay({ children }: childrenProps) {
  const [isOn, setIsOn] = useRecoilState(OverlayState);

  return (
    <div className="overlay">
      <AppLayout.Overlay>{children}</AppLayout.Overlay>
    </div>
  );
}
