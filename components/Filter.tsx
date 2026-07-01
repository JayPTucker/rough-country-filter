// interface for the props of the Filter component
interface FilterProps {
  selectedMake: string;
  setSelectedMake: (make: string) => void;
}

// Filter component to allow users to select a vehicle make for filtering products
export default function Filter({
  selectedMake,
  setSelectedMake,
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
    </div>
  );
}