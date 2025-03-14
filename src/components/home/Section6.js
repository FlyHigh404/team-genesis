import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import logo from "@/../docs/img/BETULIN.svg";

export default function Section6() {
	return (
	  <footer className="bg-primary-n1 text-white p-6 md:p-8">
		<div className="container mx-auto grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 md:gap-8">
		  
		  <div className="text-center md:text-left mx-auto md:mx-20">
			<Image src={logo} alt="Logo BETULIN" width={120} height={120} className="mx-auto md:mx-0" />
			<p className="text-md md:text-lg mt-2 cursor-default">
			  Optimalkan performa kendaraan listrik anda dengan perpaduan berbagai fitur BETULIN.
			</p>
  
			<div className="flex justify-center md:justify-start space-x-3 mt-4">
			  <a href="#" className="bg-[#48D8B2] w-9 h-9 flex items-center justify-center rounded-md shadow-md hover:bg-[#3bb99a] transition">
				<FontAwesomeIcon icon={faInstagram} className="text-white text-lg" />
			  </a>
			  <a href="#" className="bg-[#48D8B2] w-9 h-9 flex items-center justify-center rounded-md shadow-md hover:bg-[#3bb99a] transition">
				<FontAwesomeIcon icon={faTiktok} className="text-white text-lg" />
			  </a>
			  <a href="#" className="bg-[#48D8B2] w-9 h-9 flex items-center justify-center rounded-md shadow-md hover:bg-[#3bb99a] transition">
				<FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />
			  </a>
			</div>
		  </div>
  
		  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div className="text-center md:text-left flex flex-col ml-0 md:ml-24">
			  <h3 className="text-lg md:text-xl font-semibold text-white cursor-default">About</h3>
			  <ul className="mt-2 space-y-2 md:text-base">
				<li><a href="#" className="hover:text-white transition">Home</a></li>
				<li><a href="#" className="hover:text-white transition">About Us</a></li>
				<li><a href="#" className="hover:text-white transition">Services</a></li>
				<li><a href="#" className="hover:text-white transition">Testimonials</a></li>
			  </ul>
			</div>

			<div className="text-center md:text-left flex flex-col">
			  <h3 className="text-lg md:text-xl font-semibold text-white cursor-default">Our Services</h3>
			  <ul className="mt-2 space-y-2 md:text-base">
				<li><a href="#" className="hover:text-white transition">Bengkel</a></li>
				<li><a href="#" className="hover:text-white transition">Marketplace Sparepart</a></li>
				<li><a href="#" className="hover:text-white transition">Konsultasi AI dan Mekanik</a></li>
				<li><a href="#" className="hover:text-white transition">Panggil Mekanik</a></li>
				<li><a href="#" className="hover:text-white transition">Konten Edukasi EV</a></li>
				<li><a href="#" className="hover:text-white transition">Pengingat Perawatan</a></li>
			  </ul>
			</div>
			
			<div className="text-center md:text-left flex flex-col">
			  <h3 className="text-lg md:text-xl font-semibold text-white cursor-default">Our Company</h3>
			  <ul className="mt-2 space-y-2 md:text-base">
				<li><a href="#" className="hover:text-white transition">Blog</a></li>
				<li><a href="#" className="hover:text-white transition">Vision</a></li>
				<li><a href="#" className="hover:text-white transition">Mission</a></li>
			  </ul>
			</div>
  
		  </div>
  
		</div>
	  </footer>
	);
  }
  