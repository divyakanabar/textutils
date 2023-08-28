import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function App() {
  // Checks whether dark mode is enabled or not
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled!", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils now'
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled!", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
              <>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <Outlet />
              </>}>
            <Route index element={
                <div className="container my-3">
                  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
                </div>
              }/>
            <Route exact path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
