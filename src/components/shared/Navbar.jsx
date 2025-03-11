import Link from "next/link";
import Button from "@/components/atoms/Button";

export default function Navbar() {
	return (
		<header className="fixed z-50 w-full bg-background-1/50 backdrop-blur-sm">
			<nav className="p-5 flex items-center justify-evenly gap-4">
				<div className="flex-1 flex justify-center">
					<span className="text-3xl font-bold text-primary-d2">BETULIN</span>
				</div>
				<div className="flex-2/12 tracking-wider text-foreground-1 _text-body-2 flex justify-center gap-10">
					<Link href="#">Home</Link>
					<Link href="#">About Us</Link>
					<Link href="#">Services</Link>
					<Link href="#">Testimonials</Link>
				</div>
				<div className="flex-1 flex justify-center gap-2">
					<Button type="button" className="bg-primary-n1 font-bold _text-body-2 text-background-1">
						Contact Us
					</Button>
					<Button type="button" className="bg-neutral-500/15 text-primary-n1">
						@
					</Button>
				</div>
			</nav>
		</header>
	);
}
