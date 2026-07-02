import { MOCK_PRODUCTS } from "@/data/products";

// interface for the props of the Filter component
interface FilterProps {
  selectedMake: string;
  setSelectedMake: (make: string) => void;
  selectedYear?: string;
  setSelectedYear?: (year: string) => void;
}

// Filter component to allow users to select a vehicle make for filtering products

export default function Filter({
  selectedMake,
  setSelectedMake,
  selectedYear,
  setSelectedYear,

}: FilterProps) {

    const makes = [
        "All",
        ...new Set(MOCK_PRODUCTS.map((product) => product.make)),
    ];

    const years = [
        "All",
        ...new Set(MOCK_PRODUCTS.map((product) => product.year.toString())),
    ];

  return (
    <div className="mb-6">
        <label htmlFor="make" className="block">
        Vehicle Make
        </label>

        {/* Dropdown to select vehicle make for filtering */}
        <select
        id="make"
        value={selectedMake}
        onChange={(e) =>
            setSelectedMake(e.target.value)
        }
        className="vehicleMakeSelect"
        >
            {/* References lines 21-30 to make the app more scalable rather than input options manually */}
            {makes.map((make) => (
                <option key={make} value={make}>
                    {make}
                </option>
            ))}
        </select>

        <label htmlFor="year" className="block">
        Vehicle Year
        </label>

        {/* Dropdown to select vehicle year for filtering */}
        <select
        id="year"
        value={selectedYear}
        onChange={(e) =>
            setSelectedYear && setSelectedYear(e.target.value)
        }
        className="vehicleYearSelect"
        >
            {/* References lines 21-30 to make the app more scalable rather than input options manually */}
            {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
        </select>
    </div>
  );
}