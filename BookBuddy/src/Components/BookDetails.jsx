import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  // console.log(useParams());
  const [bookDetails, setBookDetails] = useState(false);

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        const response = await fetch(
          `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`
        );
        // console.log(response);
        if (!response.ok) {
          throw new Error(`Failed to get book details: ${response.statusText}`);
        }

        const result = await response.json();
        setBookDetails(result.book);
      } catch (error) {
        console.error("Error retreiving book details:", error);
      }
    };

    getBookDetails();
  }, [bookId]);

  return (
    <div>
      <h2>BookDetails</h2>
      {bookDetails ? (
        <>
          <img
            src={bookDetails.coverimage}
            alt={bookDetails.title}
            style={{ width: "100px", height: "100px" }}
          />
          <div>
            <h3>{bookDetails.title}</h3>
            <p>{bookDetails.author}</p>
            <p>{bookDetails.description}</p>
            <p>{bookDetails.available ? "Available" : "Unavailable"}</p>
          </div>
          <Link to="/books">Back to Book List</Link>
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default BookDetails;
