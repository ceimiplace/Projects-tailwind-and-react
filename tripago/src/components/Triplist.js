import { useEffect, useState } from "react";
export default function Triplist() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTrips(data));
  }, [url]);

  return (
    <div className="max-w-lg mx-auto my-2">
      <h2 className="text-3xl font-medium">Trip list</h2>
      <ul className=" ">
        {trips.map((elem) => {
          return (
            <li key={elem.id} className="my-6 shadow-md p-6">
              <h2 className="text-2xl font-medium my-2">{elem.title}</h2>
              <p className="text-2xl">{elem.price}</p>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setUrl(`http://localhost:3000/trips?loc=europe`);
        }}
      >
        European Trips
      </button>
    </div>
  );
}
