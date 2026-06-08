import { BestSellers } from "@/components/BestSellers";
import { CategoriesGrid } from "@/components/CategoriesGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { Testimonials } from "@/components/Testimonials";
import { TrendingProducts } from "@/components/TrendingProducts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoriesGrid />
        <TrendingProducts />
        <BestSellers />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
