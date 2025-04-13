import Image from "next/image";
import React from "react";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

const commentary = [
	{
		id: 1,
		name: "John Smith",
		profession: "Software Engineer",
		personalImage: "/comments/1.png",
		comment:
			"They are have a perfect touch for make something so professional ,interest and useful for a lot of people.",
		image: "/comments/image1.png"
	}
];
const Comments = () => {
	return (
		<div className="flex flex-row items-center justify-center w-full">
			<div className="flex flex-col items-center justify-center w-[85%]">
				<div className="flex gap-4 w-full mx-auto mt-12">
					{commentary.map(comment =>
						<div key={comment.id} className="flex w-full">
							<div className="flex flex-col items-start justify-center w-1/2 gap-8">
								<h1 className="text-4xl font-semibold">
									What People Are Saying About Us
								</h1>
								<div className="flex flex-row items-center justify-center w-full gap-4">
									<div className="relative w-20 h-20 rounded-full">
										<Image
											src={comment.personalImage}
											alt={comment.name}
											fill
											className="object-cover w-full h-full rounded-full"
										/>
									</div>
									<div className="flex flex-col items-start justify-center px-4 w-full">
										<h1 className="text-lg font-semibold">
											{comment.name}
										</h1>
										<p className="text-sm font-normal text-gray-400">
											{comment.profession}
										</p>
									</div>
								</div>
								<div className="flex w-4/5">
									<p className="text-lg font-normal">
										{comment.comment}
									</p>
								</div>
								<div className="flex items-center justify-center gap-4">
									<div className="w-10 h-10 rounded-full text-2xl bg-white flex items-center justify-center shadow-lg">
										<IoArrowBackOutline />
									</div>

									<div className="w-10 h-10 rounded-full text-2xl shadow-lg flex items-center justify-center bg-[#286F6C] text-white">
										<IoArrowForward />
									</div>
								</div>
							</div>
							<div className="flex items-center justify-center ">
								<Image
									src={comment.image}
									alt={comment.name}
									width={500}
									height={500}
									className="object-cover w-full h-full rounded-lg"
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Comments;
