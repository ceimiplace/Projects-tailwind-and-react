export default function Navbar() {
  return (
    <div className="py-6 border-b-2 border-stone-200 flex justify-between items-center">
      <h1 className="text-3xl font-medium text-rose-500">The Dojo Blog</h1>
      <div className="text-lg text-slate-700">
        <a className="" href="/">
          Home
        </a>
        <a className=" ml-4" href="/create">
          New Blog
        </a>
      </div>
    </div>
  );
}
