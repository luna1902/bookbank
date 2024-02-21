'use client'

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
            //  <Box/>
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
        
    };
//
    return (
        <div > 
           
            <div className=" flex justify-center mt-52">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find book details...."
                className=" border-4 h-14 p-2 w-1/3 border-slate-950 rounded-lg text-black"
            />
            <button type='submit' className=" flex flex-col text-black " onClick={handleSearch}><FaSearch className=" mt-5 ml-1 size-5 hover:bg-white hover:rounded-lg " /></button>
           
            </div>
           

           <div className=" flex justify-center mr-6 ">
             
           <ul className=" bg-slate-100 h-60 w-96 overflow-auto border-3 border-slate-800 rounded-md mt-3" >
                {results.map((result, index) =>
                    <div key={index}>
                    
                         <div>
                            <strong>Title:</strong> {result.title ? result.title : "N/A"}
                        </div>
                        <div>
                            <strong>Author(s):</strong> {result.author_name ? result.author_name.join(", ") : "N/A"}
                        </div>
                        <div>
                            <strong>Contributor(s):</strong> {result.contributor ? result.contributor : "N/A"}
                        </div>
                        <div>
                            <strong>Ebook Access</strong> {result.ebook_access ?result.ebook_access: "N/A"}
                        </div>
                        
                        <div>
                            <strong>Currently Reading Count</strong> {result.currently_reading_count ? result.currently_reading_count: "N/A"}
                        </div>
                        <div>
                            <strong>Already Read Count</strong> {result.already_read_count? result.already_read_count : "N/A"}
                        </div>
                        <div class="border-b border-solid border-black "></div>
                    </div>
                )}
            </ul>
            
           </div>
        </div>
    );
}
