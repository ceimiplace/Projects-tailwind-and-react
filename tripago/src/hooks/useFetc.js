import { useEffect, useState } from "react";

export default function useFetch(url, setDat, setClone) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2b$10$doR7B.7fbc0i1PieOgswOOl/ekMCLujXbfgUJ/G/AD.jscgMa5v2G",
      },
    })
      .then((resp) => {
        setError(false);
        setLoading(false);
        return resp.json();
      })
      .then((data) => {
        setDat(data.record.trips);
        setClone(data.record.trips);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);
  return { error, loading };
}
