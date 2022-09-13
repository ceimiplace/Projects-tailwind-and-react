import React from "react";

class App extends React.Component {
  state = { text: "", source: "", target: "" };
  getTranslation() {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "42cea698e9mshf610c2802833d6ap1e9bbejsnf9c364e9f959",
        "X-RapidAPI-Host": "google-translate78.p.rapidapi.com",
      },
      body: `{ text: ${this.state.text}, source: ${this.state.source}, target: ${this.state.target} }`,
    };

    fetch("https://google-translate78.p.rapidapi.com/translate", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }
  render() {
    return <div className="App"></div>;
  }
}
export default App;
