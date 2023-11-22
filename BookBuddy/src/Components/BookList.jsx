import React, { useEffect } from 'react'

const BookList = ({}) => {

useEffect(() => {
  const getBooks =async () => {
    try {
      const response = await fetch(
        'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books'
      );
      console.log(response);
      const results = await response.json();
      
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