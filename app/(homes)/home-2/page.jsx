"use client";

import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import BannerFour from "@/components/homes/banners/BannerFour";
import BannerTwo from "@/components/homes/banners/BannerTwo";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import DestinationsTwo from "@/components/homes/destinations/DestinationsTwo";
import OfferDestinations from "@/components/homes/destinations/OfferDestinations";
import TopAttractions from "@/components/homes/destinations/TopAttractions";
import FeaturesThree from "@/components/homes/features/FeaturesThree";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import Hero7 from "@/components/homes/heros/Hero7";
import Hero5 from "@/components/homes/heros/Hero5";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import TourSlider2 from "@/components/homes/tours/TourSlider2";
import PopulerTours from "@/components/homes/tours/PopulerTours";
import TourSlider4 from "@/components/homes/tours/TourSlider4";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header2 from "@/components/layout/header/Header2";
import React, { useEffect, useState } from "react"; // Menghapus import React yang menduplikasi

export default function Page() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Lazy loading untuk gambar
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
        <Header2 /> {/* Header Menu */}
        <Hero5 /> {/* Hero */}  
        <PopulerTours /> {/* Paling Sering Dipesan */}
        <BannerTwo /> {/* CTWA */}
        <FeturesTwo /> {/* Kenapa Harus Kami */}
        <FooterTwo /> {/* Footer */}
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
