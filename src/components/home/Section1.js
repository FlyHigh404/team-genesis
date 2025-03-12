"use server";

import Image from "next/image";
import PlacehoderImage from "@/../docs/img/sec1.png";
import Button from "@/components/atoms/Button";

export default function Section1() {
	return (
		<section className="w-full min-h-dvh py-32 grid grid-cols-2 grid-rows-2">
			{/* Hero */}
			<div className="flex justify-end">
				<div className="relative w-6/12 aspect-[14/15] me-20 flex flex-col justify-around items-center _text-body-2 text-background-1 font-light">
					<Image
						src={PlacehoderImage}
						alt=""
						width={500}
						height={500}
						className="absolute -z-10 w-full aspect-[4/5] bg-black/50"
					/>
					<HeroLabel className="mt-10 self-start">Cepat @</HeroLabel>
					<HeroLabel className="self-end">Andal @</HeroLabel>
					<HeroLabel className="self-start">Ramah @</HeroLabel>
					<HeroLabel className="mb-10 self-end">Terjangkau @</HeroLabel>
				</div>
			</div>

			{/* Title */}
			<div className="flex items-center">
				<div className="w-9/12">
					<h1 className="_text-title-1 leading-tight">
						PLATFORM TERLENGKAP UNTUK KEBUTUHAN <span className="text-primary-n1">PERAWATAN</span> EV KAMU.
					</h1>
					<p className="w-10/12 _text-body-1 text-foreground-2 leading-tight tracking-wide block">
						Cari bengkel terpercaya, beli sparepart ORI, atur jadwal servis, serta rekomendasi perawatan sesuai budget
						untuk kondisi EV dan keuangan kamu, serta fitur lain <span className="font-bold">tanpa ribet!</span>
					</p>
					<Button
						type="button"
						className="mt-4 mb-8 shadow-md dark:border-2 border-foreground-1/50 _text-body-2 font-semibold tracking-wide text-primary-n1"
					>
						@ Explore Now!
					</Button>
				</div>
			</div>

			{/* Mockup */}
			<div className="col-span-2 h-fit flex items-center justify-center">
				<div className="relative w-5/12">
					{/* Mockup Wrapper */}
					<div className="relative w-full overflow-clip flex items-center justify-center">
						<Image
							src={PlacehoderImage}
							alt=""
							width={500}
							height={1000}
							className="absolute top-14 left-0 z-0 w-5/12 aspect-[1/2] rounded-2xl object-cover object-center"
						/>
						<Image
							src={PlacehoderImage}
							alt=""
							width={500}
							height={1000}
							className="relative z-10 top-4 w-5/12 aspect-[4/7] rounded-2xl object-cover object-center"
						/>
						<Image
							src={PlacehoderImage}
							alt=""
							width={500}
							height={1000}
							className="absolute top-14 right-0 z-0 w-5/12 aspect-[1/2] rounded-2xl object-cover object-center"
						/>
					</div>

					<div className="absolute top-[15%] left-0 -translate-x-full z-20 flex items-center">
						<div className="w-44 p-4 rounded-2xl shadow-md dark:border-2 border-foreground-1/50 bg-background-1 text-primary-n1 _text-body-2 leading-tight">
							<span>@</span>
							<p>Teknisi profesional siap siaga untuk bantu kamu.</p>
						</div>
						<div className="w-fit">----------------------</div>
					</div>
					<div className="absolute bottom-[15%] left-0 -translate-x-full z-20 flex items-center">
						<div className="w-44 p-4 rounded-2xl shadow-md dark:border-2 border-foreground-1/50 bg-primary-n2 text-background-1 _text-body-2 leading-tight">
							<span>@</span>
							<p>Jaminan kualitas dengan suku cadang ORI.</p>
						</div>
						<div className="w-fit">-----------------</div>
					</div>
					<div className="absolute top-[-3%] right-[29%] translate-x-full z-20 flex items-center">
						<div className="h-fit w-max">----------------------------------------</div>
						<div className="w-44 p-4 rounded-2xl shadow-md dark:border-2 border-foreground-1/50 bg-primary-n2 text-background-1 _text-body-2 leading-tight">
							<span>@</span>
							<p>Nikmati berbagai kemudahan dalam satu platform.</p>
						</div>
					</div>
					<div className="absolute bottom-[20%] right-0 translate-x-full z-20 flex items-center">
						<div className="h-fit w-max">---------------------</div>
						<div className="w-44 p-4 rounded-2xl shadow-md dark:border-2 border-foreground-1/50 bg-background-1 text-primary-n1 _text-body-2 leading-tight">
							<span>@</span>
							<p>Pelacakan real-time siap bantu kamu setiap saat.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function HeroLabel({ children, ...props }) {
	return (
		<span {...props} className={`px-4 py-2 rounded-2xl backdrop-blur-xs bg-primary-n1/50 ${props.className}`}>
			{children}
		</span>
	);
}
