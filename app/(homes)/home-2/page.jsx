"use client";

import BannerTwo from "@/components/homes/banners/BannerTwo";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import Hero5 from "@/components/homes/heros/Hero5";
import PopulerTours from "@/components/homes/tours/PopulerTours";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header2 from "@/components/layout/header/Header2";
import BannerText from "@/components/homes/banners/BannerText";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll("img[data-src]");
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          imgObserver.unobserve(img);
        }
      });
    });
    images.forEach(img => {
      imgObserver.observe(img);
    });
    setImagesLoaded(true);
  }, []);

  return (
    <>
      <main>
        <Header2 />
        <Hero5 />
        <BannerText />
        <PopulerTours />
        <BannerTwo />
        <FeturesTwo />
        <FooterTwo />
      </main>
      <script>
        {`
          // Minifikasi CSS dan JavaScript (gunakan alat build seperti Webpack atau Gulp)
          // Pastikan untuk mengonfigurasi alat build Anda untuk minifikasi
        `}
      </script>
    </>
  );
}
