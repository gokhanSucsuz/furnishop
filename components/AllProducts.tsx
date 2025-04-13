import Image from "next/image";
import React from "react";
import Pagination from "./Pagination";

const products = [
	{
		id: 1,
		title: "Ceiling Light",
		image: "/allproducts/1.png",
		price: 75,
		oldPrice: 82
	},
	{
		id: 2,
		title: "Wood Chair",
		image: "/allproducts/2.png",
		price: 50,
		oldPrice: 70
	},
	{
		id: 3,
		title: "Papper Cupboard",
		image: "/allproducts/3.png",
		price: 105,
		oldPrice: 120
	},
	{
		id: 4,
		title: "Ole Gundorse Spring  lorem lorem lorem lorem",
		image: "/allproducts/4.png",
		price: 82,
		oldPrice: 100
	},
	{
		id: 5,
		title: "Treos Seroes 911",
		image: "/allproducts/5.png",
		price: 200,
		oldPrice: 210
	},
	{
		id: 6,
		title: "Multi Bilderman Slibber lorem lorem lorem lorem",
		image: "/allproducts/6.png",
		price: 45,
		oldPrice: 50
	},
	{
		id: 7,
		title: "XORA Corner Desk",
		image: "/allproducts/7.png",
		price: 320,
		oldPrice: 325
	},
	{
		id: 8,
		title: "Black Forest Series Wooden Table",
		image: "/allproducts/8.png",
		price: 225,
		oldPrice: 240
	}
];
const AllProducts = () => {
	return (
		<div className="flex flex-col py-32 gap-4 items-center justify-center w-[85%] ">
			<div className="flex flex-col gap-4 w-[90%] mx-auto lg:w-1/2 pb-8 text-center">
				<h1 className="text-4xl font-semibold">All Products</h1>
				<p className="text-lg font-normal">
					The products we provide only for you as our service are selected from
					the best products with number 1 quality in the world.
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mx-auto">
				{products.map(product =>
					<div
						key={product.id}
						className="relative flex flex-col items-center gap-4 w-full"
					>
						<div className="relative w-full h-96 card">
							<Image
								src={product.image}
								alt={product.title}
								fill
								className="object-cover border"
							/>
							<div className="absolute bottom-4 right-4 flex flex-row gap-2">
								<div className="w-8 h-8 rounded-full text-2xl bg-gray-300 flex items-center justify-center">
									+
								</div>
							</div>
						</div>
						<h1 className="w-full py-2 px-6 text-2xl font-semibold">
							{product.title.substring(0, 19)}
							{product.title.length > 20 ? "..." : ""}
						</h1>
						<div className="flex flex-row w-full gap-4 text-slate-500 items-center justify-start px-6">
							<span className="flex text-sm font-semibold">
								${product.price}
							</span>
							<span className="flex text-sm line-through">
								${product.oldPrice}
							</span>
						</div>
					</div>
				)}
			</div>
			<Pagination />
		</div>
	);
};

export default AllProducts;
