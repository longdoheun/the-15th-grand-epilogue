import Script from "next/script";
import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakaoMap() {
  const key = "0e53b1ea7185fbccda8f77a5510e2c44";

  // 성균관대학교 조병두홀 위치
  const position = {
    latittude: 37.58749256737859,
    longitutde: 126.99461913113926,
  };

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false`}
        strategy="beforeInteractive"
      />
      <Map
        center={{ lat: position.latittude, lng: position.longitutde }}
        style={{ width: "100%", height: "100%" }}
        level={3}
      >
        <MapMarker
          position={{ lat: position.latittude, lng: position.longitutde }}
        />
      </Map>
    </>
  );
}
