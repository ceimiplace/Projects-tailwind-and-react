import { useState, useEffect } from "react";
import BlogRenderer from "./BlogRenderer";
import Loader from "./Loader";
export default function Home() {
  const [blogsToDisplay, setBlogsToDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((resp) => resp.json())
      .then((data) => {
        setLoading(false);
        setError(null);
        setBlogsToDisplay(data);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <div className=" py-4">
      {error && <div>{error}</div>}
      {loading && <Loader />}

      <BlogRenderer blogsToDisplay={blogsToDisplay} message={"All Blogs"} />
    </div>
  );
}
