"use client";

import Link from "next/link";
import Button from "@/components/atoms/Button";
import useTheme from "@/hooks/useTheme";
import BetulinSvg from "@/assets/svgs/Betulin";
import Moon from "@/assets/svgs/Moon";
import Sun1 from "@/assets/svgs/Sun1";

const navigations = {
	["Home"]: "/",
	["About Us"]: "/about",
	["Services"]: "/services",
	["Testimonials"]: "/testimonials"
};

export default function Navbar({ active = "Home" }) {
	if (!(active in navigations)) throw new Error(`_Navbar_ active parameter "${active}" not included in navigations`);

	const [theme, toggleTheme] = useTheme();

	return (
		<header className="fixed z-50 w-full p-4 bg-background-1/50 backdrop-blur-sm flex items-center justify-evenly gap-4">
			<div className="flex-1 flex justify-center">
				<BetulinSvg className="fill-primary-d2 stroke-primary-d2" />
			</div>
			<nav className="flex-1/12 px-8 tracking-wider text-foreground-1 _text-body-2 flex justify-evenly gap-4">
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
			</nav>
			<div className="flex-1 flex justify-center gap-2">
				<Button type="button" className="bg-primary-n1 font-bold _text-body-2 text-background-1">
					Contact Us
				</Button>
				<Button variant="icon" onClick={toggleTheme} type="button" className="bg-neutral-500/15 text-primary-n1">
					{theme === "light" ? (
						<Moon className="size-6 fill-primary-n1" />
					) : (
						<Sun1 className="size-6 fill-primary-n1" />
					)}
				</Button>
			</div>
		</header>
	);
}
