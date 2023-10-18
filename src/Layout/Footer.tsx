import React from "react";
import AppLayout from "@/Layout/AppLayout";
import "@/styles/Layout/footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <AppLayout>
        <div className="copyright">GE:nie</div>
        <div className="copyright">
          © 2023 Global Economics Student Council, All Rights Reserved
        </div>
      </AppLayout>
    </section>
  );
}
