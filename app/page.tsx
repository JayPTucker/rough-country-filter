// Added use client so the browser can remember the selected option, update state, and rerender the list.
// By default, components in the App Router are Server components.   We used marked this page as Client Component
// so that way it allows React Hooks to run in the browser and update the UI without refreshing the page.
"use client";

import { useState } from "react";
import { MOCK_PRODUCTS } from "@/data/products";
import ProductList from "@/components/ProductList";
import Filter from "@/components/Filter";

export default function Home() {
  // State to hold the selected vehicle make for filtering
  const [selectedMake, setSelectedMake] = useState("All");

  // State to hold the selected vehicle year for filtering
  const [selectedYear, setSelectedYear] = useState("All");

  // Derived State to Filter products based on the selected make (OTher way of making an If statement)
  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesMake =
      selectedMake === "All" ||
      product.make === selectedMake;

    const matchesYear =
      selectedYear === "All" ||
      product.year.toString() === selectedYear;

    return matchesMake && matchesYear;
  });

  const resetButton = () => {
    setSelectedMake("All");
    setSelectedYear("All");
  };

  
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
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        resetFilters={resetButton}
      />

      {/* Number of products found based on the selected make and year */}
      <p className="productsCount">
        {filteredProducts.length} products found
      </p>

      {/* Display the filtered products using the ProductList component */}
      <ProductList products={filteredProducts} />
    </main>
  );
}