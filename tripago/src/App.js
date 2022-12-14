import { useEffect, useState } from "react";
import FilterButton from "./components/FilterButton";
import FilterNav from "./components/FilterNav";
import Triplist from "./components/Triplist";

function App() {
  const [data, setData] = useState([]);
  function filterFetch(condition) {
    fetch("https://api.jsonbin.io/v3/b/63370c85a1610e63863eac4a", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2b$10$doR7B.7fbc0i1PieOgswOOl/ekMCLujXbfgUJ/G/AD.jscgMa5v2G",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (!condition) {
          setData(data.record.trips);
        } else {
          setData(data.record.trips.filter((elem) => elem.loc == condition));
        }
      });
  }
  useEffect(() => {
    filterFetch();
  }, []);
  return (
    <div className="max-w-3xl mx-auto p-4">
      <FilterNav filterFetch={filterFetch} />
      <Triplist lists={data} />
    </div>
  );
}

export default App;
