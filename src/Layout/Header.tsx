import React, { use, useEffect, useRef, useState } from "react";
import AppLayout from "@/Layout/AppLayout";
import "@/styles/Layout/Header.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SERVER } from "@/lib/Config";
import Menu from "@/assets/svg/hamburger_button_.svg";
import useComponentSize from "@/hooks/useComponentSize";

export default function Header() {
  const [isNavOn, setIsNavOn] = useState(false);
  const router = useRouter();

  const [headerRef, size] = useComponentSize();

  useEffect(() => {
    if (size.width > 512) {
      setIsNavOn(true);
    }
  }, [size]);

  return (
    <div ref={headerRef} className="header">
      <AppLayout.Theme>
        <div className="line">
          <div className="h-l">
            <span
              onClick={() => {
                router.push("/");
              }}
              className="header-logo"
            >
              GE:pilogue
            </span>
            <span
              className="h-l-btn"
              onClick={() => setIsNavOn(isNavOn ? false : true)}
            >
              <Menu />
            </span>
          </div>
          {isNavOn && (
            <section className="nav">
              <span
                onClick={() => {
                  router.push("/about");
                }}
              >
                About
              </span>
              <span
                onClick={() => {
                  router.push("/guestbook");
                }}
              >
                Guest Book
              </span>
              <span>
                <Link href={`${SERVER}/#form`}>Sign up</Link>
              </span>
            </section>
          )}
        </div>
      </AppLayout.Theme>
    </div>
  );
}
