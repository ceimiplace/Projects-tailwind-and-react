import { useState, useEffect } from "react";
import BlogRenderer from "./BlogRenderer";
export default function Home() {
  const [blogsToDisplay, setBlogsToDisplay] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((resp) => resp.json())
      .then((data) => setBlogsToDisplay(data));
  }, []);
  return (
    <div>
      <h2>All blogs</h2>
      <BlogRenderer blogsToDisplay={blogsToDisplay} />
    </div>
  );
}
