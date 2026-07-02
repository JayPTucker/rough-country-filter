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
            <option value="All">All Makes</option>
            <option value="Ford">Ford</option>
            <option value="Jeep">Jeep</option>
            <option value="Toyota">Toyota</option>
            <option value="Ram">Ram</option>
            <option value="Chevrolet">Chevrolet</option>
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
            <option value="All">All Years</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
    </div>
  );
}