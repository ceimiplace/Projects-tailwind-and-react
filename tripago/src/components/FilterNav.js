import FilterButton from "./FilterButton";
export default function FilterNav({ filterFetch }) {
  return (
    <div className="border-2 border-black    py-4">
      <p className="mb-2 ml-2">
        Please select the country where you want to go:
      </p>
      <div className="flex justify-around">
        <FilterButton handleClick={filterFetch} filter="europe">
          Europe trips
        </FilterButton>
        <FilterButton handleClick={filterFetch} filter="america">
          Trips in america
        </FilterButton>
        <FilterButton handleClick={filterFetch} filter="france">
          Trips in france
        </FilterButton>
        <FilterButton handleClick={filterFetch} filter="">
          Reset
        </FilterButton>
      </div>
    </div>
  );
}
