'use client'
// import React from "react";
// import{UseNavigate} from 'react-router-dom'
// import { useState } from "react";
// import { FaMagnifyingGlass } from "react-icons/fa6";



import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://openlibrary.org/search.json?q=${query}`);
            const data = await response.json();
            setResults(data.docs);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div> 
           
            <div className=" flex justify-center mt-52">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Looking for?..."
                className=" border-4 h-14 p-2 w-1/3 border-slate-950 rounded-lg text-black"
            />
            <button type='submit' className=" flex flex-col text-black" onClick={handleSearch}><FaSearch /></button>
            {/* <ul>
                {results.map((result, index) =>
                    <li key={index}>
                    
                         <div>
                            <strong>Title:</strong> {result.title ? result.title : "N/A"}
                        </div>
                        <div>
                            <strong>Author(s):</strong> {result.author_name ? result.author_name.join(", ") : "N/A"}
                        </div>
                    </li>
                )}
            </ul> */}
            </div>
           

            
            <ul >
                {results.map((result, index) =>
                    <li key={index}>
                    
                         <div>
                            <strong>Title:</strong> {result.title ? result.title : "N/A"}
                        </div>
                        <div>
                            <strong>Author(s):</strong> {result.author_name ? result.author_name.join(", ") : "N/A"}
                        </div>
                    </li>
                )}
            </ul>
            
        </div>
    );
}
