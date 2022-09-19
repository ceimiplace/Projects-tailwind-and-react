import Link from "./Link";

export default function Headers() {
  return (
    <div className="flex justify-evenly border-2 border-slate-400 py-4 mb-4">
      <Link href="/">Accordion</Link>
      <Link href="/search">Search</Link>
      <Link href="/dropdown">Dropdown</Link>
      <Link href="/translate">Translate</Link>
    </div>
  );
}
