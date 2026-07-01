export interface Product {
  id: string;
  name: string;
  year: number;
  make: string;
  model: string;
  price: number;
  inStock: boolean;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "6-Inch Suspension Lift Kit",
    year: 2021,
    make: "Ford",
    model: "Bronco",
    price: 1299.95,
    inStock: true,
  },
  {
    id: "2",
    name: "Heavy Duty Front Bumper",
    year: 2021,
    make: "Ford",
    model: "Bronco",
    price: 749.99,
    inStock: true,
  },
  {
    id: "3",
    name: "Premium N3 Loaded Struts",
    year: 2022,
    make: "Ford",
    model: "F-150",
    price: 349.95,
    inStock: false,
  },
  {
    id: "4",
    name: "Dual Row LED Light Bar",
    year: 2021,
    make: "Jeep",
    model: "Wrangler",
    price: 189.99,
    inStock: true,
  },
  {
    id: "5",
    name: "Tubular Rock Sliders",
    year: 2022,
    make: "Jeep",
    model: "Wrangler",
    price: 429.95,
    inStock: true,
  },
  {
    id: "6",
    name: "Vertex Coilovers Pair",
    year: 2023,
    make: "Toyota",
    model: "Tundra",
    price: 1599.99,
    inStock: true,
  },
];