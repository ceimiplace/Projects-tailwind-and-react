export default function Navigation() {
  return (
    <nav className="flex p-4 items-center gap-4 flex-col border-2 border-black sm:flex-row sm:justify-between">
      <h1 className="text-3xl font-medium text-rose-500">The Blog Posts</h1>
      <div className=" flex flex-col   text-center  gap-6 font-medium sm:flex-row">
        <a href="/">Home</a>
        <a href="/create">Create Blog</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}
