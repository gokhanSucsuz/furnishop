import Link from "next/link";
import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";

const Footer = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<div className="flex items-center justify-between w-[85%] py-12 flex-wrap gap-4">
				<h1>FurniShop</h1>
				<div className="flex flex-row items-center justify-center gap-4">
					<BsInstagram className="text-xl" />
					<BsFacebook className="text-xl" />
					<BsTwitterX className="text-xl" />
					<BsGithub className="text-xl" />
				</div>
			</div>
			<hr className="bg-white w-[86%] mb-12" />
			<div className="flex w-[85%] justify-between mb-12 flex-wrap gap-4">
				<div className="flex flex-col items-start justify-center w-[200px] ">
					<h1>Our Products</h1>
					<Link href="#" className="text-gray-400 text-sm">
						About
					</Link>
					<Link href="#" className="text-gray-400 text-sm">
						About
					</Link>
					<Link href="#" className="text-gray-400 text-sm">
						About
					</Link>
					<Link href="#" className="text-gray-400 text-sm">
						About
					</Link>
				</div>
				<div className="flex flex-col items-start justify-center w-[200px]">
					<h1>Top Features</h1>
					<Link href="#" className="text-gray-400 text-sm">
						About
					</Link>
					<Link href="#" className="text-gray-400 text-sm">
						About
					</Link>
					<Link href="#" className="text-gray-400 text-sm">
						About
					</Link>
					<Link href="#" className="text-gray-400 text-sm">
						About
					</Link>
				</div>
				<div className="flex flex-col items-start lg:items-center justify-center w-[200px]">
					<div className="flex flex-col items-start justify-center">
						<h1>Resources</h1>
						<Link href="#" className="text-gray-400 text-sm">
							About
						</Link>
						<Link href="#" className="text-gray-400 text-sm">
							About
						</Link>
						<Link href="#" className="text-gray-400 text-sm">
							About
						</Link>
						<Link href="#" className="text-gray-400 text-sm">
							About
						</Link>
					</div>
				</div>
				<div className="flex flex-col items-start lg:items-end justify-center w-[200px]">
					<div className="flex flex-col items-start justify-center">
						<h1>Company</h1>
						<Link href="#" className="text-gray-400 text-sm">
							About
						</Link>
						<Link href="#" className="text-gray-400 text-sm">
							About
						</Link>
						<Link href="#" className="text-gray-400 text-sm">
							About
						</Link>
						<Link href="#" className="text-gray-400 text-sm">
							About
						</Link>
					</div>
				</div>
				<div className="flex flex-col items-start lg:items-end justify-center w-[200px]">
					<div className="flex flex-col items-start justify-center">
						<h1>Favorite Things</h1>
						<Link href="#" className="text-gray-400 text-sm">
							About
						</Link>
						<Link href="#" className="text-gray-400 text-sm">
							About
						</Link>
						<Link href="#" className="text-gray-400 text-sm">
							About
						</Link>
						<Link href="#" className="text-gray-400 text-sm">
							About
						</Link>
					</div>
				</div>
			</div>
			<div className="text-sm">© NameBrand 2025 - All Rights Reserved</div>
		</div>
	);
};

export default Footer;
