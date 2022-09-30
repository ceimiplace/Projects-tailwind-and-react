import { useState } from "react";
import Loader from "./Loader";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <div className="w-3/4 border-2 border-slate-400 mx-auto p-4">
      <h2 className="text-3xl font-medium text-center">Add new log</h2>
      <form
        className="text-lg font-meidum "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          {" "}
          <label>Blog Title:</label>
          <input
            className="block border-2 border-400-slate w-full"
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Blog Text:</label>
          <textarea
            onChange={(e) => setText(e.target.value)}
            className="block border-2 border-400-slate w-full h-40"
            required
          />
        </div>
        <div>
          <label>Blog Author:</label>
          <input
            onChange={(e) => setAuthor(e.target.value)}
            className="block border-2 border-400-slate w-full"
            type="text"
            required
          />
          <button
            onClick={() => {
              fetch("https://api.jsonbin.io/v3/b/63373e2660c92b271df634cb", {
                method: "Put",
                headers: {
                  "Content-Type": "application/json",
                  "X-Master-Key":
                    "$2b$10$doR7B.7fbc0i1PieOgswOOl/ekMCLujXbfgUJ/G/AD.jscgMa5v2G",
                },
                body: JSON.stringify({
                  title,
                  text,
                  author,
                  picture: `https://robohash.org/${author}.png`,
                }),
              }).then((resp) => console.log(resp));
            }}
          >
            Submit blog
          </button>
        </div>
      </form>
    </div>
  );
}
