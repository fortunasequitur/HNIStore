"use client";
import Image from "next/image";

const slide = {
  imageSrc: "/img/hero/7/Open Trip.jpg",
  subtitle: "Selamat Datang di Sobat Bermain Tour & Travel",
  title: "Best Bromo Tour Organizer In Malang",
};

export default function Hero7() {
  return (
    <>
      <section className="hero -type-7">
        <div
          className="hero__shape"
          style={{
            backgroundColor: "transparent", // Menggunakan warna transparan tanpa warna background
            textAlign: "center",
            fontSize: "2rem",
            marginTop: "20px",
          }}
        >
          {/* Menghapus teks "Hubungi Kami" */}
        </div>

        <div className="hero__slider js-section-slider">
          <div className="swiper-wrapper">
            <div className="hero__bg">
              <Image
                width={1920}
                height={960}
                src={slide.imageSrc}
                alt="background"
              />
            </div>

            <div className="container">
              <div className="row justify-center">
                <div className="col-lg-8 col-md-10">
                  <div className="hero__content text-center">
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      className="hero__subtitle text-white mb-20 md:mb-10"
                    >
                      {slide.subtitle}
                    </div>

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="hero__title text-white"
                    >
                      {slide.title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
