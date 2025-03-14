import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import ev_pic from "@/../docs/img/ev.svg";

export default function Section5() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="text-center mb-6">
        <h1 className="text-xl font-medium">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#121212] from-primary-n1">
            Reach Us
          </span>
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
          GET IN <span className="text-primary-n1">TOUCH</span>
        </h1>
        <p className="text-xs md:text-lg lg:text-xl text-foreground-2 mb-2">
          Mari berkolaborasi dan ciptakan sesuatu yang luar biasa.
          <br />Ada saran atau masukan? Jangan ragu untuk menghubungi kami.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
  		<div className="bg-white shadow-[inset_0_2px_6px_rgba(109,112,110,0.2)] rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-[65%_35%]">

          <div className="p-6 bg-gray-100">
            <h2 className="text-2xl font-bold text-gray-800">Kirimkan Pesan</h2>
            <form className="mt-4">
              
              <div className="flex flex-col md:flex-row gap-4 mb-3">
                <input
                  type="text"
                  name="first_name"
                  className="w-full px-0 py-2.5 text-md text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none"
                  placeholder="Nama Depan"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  className="w-full px-0 py-2.5 text-md text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none"
                  placeholder="Nama Belakang"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 mb-3">
                <input
                  type="email"
                  name="email"
                  className="w-full px-0 py-2.5 text-md text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none"
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  className="w-full px-0 py-2.5 text-md text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none"
                  placeholder="No. Telp"
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="w-full px-4 py-2 text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none"
                  placeholder="Apa yang ingin anda sampaikan?"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button className="bg-primary-n1 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#3bb99a]">
                  <span>Kirim</span>
                  <FontAwesomeIcon icon={faPaperPlane} className="text-white text-sm" />
                </button>
              </div>
            </form>
          </div>

          <div className="relative p-6 bg-[#44c2a1] bg-gradient-to-t from-primary-n1 text-white rounded-r-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">Hubungi Kami</h3>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faPhone} className="text-white text-lg" />
                  <p className="text-sm">+62 851-4116-8042</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />
                  <p className="text-sm">flyhighsinergi.idn@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faInstagram} className="text-white text-lg" />
                  <p className="text-sm">flyhighcorp_</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-lg" />
                  <p className="text-sm">Klampis, Surabaya</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4">
              <Image src={ev_pic} alt="EV Logo" width={140} height={140} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
