import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2c3035";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
        <TextForm heading='Enter text of your choice, below:' mode={mode} />
      </div>
    </>
  );
}

export default App;
