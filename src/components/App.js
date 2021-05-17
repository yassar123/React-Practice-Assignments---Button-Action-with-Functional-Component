import React, {Component, useState} from "react";
import "./../styles/App.css";
import Hey from "./Hey"

function App() {
  const [click,setclick]=useState()
  const greetUser =() => setclick("hello")

  return (
    <div id="main">
      <h1>hey</h1>
      <button id="click" onClick={greetUser}>click</button>
      {click === "hello"&&(<Hey/>)}
    </div>
  );
}


export default App;
