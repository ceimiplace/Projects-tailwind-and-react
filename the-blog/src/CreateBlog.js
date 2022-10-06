import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [buttonText, setButtonText] = useState("Add Blog");
  let history = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const blog = {
      title,
      body,
      firstName,
      lastName,
      picture: `https://robohash.org/${firstName}.png`,
    };
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setButtonText("Redirecting...");
      setTimeout(() => {
        history("/");
      }, 2000);
    });
  }
  return (
    <div className="w-3/4  mx-auto p-4">
      <h2 className="text-3xl font-medium text-center">Add new log</h2>
      <form onSubmit={handleSubmit} className="text-lg font-medium ">
        <div>
          {" "}
          <label>Blog Title:</label>
          <input
            className="block border-2 border-400-slate w-full"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Blog Text:</label>
          <textarea
            className="block border-2 border-400-slate w-full h-40"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div>
          <label>First Name</label>
          <input
            className="block border-2 border-400-slate w-full"
            type="text"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Last Name</label>
          <input
            className="block border-2 border-400-slate w-full"
            type="text"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <button className="bg-slate-200 p-2 rounded mx-auto block mt-4">
          {buttonText}
        </button>
      </form>
    </div>
  );
}
