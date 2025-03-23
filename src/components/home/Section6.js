import BetulinSvg from '@/assets/svgs/Betulin'
import Insta from '@/assets/svgs/Insta'
import Mail from '@/assets/svgs/Mail'
import Tiktok from '@/assets/svgs/Tiktok'

export default function Section6() {
  return (
    <footer className="bg-primary-n1 text-white p-6 md:p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 md:gap-8">
        <div className="text-left mx-auto md:mx-4 lg:mx-20">
          <BetulinSvg className="fill-white stroke-white" />

          <p className="text-md md:text-lg mt-2 cursor-default">Optimalkan performa kendaraan listrik anda dengan perpaduan berbagai fitur BETULIN.</p>

          <div className="flex justify-left md:justify-start space-x-3 mt-4">
            <a href="https://www.instagram.com/flyhighcorp_/" className="bg-[#48D8B2] w-9 h-9 flex items-center justify-center rounded-md shadow-md hover:bg-[#3bb99a] transition">
              <Insta className="fill-white" />
            </a>
            <a href="#" className="bg-[#48D8B2] w-9 h-9 flex items-center justify-center rounded-md shadow-md hover:bg-[#3bb99a] transition">
              <Tiktok className="fill-white" />
            </a>
            <a href="mailto:flyhighsinergi.idn@gmail.com" className="bg-[#48D8B2] w-9 h-9 flex items-center justify-center rounded-md shadow-md hover:bg-[#3bb99a] transition">
              <Mail className="fill-white" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-6" style={{ gridTemplateRows: 'auto 1fr' }}>
          {/* About */}
          <div className="text-center md:text-left flex flex-col ml-0 md:ml-8 lg:ml-24">
            <h3 className="text-lg md:text-xl font-semibold text-white cursor-default min-h-[48px] flex items-center justify-center md:justify-start">About</h3>
            <ul className="mt-2 space-y-2 md:text-base">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="text-center md:text-left flex flex-col">
            <h3 className="text-lg md:text-xl font-semibold text-white cursor-default min-h-[48px] flex items-center justify-center md:justify-start">Our Services</h3>
            <ul className="mt-2 space-y-2 md:text-base">
              <li>
                <a href="#" className="hover:text-white transition">
                  Bengkel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Marketplace Sparepart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Konsultasi AI dan Mekanik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Panggil Mekanik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Konten Edukasi EV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pengingat Perawatan
                </a>
              </li>
            </ul>
          </div>

          {/* Our Company */}
          <div className="text-center md:text-left flex flex-col">
            <h3 className="text-lg md:text-xl font-semibold text-white cursor-default min-h-[48px] flex items-center justify-center md:justify-start">Our Company</h3>
            <ul className="mt-2 space-y-2 md:text-base">
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Mission
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
