export default function ServiceCard({ icon, title, description, description2, bgColor, ...props }) {
  const isWhiteBackground = bgColor === "bg-white";
  const backgroundClass = isWhiteBackground ? "bg-white" : "bg-radial-gradient";

  return (
    <div
      {...props}
      className={`relative rounded-3xl shadow-sm transition-all duration-300 ease-in-out flex flex-col h-full p-6 hover:shadow-lg ${props.className} ${backgroundClass}`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className={`_text-body-1 font-semibold ${isWhiteBackground ? "text-primary-n1" : "text-white"}`}>
        {title}
      </h3>
      <p className={`_text-body-2 ${isWhiteBackground ? "text-foreground-1" : "text-white"} mt-2`}>
        {description}
      </p>
      {description2 && (
        <p className={`_text-body-3 font-medium ${isWhiteBackground ? "text-primary-d1" : "text-white"} mt-6 font-space-grotesk`}>
          {description2}
        </p>
      )}
    </div>
  );
}