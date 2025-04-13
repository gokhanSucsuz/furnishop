import React from "react";
import { Menu } from "./Menu";

const content = [
	{
		id: 1,
		number: "7",
		text: "Years of Experience"
	},
	{
		id: 2,
		number: "2",
		text: "Opened in the country"
	},
	{
		id: 3,
		number: "10k+",
		text: "Furniture sold"
	},
	{
		id: 4,
		number: "260+",
		text: "Variant Furniture"
	}
];
const Hero = () => {
	return (
		<div className="flex w-full h-screen flex-col text-white">
			<div className="relative bg-[url('/home/modern-living-room-interior-2021-09-02-08-41-17-utc(1).png')] bg-cover w-full bg-no-repeat h-full bg-right ">
				<Menu />
				<div className="flex items-center justify-center pt-48 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold capitalize text-center px-12 lg:px-88">
					Creative Home Simpify your Furniture
				</div>
				<p className="flex items-center justify-center py-6 text-md md:text-lg lg:text-xl xl:text-2xl font-normal text-center w-fit max-w-[627px] mx-auto px-4">
					Do i have consent to record this meeting gain locaion,
					root-and-branch, review, nor game plan who’s the goto
				</p>
			</div>
			<div className="absolute bg-gradient-to-b from-white/10 via-white/20 to-transparent" />
			<div className="relative w-full max-h-[53px] h-full">
				<div className="absolute bg-[url('/home/modern-living-room-interior-2021-09-02-08-41-17-utc.png')] bg-cover w-full bg-right bg-no-repeat max-h-[53px] h-full " />
				<div className="absolute inset-0 bg-gradient-to-t from-white/100 via-white/07 to-transparent" />
			</div>
			<div className="flex items-center justify-center bg-transparent absolute bottom-0 left-0 w-full h-[36%] sm:h-[20%]">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 content-center justify-items-center bg-[#286F6C] h-full w-[85%] mt-48 rounded-3xl gap-4">
					{content.map(item =>
						<div
							key={item.id}
							className={`relative flex flex-col items-center justify-center w-full sm:w-36 h-12 p-4 m-2 `}
						>
							<span className="font-bold text-2xl">
								{item.number}
							</span>
							<p className="text-sm text-center">
								{item.text}
							</p>
						</div>
					)}
					<hr className="hidden absolute right-[28%] top-32 w-0.5 h-[32%] lg:block lg:top-40 bg-white" />
					<hr className="hidden sm:block absolute right-[50%] top-32 w-0.5 h-[32%] lg:top-40 bg-white" />
					<hr className="hidden sm:block absolute right-[50%] top-50 w-0.5 h-[32%] lg:top-40 bg-white" />
					<hr className="hidden absolute left-[29%] top-32 w-0.5 h-[32%] lg:block lg:top-40 bg-white" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
