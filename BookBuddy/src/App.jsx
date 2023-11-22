import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import React from "react";
import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";
import SignUpForm from "./Components/SignUpForm";

const App = () => {
  //track page and list
  //create signup form
  // const [page, setPage] = useState("list");

  //need click handler for when book is clicked sets to "active book details"

  //go to list of books
  // const goToList = () => {
  //   setPage("list");
  // };

  //link into the router and routes
  return (
    <>
      <div id="main-section">
        <div id="navbar">
          <div>Book Buddy Library</div>
          <Link id="links" to="/books">
            BookList
          </Link>
          <Link id="links" to="/register">
            Register
          </Link>

          {/* <BookDetails/> */}
        </div>

        <Routes>
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/register" element={<SignUpForm />} />
        </Routes>
      </div>

      {/* <SignUpForm /> */}
    </>
  );
};
export default App;
