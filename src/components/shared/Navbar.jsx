"use client";

import Button from "@/components/atoms/Button";
import useTheme from "@/hooks/useTheme";
import BetulinSvg from "@/assets/svgs/Betulin";
import Moon from "@/assets/svgs/Moon";
import Sun1 from "@/assets/svgs/Sun1";
import { useEffect, useState } from "react";

const navigations = {
	["Home"]: "#home",
	["About Us"]: "#about",
	["Services"]: "#services",
	["Testimonials"]: "#testimonials"
};

export default function Navbar() {
	const [theme, toggleTheme] = useTheme();

	const [active, setActive] = useState("Home");
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActive(entry.target.id);
				}
			});
		});
		const elements = document.querySelectorAll("section");
		elements.forEach((element) => observer.observe(element));
		return () => {
			elements.forEach((element) => observer.unobserve(element));
		};
	}, []);

	const handleClick = (target, e) => {
		e.preventDefault();
		const targetElement = document.querySelector(target);
		if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<header className="fixed z-50 w-full p-4 bg-background-1/50 backdrop-blur-sm flex items-center justify-evenly gap-4">
			<div className="flex-1 flex justify-center">
				<BetulinSvg className="fill-primary-d2 stroke-primary-d2" />
			</div>
			<nav className="flex-1/12 px-8 tracking-wider text-foreground-1 _text-body-2 flex justify-evenly gap-4">
				{Object.keys(navigations).map((nav) => (
					<button
						key={navigations[nav]}
						onClick={(e) => handleClick(navigations[nav], e)}
						className={
							navigations[nav].slice(1) === active
								? "relative text-primary-n1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-gradient-to-l after:from-transparent after:via-primary-n1 after:to-transparent cursor-pointer"
								: "cursor-pointer"
						}
					>
						{nav}
					</button>
				))}
			</nav>
			<div className="flex-1 flex justify-center gap-2">
				<Button
					onClick={(e) => handleClick("#contact", e)}
					className="bg-primary-n1 font-bold _text-body-2 text-background-1"
				>
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
