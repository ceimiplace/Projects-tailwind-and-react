import React from "react";
class SearchBar extends React.Component {
  render() {
    return (
      <div className="flex justify-center">
        <form className="w-10/12 p-3 border-black-700  shadow m-4 max-w-5xl">
          <label className="font-bold block mb-4">Image search</label>
          <input
            type="text"
            className="block w-full border-slate-300 border-2 rounded"
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
