"use client";

import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(initialValue);
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
		if (typeof window !== "undefined") {
			try {
				const item = window.localStorage.getItem(key);
				if (item !== null) {
					setStoredValue(JSON.parse(item));
				}
			} catch (error) {
				console.error(`_useLocalStorage_ Error getting localStorage key "${key}":`, error);
			}
		}
	}, [key]);

	const setValue = (value) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			if (typeof window !== "undefined") {
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
			}
		} catch (error) {
			console.error(`_useLocalStorage_ Error setting localStorage key "${key}":`, error);
		}
	};

	return [hasMounted ? storedValue : initialValue, setValue];
}
