import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async whenUserSubmitsForm(term) {
    console.log(term);
    const response = await axios.get(
      "https://api.unsplash.com/search/photos/",
      {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID TYMtIDr5pbkUTBDnWOfebqltBPGuNdvPoUVcZSvCqJA",
        },
      }
    );
    console.log(response);
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
