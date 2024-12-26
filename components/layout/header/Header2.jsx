"use client";

import React, { useState } from "react";
import Menu from "../components/Menu";
import MobileMenu from "../components/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Header2() {
  const router = useRouter();
  const pageNavigate = (pageName) => {
    router.push(pageName);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="header -type-2 js-header">
        <div className="header__container container">
          <div className="headerMobile__left">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn js-menu-button"
            >
              <i className="icon-main-menu"></i>
            </button>
          </div>

          <div className="header__logo">
            <Link href="/" className="header__logo">
              <Image
                width="167"
                height="40"
                src="/img/general/hni.png"
                alt="logo icon"
                priority
              />
            </Link>

            <Menu />
          </div>

          <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/login")}
              className="d-flex ml-20"
            >
              <i className="icon-person text-18"></i>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </>
  );
}
