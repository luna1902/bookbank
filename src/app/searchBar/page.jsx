'use client'
import React from "react";
import{UseNavigate} from 'react-router-dom'
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";



export default  function Search () 
{
    const Apisol=() =>
    {
        const [query,setQuery]= useState('');
        const[results,setResults]= useState('');
           
        const handleSearch = async() =>
        {
            try {
                const response = await fetch(`http://openlibrary.org/search.json?q=${query}`);
                const data = await response.json();
                setResults(data.docs);
              } catch (error) {
                console.error('Error fetching search results:', error);
          
        }
    };
    return(
        
       
        
        // <div className="searchform">
           
                
        //         <div className="search-form-content">
        //             <form className=" search-form">

        //                 <div className="flex  justify-center mt-52 ">
        //                     <input type="text"  placeholder="looking for?.."  className=" border-4 h-14 p-2 w-1/3 border-slate-950 rounded-lg text-black"/>
        //                     <button type="submit" className="flex flex-col text-black" onClick={console.log(Apisol)} />
        //                 </div>
        //             </form>
                
        //     </div>
        // </div>


        <div>
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your search query"
            />
            <button type='submit' onClick={handleSearch}>Search</button>
            <ul>
                {results.map((result) =>
                <li key={result.key}>{result.title}</li>
                )}
            </ul>
        </div>
    );}
                }