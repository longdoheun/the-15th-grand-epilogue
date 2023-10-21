import Script from "next/script";
import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakaoMap() {
  const KAKAO_API_KEY = process.env.KAKAO_API_APP_KEY;

  // 성균관대학교 조병두홀 위치
  const position = {
    latittude: 37.58749256737859,
    longitutde: 126.99461913113926,
  };

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false`}
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
