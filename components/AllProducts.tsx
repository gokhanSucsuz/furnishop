import Image from "next/image";
import React from "react";

const products = [
	{
		id: 1,
		title: "Chair",
		image: "/allproducts/1.png",
		price: 100,
		oldPrice: 123
	},
	{
		id: 2,
		title: "Chair",
		image: "/allproducts/2.png",
		price: 100,
		oldPrice: 123
	},
	{
		id: 3,
		title: "Chair",
		image: "/allproducts/3.png",
		price: 100,
		oldPrice: 123
	},
	{
		id: 4,
		title: "Chair",
		image: "/allproducts/4.png",
		price: 100,
		oldPrice: 123
	},
	{
		id: 5,
		title: "Chair",
		image: "/allproducts/5.png",
		price: 100,
		oldPrice: 123
	},
	{
		id: 6,
		title: "Chair",
		image: "/allproducts/6.png",
		price: 100,
		oldPrice: 123
	},
	{
		id: 7,
		title: "Chair",
		image: "/allproducts/7.png",
		price: 100,
		oldPrice: 123
	},
	{
		id: 8,
		title: "Chair",
		image: "/allproducts/8.png",
		price: 100,
		oldPrice: 123
	}
];
const AllProducts = () => {
	return (
		<div className="flex flex-col py-32 gap-4 items-center justify-center w-[85%] text-center">
			<div className="flex flex-col gap-4 w-1/2 pb-8">
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
						className="flex flex-col items-center justify-center gap-4 w-full"
					>
						<div className="relative w-full h-96 card ">
							<Image
								src={product.image}
								alt={product.title}
								fill
								className="object-cover"
							/>
							<h1 className="absolute bottom-0 w-full left-0 py-2 text-2xl font-semibold">
								{product.title}
							</h1>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AllProducts;
