// Added use client so the browser can remember the selected option, update state, and rerender the list.
"use client";

import { useState } from "react";
import { MOCK_PRODUCTS } from "@/data/products";
import ProductList from "@/components/ProductList";
import Filter from "@/components/Filter";

export default function Home() {
  // State to hold the selected vehicle make for filtering
  const [selectedMake, setSelectedMake] = useState("All");

  // Derived State to Filter products based on the selected make (OTher way of making an If statement)
  const filteredProducts =
    selectedMake === "All"
      ? MOCK_PRODUCTS
      : MOCK_PRODUCTS.filter(
          (product) => product.make === selectedMake
        );

  
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Rough Country Product Filter Assessment
      </h1>

      {/* From our useState hook, we are able to set the selected vehicle make and 
      filter the products accordingly. The Filter component allows users to select
       a vehicle make, and the ProductList component displays the filtered products. */}
      <Filter
        selectedMake={selectedMake}
        setSelectedMake={setSelectedMake}
      />

      {/* Display the filtered products using the ProductList component */}
      <ProductList products={filteredProducts} />
    </main>
  );
}