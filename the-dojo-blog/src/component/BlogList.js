import { Link } from "react-router-dom";
export default function Bloglist({ blogList, title }) {
  let listBlogs = blogList.map((elem) => (
    <Link to={`/blogs/${elem.id}`}>
      <div className="p-2 hover:shadow-xl mb-4" key={elem.id}>
        <div className="flex items-center gap-2">
          <img className="" src={elem.medium} />
          <p>
            Written by
            <span className="text-xl ml-2 font-medium text-rose-500">
              {`${elem.first} ${elem.last}`}
            </span>
          </p>
        </div>

        <p className="">{elem.body}</p>
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
