"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Menu = () => {
	const [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const handleOpen = () => {
		setOpen(!open);
	};

	useEffect(
		() => {
			const handleClickOutside = (event: MouseEvent) => {
				if (
					menuRef.current &&
					!menuRef.current.contains(event.target as Node)
				) {
					setOpen(false);
				}
			};

			const handleEscapeKey = (event: KeyboardEvent) => {
				if (event.key === "Escape") {
					setOpen(false);
				}
			};

			if (open) {
				document.addEventListener("mousedown", handleClickOutside);
				document.addEventListener("keydown", handleEscapeKey);
			}

			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
				document.removeEventListener("keydown", handleEscapeKey);
			};
		},
		[open]
	);
	return (
		<div className="relative container mx-auto flex items-start justify-between px-4 py-4 text-xl">
			<span className="font-bold text-2xl">FurniShop</span>
			<div className="hidden lg:flex gap-16">
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/Features">Features</Link>
				<Link href="/Contact">Contact</Link>
			</div>
			<div className="flex lg:hidden items-center">
				<button onClick={handleOpen}>
					<GiHamburgerMenu />
				</button>
				<div
					className={`z-10 bg-white  fixed w-full h-screen top-0 right-0 flex flex-col items-center justify-center gap-4 ${open
						? "flex"
						: "hidden"}`}
				>
					<div
						ref={menuRef}
						className="flex lg:hidden flex-col  text-black items-center justify-center gap-4"
					>
						<Link className="text-xl font-bold" href="/">
							Home
						</Link>
						<Link className="text-xl font-bold" href="/about">
							About
						</Link>
						<Link className="text-xl font-bold" href="/Features">
							Features
						</Link>
						<Link className="text-xl font-bold" href="/Contact">
							Contact
						</Link>
						<button
							onClick={() => setOpen(false)}
							className="absolute top-4 right-4"
						>
							X
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
