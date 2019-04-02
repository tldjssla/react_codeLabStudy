import React from "react";
import ReactDOM from "react-dom";

import Todo from "./containersgit/Todo"

if(module.hot){
    module.hot.accept();
}
ReactDOM.render(
      <Todo />
    , document.getElementById("app")
);