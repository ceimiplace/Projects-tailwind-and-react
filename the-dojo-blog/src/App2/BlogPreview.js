export default function BlogPreview({
  id,
  firstName,
  lastName,
  picture,
  title,
  body,
}) {
  return (
    <div key={id} className="p-4 flex items-center hover:shadow-lg my-6">
      <div>
        <img className="h-20" src={picture} />
        <p className="">
          Written by{" "}
          <span className="text-rose-500 font-bold text-lg">
            {firstName + " " + lastName}
          </span>
        </p>
      </div>
      <p className="font-bold">"{title}..."</p>
    </div>
  );
}
