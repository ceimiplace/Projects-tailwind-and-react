import { Link } from "react-router-dom";
export default function Bloglist({ blogList, title }) {
  let listBlogs = blogList.map((elem) => (
    <Link to={`/blogs/${elem.id}`}>
      <div className="p-2 flex  items-start hover:shadow-xl mb-4" key={elem.id}>
        <div className="flex flex-col items-start gap-2">
          <img className="h-20" src={elem.picture} />
          <p>
            Written by
            <span className="text-xl ml-2 font-medium text-rose-500">
              {`${elem.firstName} ${elem.lastName}`}
            </span>
          </p>
        </div>

        <p className=" text-xl">"{elem.title}..."</p>
      </div>
    </Link>
  ));
  console.log(blogList);
  return (
    <div>
      {blogList.length > 1 ? (
        <div className="text-3xl my-4">{title}</div>
      ) : null}
      <div className="blog-container">{listBlogs}</div>
    </div>
  );
}
