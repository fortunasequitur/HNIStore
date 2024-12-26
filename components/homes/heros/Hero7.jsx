"use client";
import Image from "next/image";

const slides = [
  {
    imageSrc: "/img/hero/7/a.png",
    subtitle: "Selamat Datang di Sobat Bermain Tour & Travel",
    title: "Best Bromo Tour Organizer In Malang",
  },
  {
    imageSrc: "/img/hero/7/a.png",
    subtitle: "Nikmati Keindahan Alam Bromo",
    title: "Pengalaman Tak Terlupakan",
  },
  {
    imageSrc: "/img/hero/7/a.png",
    subtitle: "Petualangan Seru Menanti Anda",
    title: "Jelajahi Bersama Kami",
  },
];

export default function Hero7() {
  return (
    <div className="container-slider">
      <div
        className="slider-bg"
        style={{
          backgroundImage: `url("https://storage.hpaindonesia.net:8215/assets/7718aba2c2cf8620666070b8a77cdb5b/4e85dfb2e12d39b315fa89bf5016d4fc.PNG")`,
        }}
      ></div>
      <div className="container">
        <div className="row wrap">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="slider slick-initialized slick-slider">
              <div className="slick-prev slick-arrow" style={{ display: "block" }}>
                <i className="fa fa-angle-left" aria-hidden="true" style={{ color: "#2bb5a1" }}></i>
              </div>
              <div className="slick-list draggable" style={{ padding: "0px 290px" }}>
                <div className="slick-track" style={{ opacity: 1, width: "8640px", transform: "translate3d(-1620px, 0px, 0px)" }}>
                  {slides.map((slide, index) => (
                    <div key={index} className="slide slick-slide" data-img={slide.imageSrc} style={{ width: "540px" }}>
                      <a href="#" tabIndex="-1">
                        <Image src={slide.imageSrc} loading="lazy" alt={slide.title} width={540} height={360} style={{ objectFit: "cover" }} />
                      </a>
                      <div className="hero__content text-center">
                        <div className="hero__subtitle text-white mb-20 md:mb-10">{slide.subtitle}</div>
                        <h1 className="hero__title text-white">{slide.title}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="slick-next slick-arrow" style={{ display: "block" }}>
                <i className="fa fa-angle-right" aria-hidden="true" style={{ color: "#2bb5a1" }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
