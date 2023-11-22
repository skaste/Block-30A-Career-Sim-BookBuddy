import React from 'react'

const BookDetails = ({ selectedBook}) => {
  return (

    <>
    <h2>Book Details</h2>
    <p>{selectedBook.title}</p>
    </>
  )
}
export default BookDetails;