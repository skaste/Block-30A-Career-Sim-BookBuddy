import React, { useEffect, useState } from 'react'

const BookList = ({}) => {
const [allBooksList, setAllBooksList]=useState([]);

useEffect(() => {
  const getBooks =async () => {
    try {
      const response = await fetch(
        'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books'
      );
      console.log(response);
      const results = await response.json();
      console.log(results);
      const allBooks = results.books;
      // console.log("all Books:", allBooks);
    } catch (error){
      console.error("Error fetching book list:", error);
    }
  }
  getBooks();
}, []);

  return (

    <>
    <div>BookList</div>
    {allBooksList.map((singleBook)=>(
      <p>{singleBook.name}</p>
    ))}
    </>
  )
}
export default BookList