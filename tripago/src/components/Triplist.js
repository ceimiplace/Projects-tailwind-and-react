import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetc";
import FilterButton from "./FilterButton";
export default function Triplist() {
  const [data, setData] = useState([]);
  const [clonedData, setClonedData] = useState();
  const [urle, setUrl] = useState(
    "https://api.jsonbin.io/v3/b/63370c85a1610e63863eac4a"
  );
  const { error, loading } = useFetch(urle, setData, setClonedData);
  console.log(data, error, loading);
  return (
    <div className="max-w-lg mx-auto my-2">
      <FilterButton
        text="european trips"
        filteree={"europe"}
        sendDataUp={setClonedData}
        data={data}
      />
      <FilterButton
        text="American trips"
        filteree={"america"}
        sendDataUp={setClonedData}
        data={data}
      />
      <FilterButton
        text="France trips"
        filteree={"france"}
        sendDataUp={setClonedData}
        data={data}
      />
      <FilterButton
        text="united Kingdom trips"
        filteree={"united kingdom"}
        sendDataUp={setClonedData}
        data={data}
      />
      <button
        onClick={() => {
          setClonedData(data);
        }}
      >
        reset data
      </button>
      <h2 className="text-3xl font-medium">Trip list</h2>
      {error && <div>{error}</div>}
      {loading && <div>"still loading</div>}
      {clonedData && (
        <ul className=" ">
          {clonedData.map((elem) => {
            return (
              <li key={elem.id} className="my-6 shadow-md p-6">
                <h2 className="text-2xl font-medium my-2">{elem.title}</h2>
                <p className="text-2xl">{elem.price}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
