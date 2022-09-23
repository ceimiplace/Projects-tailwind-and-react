export default function Navigation() {
  return (
    <nav className="flex p-4 text-center gap-4 flex-col border-b-slate-400 border-b-2 sm:flex-row sm:justify-between">
      <h1 className="text-3xl font-medium text-rose-500">The Blog Posts</h1>
      <div className=" flex flex-col  gap-6 font-medium sm:flex-row">
        <a className="border-b-slate-400 border-b-2 sm:border-none" href="/">
          Home
        </a>
        <a
          className="border-b-slate-400 border-b-2  sm:border-none "
          href="/create"
        >
          Create Blog
        </a>
        <a className="" href="/about">
          About
        </a>
      </div>
    </nav>
  );
}
