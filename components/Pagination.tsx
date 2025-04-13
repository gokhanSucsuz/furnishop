import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

const Pagination = () => {
	return (
		<div className="flex items-center justify-center w-full">
			<div className="flex items-center justify-center gap-4 pt-8 lg:pt-16">
				<div className="w-8 h-8 rounded-full text-2xl bg-gray-300 flex items-center justify-center opacity-50 shadow-lg">
					<IoArrowBackOutline />
				</div>
				<span className="w-2 h-2 rounded-full border bg-black" />
				<span className="w-2 h-2 rounded-full border" />
				<span className="w-2 h-2 rounded-full border" />
				<span className="w-2 h-2 rounded-full border" />
				<span className="w-2 h-2 rounded-full border" />
				<div className="w-8 h-8 rounded-full text-2xl shadow-lg flex items-center justify-center ">
					<IoArrowForward />
				</div>
			</div>
		</div>
	);
};

export default Pagination;
