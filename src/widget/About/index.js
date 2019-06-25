import React from "react";
import ReactDOM from "react-dom";
import Hello from "../../shared/Hello/index.jsx";
import styles from "./about.css";

class Welcome extends React.Component {
  render() {
    console.log(NODE_ENV+ ENVIRONMENT_VAR);
    return <div><Hello/> from About!!</div>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));