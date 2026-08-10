import { MOCK_PRODUCTS } from "@/data/products";

// interface for the props of the Filter component
interface FilterProps {
  selectedMake: string;
  setSelectedMake: (make: string) => void;
  selectedYear?: string;
  setSelectedYear?: (year: string) => void;
  resetFilters: () => void;
}

// Filter component to allow users to select a vehicle make for filtering products

export default function Filter({
  selectedMake,
  setSelectedMake,
  selectedYear,
  setSelectedYear,
  resetFilters,

}: FilterProps) {

    // .map() method is used to create a new array of unique vehicle makes and years from the 
    // MOCK_PRODUCTS data. The "All" option is added to the beginning of each array to allow 
    // users to select all makes or years.
    // new Set is a collection of unique values, so it is used to remove duplicates from the array of makes and years.
    // Since set is not an array we have to convert it back into one with the spread operator (...). 
    // The spread operator is used to spread the values of the Set into a new array.
    // Then "All" is added to the beginning of the array using the spread operator again. 
    // This allows users to select all makes or years.
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

        <br></br>

        {/* Custom button so we can have it automatically change class based on the state */}
        <button
        onClick={resetFilters}
        className={`resetButton ${selectedMake === "All" && selectedYear === "All" ? "resetBtnDisable" : "resetBtnEnable"}`}
        disabled={selectedMake === "All" && selectedYear === "All"}
        >
            Reset Filters
        </button>


    </div>
  );
}