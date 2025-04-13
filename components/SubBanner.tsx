import Image from "next/image";
import React from "react";

const SubBanner = () => {
	return (
		<div className="flex relative w-full h-96">
			<Image
				src={"/subBanner/1.png"}
				alt="subBanner"
				width={1000}
				height={1000}
				className="object-cover w-full h-full absolute left-0 top-0"
			/>
			<div className="absolute left-[32%] md:left-[40%] lg:left-[50%] top-[55%] lg:top-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex flex-col items-center justify-center lg:pl-40 ">
				<div className="flex flex-col items-start justify-center pl-20 lg:pl-44 py-4 text-white text-center lg:text-left lg:pt-12">
					<h1 className="text-xl md:text-3xl lg:text-4xl font-semibold w-full">
						Get more discount <br />Off your order
					</h1>
					<p className="text-lg md:text-xl lg:text-xl font-normal w-full">
						Join our mailing list
					</p>
				</div>
				<div className="flex gap-4 w-1/2 lg:w-3/4 justify-center pl-36 pt-12 lg:pl-44">
					<input
						type="text"
						placeholder="Your email address"
						className="py-2 px-4 rounded-lg bg-white w-24 sm:w-fit "
					/>
					<button className="bg-black text-white py-2 px-4 rounded-lg cursor-pointer text-sm lg:text-lg">
						Shop Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default SubBanner;
