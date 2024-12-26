import Link from "next/link";
import React from "react";

export default function BannerTwo() {
  return (
<section className="layout-pt-md">
          <div className="container">
            <div className="py-20 px-50 rounded-12" style={{ backgroundColor: '#054920' }}>
              <div className="row y-gap-20 justify-center items-center text-center">
                <div className="col-auto">
                  <h2
                    data-aos="fade-in"
                    data-aos-delay="200"
                    className="text-20 fw-500 text-white"
                  >
                    Chat Untuk Order
                  </h2>
                  <div style={{ marginTop: '10px' }}>
                    <button
                      data-aos="fade-in"
                      data-aos-delay="400"
                      className="button -md text-white"
                      style={{ backgroundColor: '#25d366' }}
                    >
                      <Link href="https://wa.me/6287754061060?text=halo%20admin%20saya%20mau%20order%20produk%20HNI" className="d-flex align-items-center justify-center" style={{ padding: '5px 10px', fontSize: '18px', borderRadius: '8px', backgroundColor: '#25d366', color: 'white', textDecoration: 'none' }}>
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" alt="WhatsApp Icon" style={{ marginRight: '8px', width: '20px', height: '20px' }} />
                        Whatsapp
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
