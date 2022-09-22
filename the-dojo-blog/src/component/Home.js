import { useState, useEffect } from "react";
import Bloglist from "./BlogList";
import Loading from "./Loading";
export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [error, setError] = useState(null);
  //Will make a fetch request that gets info names on every render of the user

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((resp) => resp.json())
      .then((data) => {
        setBlogs(data);
        setShowLoading(false);
      });
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {showLoading && <Loading />}
      <Bloglist blogList={blogs} title={"All blogs"} />
    </div>
  );
}
