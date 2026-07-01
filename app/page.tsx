import { MOCK_PRODUCTS } from "@/data/products";

export default function Home() {
  console.log(MOCK_PRODUCTS);

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold">
        Rough Country Product Filter
      </h1>
    </main>
  );
}