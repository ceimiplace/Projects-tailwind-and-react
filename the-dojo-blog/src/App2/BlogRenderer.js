import BlogPreview from "./BlogPreview";
export default function BlogRenderer({ blogsToDisplay }) {
  if (blogsToDisplay.length < 1) {
    return <div>Sorry,no blogs to display right now</div>;
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
  return <div>{blogsList}</div>;
}
