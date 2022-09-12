import React from "react";
class SearchBar extends React.Component {
  state = { term: "hi there" };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.submited(e);
  };
  render() {
    return (
      <div className="flex justify-center">
        <form
          onSubmit={this.onSubmit}
          className="w-10/12 p-3 border-black-700  shadow m-4 max-w-5xl"
        >
          <label className="font-bold block mb-4">Image search</label>
          <input
            type="text"
            className="block w-full border-slate-300 border-2 rounded"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
