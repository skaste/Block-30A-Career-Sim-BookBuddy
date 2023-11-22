import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import BookList from "./Components/BookList";

const App = () => {
  return (
    <div id="main-section">
      <div id="navbar">
        <div>App</div>
        <BookList/>
      </div>

      {/* <Routes>
        <Route path="" element= {}/>
      </Routes> */}
    </div>
  );
};
export default App;
