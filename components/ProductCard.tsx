import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <div className="productCard">
        <p className="productTitle">
            {product.name}
        </p>

        <p>
            {product.year} {product.make} {product.model}
        </p>

        <p>
            {product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            })}
        </p>

        <p className={`font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
            {product.inStock ? "✔ In Stock" : "✘ Out of Stock"}
        </p>
    </div>
  );
}