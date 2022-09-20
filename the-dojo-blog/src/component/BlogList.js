export default function Bloglist({ blogList, title, deleteBlogs }) {
  let listBlogs = blogList.map((elem) => (
    <div className="p-2 hover:shadow-md mb-4" key={elem.id}>
      <h1 className="text-xl font-medium text-rose-500">{elem.title}</h1>
      <p>Written by {elem.author}</p>
      <button
        onClick={() => deleteBlogs(elem.id)}
        className="bg-slate-200 p-2 rounded"
      >
        Delete Blog
      </button>
    </div>
  ));
  return (
    <div>
      <div className="text-3xl my-4">{title}</div>
      <div className="blog-container">{listBlogs}</div>
    </div>
  );
}
