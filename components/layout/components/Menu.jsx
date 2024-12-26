"use client";

import { homes } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Menu() {
  const pathname = usePathname();
  return (
    <>
      <div className="xl:d-none ml-30">
        <div className="desktopNav">
          <div className="desktopNav__item">
            <Link
              className={
                pathname?.split("/")[1].split("-")[0] == "home"
                  ? "activeMenu"
                  : ""
              }
              href="https://www.sobatbermain.id/"
            >
              Home
            </Link>
          </div>

          <div className="desktopNav__item">
            <a href="#">
              Produk <i className="icon-chevron-down"></i>
            </a>

            <div className="desktopNavSubnav">
              <div className="desktopNavSubnav__content">
                <div className="desktopNavSubnav__item text-dark-1">
                  <Link href="/kosmetik-home-care">Kosmetik & Home Care</Link>
                </div>
                <div className="desktopNavSubnav__item text-dark-1">
                  <Link href="/makanan-minuman-sehat">Makanan & Minuman Sehat</Link>
                </div>
                <div className="desktopNavSubnav__item text-dark-1">
                  <Link href="/produk-herba">Produk Herba</Link>
                </div>
                <div className="desktopNavSubnav__item text-dark-1">
                  <Link href="/fashion-lifestyle">Fashion & Lifestyle</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="desktopNav__item">
            <a href="#">Tentang Kami</a>
          </div>

          <div className="desktopNav__item">
            <Link href="/contact">Order</Link>
          </div>
        </div>
      </div>
    </>
  );
}
