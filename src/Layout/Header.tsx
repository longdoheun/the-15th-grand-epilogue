import React, { use, useState } from "react";
import AppLayout from "@/Layout/AppLayout";
import "@/styles/Layout/Header.css";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <div className="header">
      <AppLayout.Theme>
        <div className="line">
          <span
            onClick={() => {
              router.push("/");
            }}
            className="header-logo"
          >
            GE:pilogue
          </span>
          <section className="nav">
            <span>About</span>
            <span>Sign up</span>
          </section>
        </div>
      </AppLayout.Theme>
    </div>
  );
}
