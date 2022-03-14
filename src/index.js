import React from "react";
import ReactDOM from "react-dom";
import Pi from "./components/Pi";

class App extends React.Component {
  render() {
    return <Pi />;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
