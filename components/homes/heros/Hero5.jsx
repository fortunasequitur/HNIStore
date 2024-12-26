"use client";
import Image from "next/image";

export default function Hero5() {
  return (
    <section className="hero -type-5">
      <div className="hero__bg" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: -1 }}>
        <Image
          layout="fill"
          objectFit="cover"
          src="/img/hero/5/logo.jpg"
          alt="background"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="hero__content">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="hero__subtitle mb-10"
              >
                {/* Teks dihapus */}
              </div>

              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="hero__title"
              >
                {/* Teks dihapus */}
                <br className="md:d-none" />
                <span className="text-accent-2"></span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
