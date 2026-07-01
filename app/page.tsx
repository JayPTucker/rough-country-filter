import { MOCK_PRODUCTS } from "@/data/products";
import ProductList from "@/components/ProductList";
import "./globals.css";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Rough Country Product Filter
      </h1>

      <ProductList products={MOCK_PRODUCTS} />
    </main>
  );
}