import React from "react";
import Link from "next/link";

export default function SignUp() {
  return (
    <div id="form" className="main-page-info">
      <div className="main-subtext">2023년 11월 24일 금요일 19:00 ~ 21:30</div>
      <div className="main-subtext">
        성균관대학교 600주년 기념관 5층 조병두홀
      </div>
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
  );
}
