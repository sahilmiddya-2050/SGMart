import React from "react";
import "./App.css";
import Menubar from "./components/Menubar/Menubar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menubar />
    </div>
  );
}

export default App;
