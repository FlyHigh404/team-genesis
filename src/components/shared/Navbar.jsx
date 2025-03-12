import Link from "next/link";
import Button from "@/components/atoms/Button";
import useTheme from "@/hooks/useTheme";

const navigations = {
	["Home"]: "/",
	["About Us"]: "/about",
	["Services"]: "/services",
	["Testimonials"]: "/testimonials"
};

export default function Navbar({ active = "Home" }) {
	if (!(active in navigations)) throw new Error(`_Navbar_ active parameter "${active}" not included in navigations`);

	const [_, toggleTheme] = useTheme();

	return (
		<header className="fixed z-50 w-full bg-background-1/50 backdrop-blur-sm">
			<nav className="p-5 flex items-center justify-evenly gap-4">
				<div className="flex-1 flex justify-center">
					<span className="text-3xl font-bold text-primary-d2">BETULIN</span>
				</div>
				<div className="flex-2/12 tracking-wider text-foreground-1 _text-body-2 flex justify-center gap-10">
					{Object.keys(navigations).map((nav) => (
						<Link
							key={navigations[nav]}
							href={navigations[nav]}
							className={
								nav === active
									? "relative text-primary-n1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-gradient-to-l after:from-transparent after:via-primary-n1 after:to-transparent"
									: ""
							}
						>
							{nav}
						</Link>
					))}
				</div>
				<div className="flex-1 flex justify-center gap-2">
					<Button type="button" className="bg-primary-n1 font-bold _text-body-2 text-background-1">
						Contact Us
					</Button>
					<Button onClick={toggleTheme} type="button" className="bg-neutral-500/15 text-primary-n1">
						@
					</Button>
				</div>
			</nav>
		</header>
	);
}
