import { useParams } from "react-router-dom";
import { useState } from "react";
export default function BlogDetails() {
  const [blog, setBlog] = useState("");
  const { id } = useParams();
  fetch("http://localhost:8000/posts/" + id)
    .then((rsp) => rsp.json())
    .then((data) => setBlog(data.body));
  return (
    <div>
      <h2>Blog details-{id}</h2>
      <p>{blog}</p>
    </div>
  );
}
