"use client";

import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useTheme(initialTheme = "light") {
	const [theme, setTheme] = useLocalStorage("theme", initialTheme);

	useEffect(() => {
		document.body.setAttribute("data-theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return [theme, toggleTheme];
}
