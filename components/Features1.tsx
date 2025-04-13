import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const features = [
	{
		id: 1,
		title: "We Create Your Home More Aesthetic",
		text:
			"Furnitre power is a software as services for multiperpose business management system, ",
		image: "/feature/Insert Image Here (1).png",
		icon: "xxx",
		fTitle: "Valuation Services",
		fText:
			"Sometimes features require a short description.  This can be detailed description"
	},
	{
		id: 2,
		title: "The Best Furniture Manufacturer of your choice",
		text:
			"Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services",
		image: "/feature/Insert Image Here (2).png",
		icon: "",
		fTitle: "",
		fText: ""
	}
];
const Features1 = () => {
	return (
		<div className="bg-white z-3 mt-28 text-black w-full mx-auto">
			<div className="flex flex-wrap lg:flex-nowrap items-center w-[89%] mx-auto justify-between gap-8 mt-12  text-xl ">
				<div className="w-full lg:w-1/2 order-1 lg:order-0 ">
					<div className="relative flex w-[90%] h-96 mx-auto">
						<Image
							src={"/feature/Insert Image Here (1).png"}
							alt="feature1"
							fill
							className="object-cover rounded-xl absolute top-0 left-0"
						/>
					</div>
				</div>
				<div className="w-full lg:w-1/2 h-96 order-0 lg:order-1">
					<div className="flex flex-col justify-start h-full w-[90%] mx-auto">
						<h1 className="text-4xl font-semibold py-2">
							{features[0].title}
						</h1>
						<p className="text-lg font-normal">
							{features[0].text}
						</p>
						<div className="flex flex-row py-4 gap-4">
							<div className="flex">
								<FaCheckCircle />
							</div>
							<div className="flex flex-col ">
								<h2 className="text-xl font-semibold">
									{features[0].fTitle}
								</h2>
								<p className="text-lg">
									{features[0].fText}
								</p>
							</div>
						</div>
						<div className="flex flex-row py-4 gap-4">
							<div className="flex  ">
								<FaCheckCircle />
							</div>
							<div className="flex flex-col ">
								<h2 className="text-xl font-semibold">
									{features[0].fTitle}
								</h2>
								<p className="text-lg">
									{features[0].fText}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features1;
