import Service1 from "@/assets/svgs/Service1";
import Service2 from "@/assets/svgs/Service2";
import Service3 from "@/assets/svgs/Service3";
import Service4 from "@/assets/svgs/Service4";
import Service5 from "@/assets/svgs/Service5";
import Service6 from "@/assets/svgs/Service6";
import Service7 from "@/assets/svgs/Service7";

const servicePresets = {
  odd: {
    bg: "bg-white dark:bg-background-1",
    border: "dark:border-2 border-foreground-1/50",
    iconBg: "bg-white dark:bg-background-1",
    iconFill: "fill-primary-n1",
    title: "text-primary-n1",
    desc: "text-foreground-1",
    desc2: "text-primary-n2",
  },
  even: {
    bg: "bg-radial-gradient",
    iconBg: "bg-icon-service-1",
    iconFill: "fill-background-1",
    title: "text-white dark:text-background-1",
    desc: "text-white dark:text-background-1",
    desc2: "text-white dark:text-background-1",
  },
};

const serviceList = [
  {
    icon: Service1,
    title: (
      <>
        Servis Kendaraan Listrik
        <br />
        Tanpa Ribet
      </>
    ),
    description:
      "Dapatkan layanan perbaikan dan perawatan terbaik kendaraan listrik di bengkel terpercaya.",
    description2:
      "Jangan biarkan masalah kecil menjadi besar! Perbaiki kendaraan listrik Anda di bengkel rekanan kami dengan jaminan layanan terbaik dan harga transparan.",
  },
  {
    icon: Service2,
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
  },
  {
    icon: Service3,
    title: (
      <>
        Temukan Stasiun
        <br />
        Pengisian Terdekat
      </>
    ),
    description:
      "Navigasi cepat ke lokasi charging station dengan informasi harga dan ketersediaan.",
    description2:
      "Jangan sampai kehabisan daya di tengah perjalanan! Cek lokasi, kapasitas, dan metode pembayaran dengan sekali klik.",
  },
  {
    icon: Service4,
    title: (
      <>
        Jawaban Cepat,
        <br />
        Solusi Tepat
      </>
    ),
    description:
      "Dapatkan saran instan dari AI atau konsultasi langsung dengan mekanik profesional.",
    description2:
      "Bingung dengan kondisi kendaraanmu? AI kami siap memberi rekomendasi cepat, atau langsung hubungi mekanik berpengalaman untuk solusi lebih spesifik.",
  },
  {
    icon: Service5,
    title: (
      <>
        Mekanik Datang
        <br />
        ke Lokasimu
      </>
    ),
    description:
      "Layanan panggil mekanik untuk perbaikan kendaraan tanpa harus ke bengkel.",
    description2:
      "Tak bisa ke bengkel? Kami yang datang! Panggil mekanik terdekat kapan pun untuk perbaikan di lokasi pilihanmu.",
  },
  {
    icon: Service6,
    title: (
      <>
        Pelajari Kendaraan Listrik
        <br />
        Lebih Dalam
      </>
    ),
    description:
      "Akses artikel, video, dan tips seputar perawatan dan teknologi EV.",
    description2:
      "Mau tahu cara merawat baterai atau memilih spare part terbaik? Temukan konten edukatif yang mudah dipahami, langsung dari BETULIN.",
  },
  {
    icon: Service7,
    title: (
      <>
        Jadwal Servis
        <br />
        Tanpa Lupa
      </>
    ),
    description:
      "Atur pengingat servis dan perawatan agar kendaraan selalu prima.",
    description2:
      "Kendaraan listrikmu butuh perhatian rutin! Atur pengingat otomatis agar selalu tepat waktu dalam melakukan servis dan perawatan.",
  },
];

export default function Section3() {
  return (
    <section
      className="w-full min-h-dvh py-32 px-8 max-w-7xl sm:px-12 md:px-14 lg:px-16 mx-auto"
      id="services"
    >
      <div className="text-center mb-8">
        <p className="bg-gradient-to-r font-medium from-primary-n1 to-foreground-1 text-transparent bg-clip-text mb-2 _text-body-1">
          Solusi Lengkap di Ujung Jari Anda
        </p>
        <h2 className="_text-title-1 md:text-4xl font-bold mb-1">
          <span className="text-primary-n1">OPTIMALKAN PERFORMA</span> KENDARAAN
        </h2>
        <h2 className="_text-title-1 md:text-4xl font-bold mb-1">
          LISTRIK ANDA DENGAN PERPADUAN
        </h2>
        <h2 className="_text-title-1 md:text-4xl font-bold mb-1">
          BERBAGAI <span className="text-primary-n1">FITUR BETULIN</span>
        </h2>
        <p className="text-foreground-2 font-medium max-w-lg mx-auto _text-body-2 leading-snug mt-2">
          Tingkatkan efisiensi dengan solusi terintegrasi untuk perawatan lebih
          simple dan menjaga performa armada tetap optimal. <br />
          Fokus pada aktivitas produktif Anda.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceList.map((service, index) => {
          const isEvenOrLast =
            index % 2 === 1 || index === serviceList.length - 1;
          const defaultStyle = isEvenOrLast
            ? servicePresets.even
            : servicePresets.odd;

          return (
            <ServiceCard
              key={index}
              icon={
                <Icon styles={defaultStyle}>
                  <service.icon className={defaultStyle.iconFill} />
                </Icon>
              }
              title={service.title}
              description={service.description}
              description2={service.description2}
              styles={defaultStyle}
              isLastOdd={
                index === serviceList.length - 1 && serviceList.length % 2 !== 0
              }
            />
          );
        })}
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  description2,
  styles,
  isLastOdd,
  ...props
}) {
  return (
    <div
      {...props}
      className={`relative rounded-3xl shadow-sm transition-all duration-300 ease-in-out flex flex-col h-full p-6 hover:shadow-lg ${
        styles.bg
      } ${styles.border || ""} ${
        isLastOdd ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
      } ${props.className || ""}`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className={`_text-body-1 font-semibold ${styles.title}`}>{title}</h3>
      <p className={`_text-body-2 ${styles.desc} mt-2`}>{description}</p>
      {description2 && (
        <p
          className={`_text-body-3 font-medium ${styles.desc2} mt-6 font-space-grotesk`}
        >
          {description2}
        </p>
      )}
    </div>
  );
}

function Icon({ children, styles, ...props }) {
  const borderClass = styles.bg.includes("bg-white")
    ? "dark:border-2 dark:border-foreground-1/50"
    : "";

  return (
    <div
      {...props}
      className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md ${
        styles.iconBg
      } ${borderClass} ${props.className || ""}`}
    >
      {children}
    </div>
  );
}
