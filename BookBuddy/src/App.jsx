import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import React from "react";
import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";
import SignUpForm from "./Components/SignUpForm";
import Login from "./Components/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //check if the user is logged in by validating the token stored is session storage
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  //link into the router and routes
  return (
    <>
      <div id="main-section">
        <div id="navbar">
          <div id="title">Book Buddy Library</div>
          <Link id="links" to="/books">
            BookList
          </Link>
          <Link id="links" to="/register">
            Register
          </Link>
          <Link id="links" to="/login">
            Login
          </Link>

          {/* <BookDetails/> */}
        </div>

        <Routes>
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/register" element={<SignUpForm />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      </div>

      {/* <SignUpForm /> */}
    </>
  );
};
export default App;
