import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ItemsList from "./ItemList";
class App extends React.Component {
  state = { images: [] };
  whenUserSubmitsForm = async (term) => {
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

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="App max-w-5xl flex  flex-col  p-3  mx-auto">
        <SearchBar submited={this.whenUserSubmitsForm} god="is dedad" />
        <ItemsList />
      </div>
    );
  }
}

export default App;
