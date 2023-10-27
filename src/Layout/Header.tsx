import React from "react";
import AppLayout from "@/Layout/AppLayout";
import "@/styles/Layout/Header.css";

export default function Header() {
  return (
    <div className="header">
      <AppLayout.Theme>
        <div className="line">
          <span className="header-logo">GE:pilogue</span>
          <section className="nav">
            <span>About</span>
            <span>Dress code</span>
            <span>Sign up</span>
          </section>
        </div>
      </AppLayout.Theme>
    </div>
  );
}
