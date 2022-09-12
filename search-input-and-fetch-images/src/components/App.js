import React from "react";
import SearchBar from "./SearchBar";
class App extends React.Component {
  whenUserSubmitsForm(e) {
    console.log(e);
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
