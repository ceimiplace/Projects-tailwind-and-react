import { useState, useEffect } from "react";
import BlogRenderer from "./BlogRenderer";
import Loader from "./Loader";
import { projectFirestore } from "./firebase/config";
export default function Home() {
  const [blogsToDisplay, setBlogsToDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let results = [];
    projectFirestore
      .collection("recipies")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((elem) =>
          results.push({ id: elem.id, ...elem.data() })
        );
        setLoading(false);
        setBlogsToDisplay(results.reverse());
      })
      .catch((error) => {
        setError(error.message);
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
