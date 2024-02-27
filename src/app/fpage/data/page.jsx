'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

function Cardss(book, index) {
  return (
    <div className="cards justify-around  grid-cols-2flex" key={index}>
      <div className=' '>
      <div className="card  mt-10 rounded-sm h-auto w-auto text-center p-5 border-4 justify-center aspect-video">
      <div className=' flex justify-center align-middle '>
      <img className='justify-center align-middle ' src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt={`${book.title} cover`} />
      </div>
        
        <div className=' justify-center p-5 '>
        <p className='font-semibold '>{book.title}</p>
        <p>{book.first_publish_year}</p>
      </div>
        </div>
      </div>

      
    </div>
  );
}

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
      <div className=' ml-64 mr-60 rounded-xl p-5 text-wrap text border-4 flex-row'>
        {error && <p>{error}</p>}
        <div className="book-covers">
          {books.map(Cardss)}
        </div>
      </div>
    </div>
  );
};

export default Books;
