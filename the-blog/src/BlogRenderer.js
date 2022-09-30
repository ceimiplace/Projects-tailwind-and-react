import BlogPreview from "./BlogPreview";
export default function BlogRenderer({ blogsToDisplay, message }) {
  let blogsList = blogsToDisplay.map((blog) => {
    return (
      <BlogPreview
        id={blog.id}
        title={blog.title}
        name={blog.name}
        picture={blog.picture}
      />
    );
  });
  return (
    <>
      <div className="text-2xl font-medium text-rose-500">{message}</div>
      {blogsToDisplay && <div>{blogsList}</div>}
    </>
  );
}
