import { useState } from "react";
export default function Home() {
  const blogs = [
    {
      title: "How are we doing today?",
      body: "How are people doing today?",
      author: "Dennis D.",
      id: 1,
    },
    {
      title: "How are we doing yesterday?",
      body: "How are people doing yesterday?",
      author: "Bianca B.",
      id: 2,
    },
  ];
  const [message, setMessage] = useState("Click me");
  const [blogList, setBlogList] = useState(blogs);

  let listBlogs = blogList.map((elem) => (
    <div className="hover:shadow-md mb-4" key={elem.id}>
      <h1 className="text-xl font-medium text-rose-500">{elem.title}</h1>
      <p>Written by {elem.author}</p>
    </div>
  ));
  function handleClick() {
    setMessage("Well Well hi there");
  }
  return (
    <div>
      <div className="blog-container">{listBlogs}</div>
    </div>
  );
}
