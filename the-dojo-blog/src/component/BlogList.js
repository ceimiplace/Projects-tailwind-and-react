export default function Bloglist({ blogList, title }) {
  let listBlogs = blogList.map((elem) => (
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

      <h1 className="">{elem.body}</h1>
    </div>
  ));
  return (
    <div>
      <div className="text-3xl my-4">{title}</div>
      <div className="blog-container">{listBlogs}</div>
    </div>
  );
}
