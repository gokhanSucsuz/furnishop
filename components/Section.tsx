import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = [
	{
		id: 1,
		title: "Chair",
		image: "/section/1.png"
	},
	{
		id: 2,
		title: "Bed",
		image: "/section/2.png"
	},
	{
		id: 3,
		title: "Cupboard",
		image: "/section/3.png"
	},
	{
		id: 4,
		title: "Lightning",
		image: "/section/4.png"
	}
];
const Section = () => {
	return (
		<div className="flex flex-col lg:flex-row gap-4 py-24 w-[85%] mx-auto  text-black ">
			<div className="flex flex-row lg:flex-col gap-4 w-full lg:w-[30%] justify-center  py-4">
				<h1 className="text-4xl font-semibold">New In Store Now</h1>
				<p className="text-lg font-normal">
					Get the latest items immediately with promo prices
				</p>
				<Link href="/#" className="hidden lg:flex text-lg font-semibold">
					Check All
				</Link>
			</div>
			<div className="flex flex-row flex-nowrap w-full lg:w-[70%] gap-4  hide-scrollbar ">
				{images.map(image =>
					<div
						key={image.id}
						className="relative flex w-full min-w-[240px] h-96 justify-center"
					>
						<Image
							src={image.image}
							alt={image.title}
							fill
							className="object-cover rounded-lg w-full h-full"
						/>
						<p className="flex absolute bottom-6 left-2/5 text-2xl font-semibold text-white">
							{image.title}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Section;
