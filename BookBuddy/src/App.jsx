import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";


const App = () => {
  //track page and list
  const [page, setPage] = useState("list");
 
//need click handler for when book is clicked sets to "active book details"


//go to list of books
  const goToList = () => {
    setPage("list");
  };

  return (
    <>
      <div id="main-section">
        <div id="navbar">
          <div>Book Buddy Library</div>
        </div>

        {/* <Routes>
        <Route path="" element= {}/>
      </Routes> */}
      </div>




    </>
  );
};
export default App;
