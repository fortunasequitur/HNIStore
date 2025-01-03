import { featuresTwo } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeturesTwo() {
  return (
    <section className="relative">
      <div className="relative xl:unset container">
        <div className="layout-pt-xl layout-pb-xl rounded-12">
          <div className="sectionBg">
            <Image
              width={1290}
              height={630}
              src="/img/about/1/1.png"
              alt="image"
              className="img-ratio rounded-12 md:rounded-0"
            />
          </div>

          <div className="row y-gap-30 justify-center items-center">
            <div className="col-lg-4 col-md-6">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-40 lh-13"
              >
                Tentang Kami
              </h2>

              <p data-aos="fade-up" data-aos-delay="" className="mt-10">
              Halal Wellness Store adalah situs pembelian produk HNI secara online. Dapatkan semua produk HNI halal dan berkualitas mulai dari produk herbal, kosmetik & homecare serta makanan & minuman sehat di Halal Wellness Store. HNI turut serta dalam memberdayakan dan mengangkat UMKM nasional.
              Dengan komitmen untuk memberikan yang terbaik, kami hadir untuk memenuhi kebutuhan anda berbelanja produk HNI secara online dengan aman, nyaman dan pasti terpercaya. 
              </p>
              <button
                data-aos="fade-right"
                data-aos-delay=""
                className="button -md -dark-1 bg-accent-1 text-white mt-60 md:mt-30"
              >
                <Link href="https://wa.me/6287754061060?text=halo%20admin%20saya%20mau%20order%20produk%20HNI">
                  Beli Sekarang
                  <i className="icon-arrow-top-right ml-10"></i>
                </Link>
              </button>
            </div>

            <div className="col-md-6">
              <div
                data-aos="fade-left"
                data-aos-delay=""
                className="featuresGrid"
              >
                {featuresTwo.map((elm, i) => (
                  <div
                    key={i}
                    className="featuresGrid__item px-40 py-40 text-center bg-white rounded-12"
                  >
                    <Image
                      width="60"
                      height="60"
                      src={elm.iconSrc}
                      alt="icon"
                    />
                    <div className="text-40 fw-700 text-accent-1 mt-20 lh-14">
                      {elm.value}
                    </div>
                    <div>{elm.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
