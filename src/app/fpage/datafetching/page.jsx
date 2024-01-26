// components/Subjects.js
'use client'
import React, { useState, useEffect } from 'react';

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://openlibrary.org/subjects.json');
        const data = await response.json();
        setSubjects(data.subjects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Subjects</h1>
      <ul>
        {subjects.map((subject, index) => (
          <li key={authors}>{subject.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Subjects;
