import Loader from "./Loader";

export default function CreateBlog() {
  return (
    <div className="w-3/4 border-2 border-slate-400 mx-auto p-4">
      <h2 className="text-3xl font-medium text-center">Add new log</h2>
      <form className="text-lg font-meidum ">
        <div>
          {" "}
          <label>Blog Title:</label>
          <input
            className="block border-2 border-400-slate w-full"
            type="text"
            required
          />
        </div>
        <div>
          <label>Blog Text:</label>
          <textarea
            className="block border-2 border-400-slate w-full h-40"
            required
          />
        </div>
        <div>
          <label>Blog Author:</label>
          <input
            className="block border-2 border-400-slate w-full"
            type="text"
            required
          />
        </div>
      </form>
    </div>
  );
}
