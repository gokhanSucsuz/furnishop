import AllProducts from "@/components/AllProducts";
import Comments from "@/components/Comments";
import Features1 from "@/components/Features1";
import Features from "@/components/Features1";
import Features2 from "@/components/Features2";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SubBanner from "@/components/SubBanner";

export default function Home() {
	return (
		<main className="bg-white flex min-h-screen flex-col items-center justify-between text-black">
			{/* Hero Section */}
			<Hero />

			{/* Features Section */}
			<Features1 />

			{/* Section */}
			<Section />

			{/* Features Section */}
			<Features2 />

			{/* All Products Section */}
			<AllProducts />

			{/* Comments Section */}
			<Comments />

			{/* Subbanner Section */}
			<SubBanner />
		</main>
	);
}
