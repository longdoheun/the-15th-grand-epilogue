import { useRouter } from "next/navigation";
import Script from "next/script";
import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export type PositionProps = {
  latitude: number;
  longitude: number;
};

export default function KakaoMap({ latitude, longitude }: PositionProps) {
  const router = useRouter();
  return (
    <>
      <Map
        center={{ lat: latitude, lng: longitude }}
        style={{ width: "100%", height: "100%" }}
        isPanto={false}
        level={3}
      >
        <MapMarker
          onClick={() => router.push("https://naver.me/5vIlgA1V")}
          position={{ lat: latitude, lng: longitude }}
        />
      </Map>
    </>
  );
}
