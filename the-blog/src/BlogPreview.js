import { Link } from "react-router-dom";
export default function BlogPreview({
  id,
  firstName,
  lastName,
  picture,
  title,
  body,
}) {
  return (
    <Link
      to={`/blogs/${id}`}
      key={id}
      className="p-4 flex gap-6 border-2 border-grey-200 items-center hover:shadow-lg my-6"
    >
      <div>
        <img className="h-20" src={picture} />
        <p className="">
          Written by{" "}
          <span className="text-rose-500 font-medium text-lg">
            {firstName + " " + lastName}
          </span>
        </p>
      </div>
      <p className="font-bold">"{title}..."</p>
    </Link>
  );
}
