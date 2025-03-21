import Service1 from "@/assets/svgs/Service1";
import Service2 from "@/assets/svgs/Service2";
import Service3 from "@/assets/svgs/Service3";
import Service4 from "@/assets/svgs/Service4";
import Service5 from "@/assets/svgs/Service5";
import Service6 from "@/assets/svgs/Service6";
import Service7 from "@/assets/svgs/Service7";

const serviceList = [
	{
		icon: <Service1 className="fill-primary-n1" />,
		title: (
			<>
				Servis Kendaraan Listrik
				<br />
				Tanpa Ribet
			</>
		),
		description: "Dapatkan layanan perbaikan dan perawatan terbaik kendaraan listrik di bengkel terpercaya.",
		description2:
			"Jangan biarkan masalah kecil menjadi besar! Perbaiki kendaraan listrik Anda di bengkel rekanan kami dengan jaminan layanan terbaik dan harga transparan.",
		bgColor: "bg-white"
	},
	{
		icon: <Service2 className="fill-background-1" />,
		title: (
			<>
				Onderdil Asli,
				<br />
				Kualitas Terjamin
			</>
		),
		description: "Temukan berbagai suku cadang kendaraan listrik dengan mudah.",
		description2:
			"Tak perlu khawatir mencari onderdil yang tepat! Belanja spare part original dan berkualitas dengan harga terbaik langsung dari BETULIN.",
		bgColor: "bg-icon-service-1"
	},
	{
		icon: <Service3 className="fill-primary-n1" />,
		title: (
			<>
				Temukan Stasiun
				<br />
				Pengisian Terdekat
			</>
		),
		description: "Navigasi cepat ke lokasi charging station dengan informasi harga dan ketersediaan.",
		description2:
			"Jangan sampai kehabisan daya di tengah perjalanan! Cek lokasi, kapasitas, dan metode pembayaran dengan sekali klik.",
		bgColor: "bg-white"
	},
	{
		icon: <Service4 className="fill-background-1" />,
		title: (
			<>
				Jawaban Cepat,
				<br />
				Solusi Tepat
			</>
		),
		description: "Dapatkan saran instan dari AI atau konsultasi langsung dengan mekanik profesional.",
		description2:
			"Bingung dengan kondisi kendaraanmu? AI kami siap memberi rekomendasi cepat, atau langsung hubungi mekanik berpengalaman untuk solusi lebih spesifik.",
		bgColor: "bg-icon-service-1"
	},
	{
		icon: <Service5 className="fill-primary-n1" />,
		title: (
			<>
				Mekanik Datang
				<br />
				ke Lokasimu
			</>
		),
		description: "Layanan panggil mekanik untuk perbaikan kendaraan tanpa harus ke bengkel.",
		description2:
			"Tak bisa ke bengkel? Kami yang datang! Panggil mekanik terdekat kapan pun untuk perbaikan di lokasi pilihanmu.",
		bgColor: "bg-white"
	},
	{
		icon: <Service6 className="fill-background-1" />,
		title: (
			<>
				Pelajari Kendaraan Listrik
				<br />
				Lebih Dalam
			</>
		),
		description: "Akses artikel, video, dan tips seputar perawatan dan teknologi EV.",
		description2:
			"Mau tahu cara merawat baterai atau memilih spare part terbaik? Temukan konten edukatif yang mudah dipahami, langsung dari BETULIN.",
		bgColor: "bg-icon-service-1"
	},
	{
		icon: <Service7 className="fill-background-1" />,
		title: (
			<>
				Jadwal Servis
				<br />
				Tanpa Lupa
			</>
		),
		description: "Atur pengingat servis dan perawatan agar kendaraan selalu prima.",
		description2:
			"Kendaraan listrikmu butuh perhatian rutin! Atur pengingat otomatis agar selalu tepat waktu dalam melakukan servis dan perawatan.",
		bgColor: "bg-icon-service-1"
	}
];

export default function Section3() {
	return (
		<section className="w-full min-h-dvh py-32 px-8 max-w-7xl sm:px-12 md:px-14 lg:px-16 mx-auto" id="services">
			<div className="text-center mb-8">
				<p className="bg-gradient-to-r font-medium from-primary-n1 to-foreground-1 text-transparent bg-clip-text mb-2 _text-body-1">
					Solusi Lengkap di Ujung Jari Anda
				</p>
				<h2 className="_text-title-1 md:text-4xl font-bold mb-1">
					<span className="text-primary-n1">OPTIMALKAN PERFORMA</span> KENDARAAN
				</h2>
				<h2 className="_text-title-1 md:text-4xl font-bold mb-1">LISTRIK ANDA DENGAN PERPADUAN</h2>
				<h2 className="_text-title-1 md:text-4xl font-bold mb-1">
					BERBAGAI <span className="text-primary-n1">FITUR BETULIN</span>
				</h2>
				<p className="text-foreground-2 font-medium max-w-lg mx-auto _text-body-2 leading-snug mt-2">
					Tingkatkan efisiensi dengan solusi terintegrasi untuk perawatan lebih simple dan menjaga performa armada tetap
					optimal. <br />
					Fokus pada aktivitas produktif Anda.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{serviceList.map((service, index) => (
					<ServiceCard
						key={index}
						icon={<Icon bgColor={service.bgColor}>{service.icon}</Icon>}
						title={service.title}
						description={service.description}
						description2={service.description2}
						bgColor={service.bgColor}
						className={
							index === serviceList.length - 1 && serviceList.length % 2 !== 0
								? "md:col-span-2 lg:col-span-1 lg:col-start-2"
								: ""
						}
					/>
				))}
			</div>
		</section>
	);
}

function ServiceCard({ icon, title, description, description2, bgColor, ...props }) {
	const isWhiteBackground = bgColor === "bg-white";
	const backgroundClass = isWhiteBackground ? "bg-white" : "bg-radial-gradient";

	return (
		<div
			{...props}
			className={`relative rounded-3xl shadow-sm transition-all duration-300 ease-in-out flex flex-col h-full p-6 hover:shadow-lg ${props.className} ${backgroundClass}`}
		>
			<div className="mb-4">{icon}</div>
			<h3 className={`_text-body-1 font-semibold ${isWhiteBackground ? "text-primary-n1" : "text-white"}`}>{title}</h3>
			<p className={`_text-body-2 ${isWhiteBackground ? "text-foreground-1" : "text-white"} mt-2`}>{description}</p>
			{description2 && (
				<p
					className={`_text-body-3 font-medium ${
						isWhiteBackground ? "text-primary-d1" : "text-white"
					} mt-6 font-space-grotesk`}
				>
					{description2}
				</p>
			)}
		</div>
	);
}

function Icon({ children, bgColor, ...props }) {
	return (
		<div
			{...props}
			className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md ${bgColor} ${props.className}`}
		>
			{children}
		</div>
	);
}
