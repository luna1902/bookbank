'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

function Cardss(book, index) {
  return (
    <div className="cards flex mb-5 align-top m-5 rounded-2xl  h-auto" key={index}>
   
      <div className="card  mt-10 rounded-xl shadow-2xl  text-center p-5  justify-center aspect-video shadow-black bg-slate-50  bg-opacity-30">
      <div className=' flex justify-center align-middle '>
      <img className='justify-center align-middle ' src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt={`${book.title} cover`} />
      </div>
        
        <div className=' justify-center p-5'>
        <p className='font-semibold '>{book.title}</p>
        <p>{book.first_publish_year}</p>
      </div>

      <br/>
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
      <div className=' rounded-3xl p-5 text-wrap  border-4 columns-3   ml-10 mr-10 mt-4'>
        {error && <p>{error}</p>}
        <div className="book-covers">
          {books.map(Cardss)}
        </div>
      </div>
    </div>
  );
};

export default Books;
