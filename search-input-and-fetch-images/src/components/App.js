import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  whenUserSubmitsForm(term) {
    console.log(term);
    axios.get("https://api.unsplash.com/search/photos/", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID TYMtIDr5pbkUTBDnWOfebqltBPGuNdvPoUVcZSvCqJA",
      },
    });
  }
  render() {
    return (
      <div className="App">
        <SearchBar submited={this.whenUserSubmitsForm} />
      </div>
    );
  }
}

export default App;
