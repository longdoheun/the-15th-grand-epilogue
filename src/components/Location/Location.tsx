import AppLayout from "@/Layout/AppLayout";
import React, { useState } from "react";
import KakaoMap from "./KakaoMap";
import "@/styles/Location/Location.css";
import { useRouter } from "next/navigation";

const initial = {
  latitude: 37.58749256737859,
  longitude: 126.99461913113926,
};

export default function Location() {
  const router = useRouter();
  // 성균관대학교 조병두홀 위치

  return (
    <div className="location-con">
      <AppLayout.Main>
        <section className="location-name">
          <div
            onClick={() => router.push("https://naver.me/5vIlgA1V")}
            className="location-name-main"
          >
            600주년 기념관 5F 조병두홀
          </div>
          <div className="location-name-sub">
            서울 종로구 성균관로 25-2 성균관대학교
          </div>
        </section>
        <div className="map-cover">
          <section className="location-map">
            <KakaoMap
              latitude={initial.latitude}
              longitude={initial.longitude}
            />
          </section>
        </div>

        <section className="location-right"></section>
      </AppLayout.Main>
      {/* <div className="invitation-container"></div> */}
    </div>
  );
}
