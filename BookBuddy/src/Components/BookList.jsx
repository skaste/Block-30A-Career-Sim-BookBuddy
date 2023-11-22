import React, { useEffect, useState } from "react";

const BookList = ({ handleBookClick }) => {
  //List all the books
  const [allBooksList, setAllBooksList] = useState([]);

  //get all the books from the api
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
        );
        console.log(response);
        const results = await response.json();
        console.log(results);
        // const allBooksList = results.books;
        setAllBooksList(results.books);
        // console.log("all Books:", allBooks);
      } catch (error) {
        console.error("Error fetching book list:", error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <div>BookList</div>
      {allBooksList.map((singleBook) => (
        <div key={singleBook.id} onClick={() => handleBookClick(singleBook)}>
          {singleBook.title}
        </div>
      ))}
    </>
  );
};
export default BookList;
