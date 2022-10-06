import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
export default function FullBlogDetails() {
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((resp) => resp.json())
      .then((data) => {
        let result = data.find((elem) => elem.id == id);
        setError(false);
        setBlog(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // console.log(blog);
  return (
    <>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {blog && (
        <div
          key={blog.id}
          className="p-2 flex gap-6 border-2 border-grey-200  hover:shadow-lg my-6"
        >
          <div className="shrink-0 w-20 ">
            <img className="" src={blog.picture} />
            <p className="">
              Written by{" "}
              <span className="text-rose-500 font-medium text-lg">
                {blog.firstName + " " + blog.lastName}
              </span>
            </p>
          </div>
          <div className="text-center flex flex-col justify-around">
            <p className="font-bold">"{blog.title}..."</p>
            <p>{blog.body}</p>
          </div>
        </div>
      )}
    </>
  );
}
