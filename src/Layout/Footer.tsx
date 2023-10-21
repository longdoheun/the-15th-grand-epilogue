import React from "react";
import AppLayout from "@/Layout/AppLayout";
import "@/styles/Layout/footer.css";
import Logo from "@/assets/svg/logo.svg";

export default function Footer() {
  return (
    <section className="footer">
      <AppLayout>
        <Logo className="logo" fill="#8b8b8b" />
        <div className="copyright">문의 : skku.gecon@gmail.com</div>
        <div className="copyright">
          © 2023 Global Economics Student Council, All Rights Reserved
        </div>
      </AppLayout>
    </section>
  );
}
