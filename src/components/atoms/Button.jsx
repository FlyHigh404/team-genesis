export default function Button({ children, variant = "text", ...props }) {
	return (
		<button
			{...props}
			className={`cursor-pointer rounded-2xl ${variant === "icon" ? "px-2 py-4" : "px-5 py-4"} ${props.className}`}
		>
			{children}
		</button>
	);
}
