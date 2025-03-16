import Image from "next/image";
import Button from "@/components/atoms/Button";

import HeroImage from "@/assets/images/home-hero.png";
import Mockup1Image from "@/assets/images/mockup1.png";
import Mockup2Image from "@/assets/images/mockup2.png";
import Mockup3Image from "@/assets/images/mockup3.png";

import FlashSvg from "@/assets/svgs/Flash1";
import SettingSvg from "@/assets/svgs/Setting2";
import ProfileSvg from "@/assets/svgs/Profile2User";
import DiscountSvg from "@/assets/svgs/DiscountShape";
import ForwardSvg from "@/assets/svgs/Forward";
import MedalStarSvg from "@/assets/svgs/MedalStar";
import MagicPenSvg from "@/assets/svgs/MagicPen";
import Map2Svg from "@/assets/svgs/Map2";

import Line1 from "@/assets/svgs/Line1";
import Line2 from "@/assets/svgs/Line2";
import Line3 from "@/assets/svgs/Line3";
import Line4 from "@/assets/svgs/Line4";

export default function Section1() {
	return (
		<section
			className="w-full min-h-dvh py-32 px-8 sm:px-12 md:px-14 lg:px-16"
			style={{
				background: `
					radial-gradient(circle at 50% -5%, var(--gradient) 0%, transparent 20%),
					radial-gradient(circle at 90% 40%, var(--gradient) 0%, transparent 20%),
					radial-gradient(circle at 30% 50%, var(--gradient) 0%, transparent 20%)
				`
			}}
		>
			<div className="flex flex-col-reverse lg:flex-row items-center gap-2">
				{/* Hero */}
				<div className="basis-1/2 flex justify-center lg:justify-end">
					<div className="relative max-w-sm me-0 md:me-[15%] flex flex-col justify-around items-center _text-body-2 text-background-1 font-light">
						<Image
							src={HeroImage}
							alt=""
							priority
							width={1000}
							height={1000}
							className="relative z-0 h-full w-auto object-cover object-center"
						/>
						<div className="absolute z-10 top-0 left-0 size-full flex flex-col items-center justify-evenly">
							<HeroLabel className="self-start">
								Cepat <FlashSvg className="inline fill-background-1" />
							</HeroLabel>
							<HeroLabel className="self-end">
								Andal <SettingSvg className="inline fill-background-1" />
							</HeroLabel>
							<HeroLabel className="self-start">
								Ramah <ProfileSvg className="inline fill-background-1" />
							</HeroLabel>
							<HeroLabel className="self-end">
								Terjangkau <DiscountSvg className="inline fill-background-1" />
							</HeroLabel>
						</div>
					</div>
				</div>

				{/* Title */}
				<div className="basis-1/2 w-12/12 sm:w-11/12 md:w-10/12 flex flex-col items-start justify-center">
					<h1 className="mb-3 _text-title-1 leading-tight">
						PLATFORM TERLENGKAP UNTUK KEBUTUHAN <span className="text-primary-n1">PERAWATAN</span> EV KAMU.
					</h1>
					<p className="w-10/12 _text-body-1 text-foreground-2 leading-tight tracking-wide block">
						Cari bengkel terpercaya, beli sparepart ORI, atur jadwal servis, serta rekomendasi perawatan sesuai budget
						untuk kondisi EV dan keuangan kamu, serta fitur lain <span className="font-bold">tanpa ribet!</span>
					</p>
					<Button
						type="button"
						className="my-4 shadow-md dark:border-2 border-foreground-1/50 _text-body-2 font-semibold tracking-wide text-primary-n1"
					>
						<ForwardSvg className="inline fill-primary-n1" /> Explore Now!
					</Button>
				</div>
			</div>

			{/* Mockup */}
			<div className="mt-20 md:mt-10 lg:mt-0 flex items-center justify-center">
				<div className="relative w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12">
					{/* Mockup Wrapper */}
					<div className="relative w-full overflow-clip flex items-center justify-center">
						<Image
							src={Mockup2Image}
							alt=""
							width={600}
							height={800}
							className="absolute top-14 left-0 z-0 w-5/12 aspect-[1/2] object-contain object-top"
						/>
						<Image
							src={Mockup1Image}
							alt=""
							width={600}
							height={800}
							className="relative z-10 top-4 w-5/12 aspect-[4/7] object-contain object-top"
						/>
						<Image
							src={Mockup3Image}
							alt=""
							width={600}
							height={800}
							className="absolute top-12 right-0 z-0 w-5/12 aspect-[1/2] object-contain object-top"
						/>
					</div>

					<div className="absolute top-0 left-0 -translate-x-1/8 -translate-y-3/4 md:top-[15%] md:left-0 md:-translate-x-full md:translate-y-0 z-20 flex items-center">
						<div className="w-36 sm:w-40 md:w-44 p-4 rounded-2xl shadow-md dark:border-2 border-foreground-1/50 bg-background-1 text-primary-n1 _text-body-2 leading-tight">
							<SettingSvg className="fill-primary-n1 mb-1" />
							<p>Teknisi profesional siap siaga untuk bantu kamu.</p>
						</div>
						<Line1 className="w-[5vw] hidden lg:block" />
					</div>

					<div className="absolute bottom-0 left-0 -translate-x-1/8 translate-y-full md:bottom-0 md:left-0 md:-translate-x-full md:translate-y-0 z-20 flex items-center">
						<div className="w-36 sm:w-40 md:w-44 p-4 rounded-2xl shadow-md dark:border-2 border-foreground-1/50 bg-primary-n1 text-background-1 _text-body-2 leading-tight">
							<MedalStarSvg className="fill-background-1 mb-1" />
							<p>Jaminan kualitas dengan suku cadang ORI.</p>
						</div>
						<Line2 className="w-[5vw] hidden lg:block" />
					</div>

					<div className="absolute top-0 right-0 translate-x-1/8 -translate-y-3/4 md:top-[-3%] md:right-[29%] md:translate-x-full md:translate-y-0 z-20 flex items-center">
						<Line3 className="w-[14vw] hidden lg:block" />
						<div className="w-36 sm:w-40 md:w-44 p-4 rounded-2xl shadow-md dark:border-2 border-foreground-1/50 bg-primary-n1 text-background-1 _text-body-2 leading-tight">
							<MagicPenSvg className="fill-background-1 mb-1" />
							<p>Nikmati berbagai kemudahan dalam satu platform.</p>
						</div>
					</div>

					<div className="absolute bottom-0 right-0 translate-x-1/8 translate-y-full md:bottom-[10%] md:right-0 md:translate-x-full md:translate-y-0 z-20 flex items-center">
						<Line4 className="w-[7vw] hidden lg:block" />
						<div className="w-36 sm:w-40 md:w-44 p-4 rounded-2xl shadow-md dark:border-2 border-foreground-1/50 bg-background-1 text-primary-n1 _text-body-2 leading-tight">
							<Map2Svg className="fill-primary-n1 mb-1" />
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
		<span {...props} className={`px-4 py-2 rounded-2xl backdrop-blur-xs bg-primary-n2/50 ${props.className}`}>
			{children}
		</span>
	);
}
