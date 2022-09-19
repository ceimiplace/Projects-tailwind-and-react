import Link from "./Link";

export default function Headers({ sendDown }) {
  return (
    <div>
      <Link href="/">Accordion</Link>
      <Link href="/search">Search</Link>
      <Link href="/dropdown">Dropdown</Link>
      <Link href="/translate">Translate</Link>
    </div>
  );
}
