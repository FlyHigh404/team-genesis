export default function Button({ children, ...props }) {
	return (
		<button {...props} className={`cursor-pointer px-5 py-4 rounded-2xl ${props.className}`}>
			{children}
		</button>
	);
}
