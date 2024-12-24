import Link from "next/link";
import React from "react";

export default function BannerTwo() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="py-50 px-50 rounded-12" style={{ backgroundColor: '#054920' }}>
          <div className="row y-gap-20 justify-center items-center text-center">
            <div className="col-auto">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-20 fw-500 text-white"
              >
                Chat Admin SB
              </h2>
              <div style={{ marginTop: '20px' }}>
                <button
                  data-aos="fade-right"
                  data-aos-delay=""
                  className="button -md text-white"
                  style={{ backgroundColor: '#25d366' }} // Ubah warna latar belakang menjadi #25d366
                >
                  <Link href="https://wa.me/6285163537020?text=halo%20admin%20saya%20ingin%20booking%20tour%2C%20mohon%20informasinya." className="d-flex align-items-center justify-center" style={{ padding: '5px 10px', fontSize: '18px', borderRadius: '8px', backgroundColor: '#25d366', color: 'white', textDecoration: 'none' }}>
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
