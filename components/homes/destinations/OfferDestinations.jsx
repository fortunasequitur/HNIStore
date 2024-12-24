import { destinationOffers } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OfferDestinations() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              Paket Group
            </h2>
          </div>

          <div className="col-auto">
            <Link
              href="https://wa.me/6285163537020?text=halo%20admin%20saya%20ingin%20booking%20tour%2C%20mohon%20informasinya."
              data-aos="fade-up"
              data-aos-delay="" 
              className="buttonArrow d-flex items-center "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-20 pt-40"
        >
          {destinationOffers.map((elm, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-sm-6">
              <Link
                href="https://wa.me/6285163537020?text=halo%20admin%20saya%20ingin%20booking%20tour%2C%20mohon%20informasinya."
                className="d-flex items-center -hover-image-scale"
              >
                <div className="size-100 -hover-image-scale__image rounded-full">
                  <Image
                    width={260}
                    height={260}
                    src={elm.imageSrc}
                    alt="image"
                    className="img-cover rounded-full"
                  />
                </div>

                <div className="ml-20">
                  <div className="text-accent-1">{elm.subtitle}</div>
                  <h4 className="text-15 fw-500 mt-5">{elm.title}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
