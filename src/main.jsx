import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Lists from "./components/Lists";
import SignUp from "./components/SignUp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Test" element={<Test />}></Route>
        <Route path="SignUp" element={<SignUp />}></Route>
        <Route path="Lists" element={<Lists />}></Route>

        {/* <Route path="anotherSite" element={<SomeOtherComponent />}></Route> */}
      </Route>
      <Route
        // default for when the link is wrong
        // like this http://localhost:3000/hjklhjklh
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1>Woops, someone stole the website.</h1>
            <p>
              <a href="/">To go back click here!</a>
            </p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
