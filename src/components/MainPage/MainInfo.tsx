import Link from "next/link";
import React from "react";

export default function MainInfo() {
  return (
    <>
      <div className="main-page-info">
        <div>2023.11.24. FRI. 19:00 ~ 21:30</div>
        <div>SKKU 600th Anniversary building</div>
        <div>Dress Code : Black & White</div>
        <section className="sign-up">
          <div className="underlined-text">
            <Link href="https://forms.gle/WML4JrMorpQQXF1a9">
              졸업생 신청하기
            </Link>
          </div>
          <div className="underlined-text">
            <Link href="https://forms.gle/kebi4MvyncEG5XEc7">
              재학생 신청하기
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
