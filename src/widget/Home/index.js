import React from "react";
import ReactDOM from "react-dom";
import Hello from "../../shared/Hello/index.jsx"
import styles from "./home.css";

class Welcome extends React.Component {
  render() {
    return <h1><Hello/> from Home</h1>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));