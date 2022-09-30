import { useState, useEffect } from "react";
import BlogRenderer from "./BlogRenderer";
import Loader from "./Loader";
export default function Home() {
  const [blogsToDisplay, setBlogsToDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/63373e2660c92b271df634cb", {
      method: "GET",
      headers: {
        "Conten-type": "application/json",
        "X-Master-Key":
          "$2b$10$doR7B.7fbc0i1PieOgswOOl/ekMCLujXbfgUJ/G/AD.jscgMa5v2G",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.record.posts);
        setLoading(false);
        setError(null);
        setBlogsToDisplay(data.record.posts);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {error && <div>{error}</div>}
      {loading && <Loader />}

      <BlogRenderer blogsToDisplay={blogsToDisplay} message={"All Blogs"} />
    </>
  );
}
