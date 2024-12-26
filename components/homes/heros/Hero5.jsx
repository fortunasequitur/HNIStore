"use client";
import Image from "next/image";

export default function Hero5() {
  return (
    <section className="hero -type-5">
      <div className="hero__bg">
        <Image
          width={1920}
          height={760}
          src="/img/hero/5/bg.png"
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
                Mitra Resmi dari HNI
              </div>

              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="hero__title"
              >
                Selamat Datang di Halal Wellness
                <br className="md:d-none" />
                <span className="text-accent-2">Store</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
