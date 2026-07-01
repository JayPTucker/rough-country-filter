import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";

// Interface for the props of the ProductList component
interface ProductListProps {
  products: Product[];
}

// ProductList component to display a list of products
export default function ProductList({
  products,
}: ProductListProps) {

    // If there are no products to display, show a message indicating that no products were found for the selected make.
    if (products.length === 0) {
    return (
            <p className="text-gray-500">
                No products found for this make.
            </p>
        );
    }
    
    // Otherwise return:
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
            <ProductCard
            key={product.id}
            product={product}
            />
        ))}
        </div>
    );
}