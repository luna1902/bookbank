'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://openlibrary.org/subjects/science.json?limit=30');
        setBooks(response.data.works);
        setError(null);
      } catch (error) {
        setBooks([]);
        setError('Error fetching books. Please try again.');
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book Covers</h1>
      {error && <p>{error}</p>}
      <div className="book-covers">
        {books.map((book, index) => (
          <div key={index} className="book-cover">
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
              alt={`${book.title} cover`}
            />
            <p className=' font-semibold'>{book.title}</p>
            <p>{book.first_publish_year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
