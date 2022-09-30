export default function FilterButton({ filter, handleClick, children }) {
  return (
    <button
      className="w-20 h-20 border-black border-2"
      onClick={() => handleClick(filter)}
    >
      {children}
    </button>
  );
}
