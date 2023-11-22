import React, { useEffect } from 'react'

const BookList = ({}) => {

useEffect(() => {
  const getBooks = () => {
    try {
      const response = fetch(
        'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books'
      );
      console.log(resposne);
    } catch (error){
      console.error("Error fetching book list:", error);
    }
  }
  getBooks();
}, []);

  return (
    <div>BookList</div>
  )
}
export default BookList