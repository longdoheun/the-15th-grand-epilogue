import AppLayout from "@/Layout/AppLayout";
import "@/styles/ImgPage/ImgPage.css";
import React from "react";
import { DATABASE_PH_ID, TOKEN } from "@/assets/lib/Config";
import { GetServerSideProps } from "next";
import { NotionDataType } from "@/types/NotionDataType";
import Image from "next/image";

export default async function ImgPage() {
  const res = await fetch("https://the-15th-grand-epilogue.vercel.app/photos", {
    method: "POST",
  });
  const data = await res.json();
  const photoList = await data.results;
  console.log(photoList);

  return (
    <div className="img-con">
      <AppLayout.Main>
        <div className="img-title">2009-2023 Global Economics Gallery</div>
        <section className="img-inner-con">
          {photoList.map((photo: any) => (
            <Image
              key={photo.id}
              width={200}
              height={200}
              src={photo.properties.image.files[0].file.url}
              alt="Picture of the author"
            />
          ))}
          <div className="photo"></div>
          <div className="photo"></div>
          <div className="photo"></div>
          <div className="photo"></div>
        </section>
      </AppLayout.Main>
    </div>
  );
}
