import { getAllProducts } from "@/lib/products";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";

export default function HomePage() {
  const products = getAllProducts();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProductGrid products={products} />
      </main>
      <SiteFooter />
    </div>
  );
}
