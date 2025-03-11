import Image from "next/image";
``
export default function Section1() {
	return (
		<section className="w-full min-h-dvh grid grid-cols-2 grid-rows-2">
			<div className="flex justify-center">
				<div className="relative w-7/12 aspect-[4/5] flex flex-col justify-around items-center">
					<Image src="" alt="" width={500} height={500} className="absolute w-full aspect-[4/5] bg-black/50" />
					<span className="self-start">Cepat</span>
					<span className="self-end">Andal</span>
					<span className="self-start">Ramah</span>
					<span className="self-end">Terjangkau</span>
				</div>
			</div>

			<div className="flex items-center">
				<div className="w-9/12">
					<h1 className="_text-title-1 leading-tight">
						PLATFORM TERLENGKAP UNTUK KEBUTUHAN <span className="text-primary-n1">PERAWATAN</span> EV KAMU.
					</h1>
					<p className="_text-body-2 text-foreground-2 leading-tight tracking-wide block w-10/12">
						Cari bengkel terpercaya, beli sparepart ORI, atur jadwal servis, serta rekomendasi perawatan sesuai budget
						untuk kondisi EV dan keuangan kamu, serta fitur lain <span className="font-bold">tanpa ribet!</span>
					</p>
					<button className="mt-4 p-4 rounded-xl shadow-md _text-body-2 text-primary-n1 font-semibold tracking-wide">
						@@ Explore Now!
					</button>
				</div>
			</div>

			<div className="col-span-2 bg-green-500/50">
				<p>Teknisi profesional siap siaga untuk bantu kamu.</p>
				<p>Jaminan kualitas dengan suku cadang ORI.</p>
				<p>Nikmati berbagai kemudahan dalam satu platform.</p>
				<p>Pelacakan real-time siap bantu kamu setiap saat.</p>
			</div>
		</section>
	);
}
