import { MOCK_PRODUCTS } from "@/data/products";

import "./globals.css";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Rough Country Product Filter Assessment
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {MOCK_PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="productCard"
          >
            <p className="productTitle">
              {product.name}
            </p>

            <p>
              {product.year} {product.make} {product.model}
            </p>

            <p className="font-medium">
              {product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>

            
            <p className={`font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
              {product.inStock ? "✔ In Stock" : "✘ Out of Stock"}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}