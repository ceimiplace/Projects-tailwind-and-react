import BlogPreview from "./BlogPreview";
export default function BlogRenderer({ blogsToDisplay, message }) {
  if (blogsToDisplay.length < 1) {
    return;
  }
  let blogsList = blogsToDisplay.map((blog) => {
    return (
      <BlogPreview
        id={blog.id}
        title={blog.title}
        firstName={blog.firstName}
        lastName={blog.lastName}
        picture={blog.picture}
      />
    );
  });
  return (
    <>
      <div className="text-2xl font-medium text-rose-500">{message}</div>
      <div>{blogsList}</div>
    </>
  );
}
