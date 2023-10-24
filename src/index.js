import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function MyComponent(){
    return <div className=""> Hu</div>
}

function Article() {
    return (
      <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
    );
  }

ReactDOM.render(<div>
    <Article/>
</div>, document.getElementById("root"));
