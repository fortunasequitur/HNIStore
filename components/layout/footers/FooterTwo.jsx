import React from "react";
import FooterLinks from "../components/FooterLinks";
import Socials from "../components/Socials";
import Image from "next/image";

export default function FooterTwo() {
  return (
    <footer className="footer -type-1 -dark" style={{ backgroundColor: '#054920', color: 'white' }}>
      <div className="footer__main">
        <div className="footer__bg">
          <Image
            width="1800"
            height="627"
            src="/img/footer/1/bg.svg"
            alt="image"
          />
        </div>

        <div className="container">
          <div className="footer__info">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="row y-gap-20 items-center">
                  <div className="col-auto">
                    <i className="icon-headphone text-50"></i>
                  </div>

                  <div className="col-auto">
                    <div className="text-20 fw-500">
                      Hubungi Kami 
                    </div>
                    <div className="text-20 fw-500">
                      <span className="">
                        <a href="https://wa.me/6287754061060?text=halo%20admin%20saya%20mau%20order%20produk%20HNI" style={{ color: 'white' }}>
                          +62-877-5406-1060
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="footerSocials">
                  <div className="footerSocials__title">Follow Us</div>

                  <div className="footerSocials__icons">
                    <Socials />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <div className="row y-gap-5 justify-between items-center">
            <div className="col-auto">
              <div>© Copyright HALAL WELLNESS STORE {new Date().getFullYear()}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
