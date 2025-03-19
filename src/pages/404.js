import Link from "next/link";

export default function NotFoundPage() {
	return (
		<div
			className="w-full min-h-screen flex justify-center items-center bg-neutral-100 text-neutral-900"
			style={{
				background: `
					radial-gradient(circle at 70% 80%, var(--gradient) 0%, transparent 20%),
					radial-gradient(circle at 30% 20%, var(--gradient) 0%, transparent 30%)
				`
			}}
		>
			<div className="flex flex-col items-center">
				<h2 className="font-bold text-9xl text-neutral-800">404</h2>
				<h1 className="font-bold text-3xl">Page Not Found</h1>
				<Link href="/" className="mt-8 text-green-600 underline">
					Back to Home
				</Link>
			</div>
		</div>
	);
}
