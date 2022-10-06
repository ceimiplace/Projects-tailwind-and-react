import { useState } from "react";

export default function FilterButton({ filter, handleClick, children }) {
  const [active, setActive] = useState(false);
  return (
    <button
      className={`px-4 borderslate-400 border-2 mx-2 rounded-full ${
        active ? "bg-gray-300" : ""
      }`}
      onClick={() => {
        setActive(active ? false : true);
        handleClick(filter);
        console.log(active);
      }}
    >
      {children}
    </button>
  );
}
