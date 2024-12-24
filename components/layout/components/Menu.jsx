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
              Paket Tour <i className="icon-chevron-down"></i>
            </a>

            <div className="desktopNavSubnav">
              <div className="desktopNavSubnav__content">
                <div className="desktopNavSubnav__item text-dark-1">
                  <Link href="/open-trip-bromo">Open Trip Bromo</Link>
                </div>
                <div className="desktopNavSubnav__item text-dark-1">
                  <Link href="/private-trip-bromo">Private Trip Bromo</Link>
                </div>
                <div className="desktopNavSubnav__item text-dark-1">
                  <Link href="/2d1n-bromo-tour">2D1N Bromo Tour</Link>
                </div>
                <div className="desktopNavSubnav__item text-dark-1">
                  <Link href="/3d2n-bromo-tour">3D2N Bromo Tour</Link>
                </div>
                <div className="desktopNavSubnav__item text-dark-1">
                  <Link href="/4d3n-bromo-tour">4D3N Bromo Tour</Link>
                </div>
                <div className="desktopNavSubnav__item text-dark-1">
                  <Link href="/city-tour-malang-batu">City Tour Malang Batu</Link>
                </div>
                <div className="desktopNavSubnav__item text-dark-1">
                  <Link href="/beach-tour-malang">Beach Tour Malang</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="desktopNav__item">
            <a href="#">Activities</a>
          </div>

          <div className="desktopNav__item">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}
