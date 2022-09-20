import { useState } from "react";
import Bloglist from "./BlogList";
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
  const [showBlogs, setShowBlogs] = useState(blogs);
  function newBlogs(id) {
    let newBlogs = showBlogs.filter((item) => item.id !== id);
    setShowBlogs(newBlogs);
  }

  return (
    <div>
      <Bloglist
        blogList={showBlogs}
        title={"All blogs"}
        deleteBlogs={newBlogs}
      />
    </div>
  );
}
