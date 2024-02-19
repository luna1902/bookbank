import Image from 'next/image'
import Link from 'next/link'
import Navbar from './navbar/page'
import Search from './searchBar/page'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function Home() {
  return (
   <nav>
     <div className=" h-screen  bg-cover " style={{backgroundImage: "url('/new.png')" }}>
    <Navbar/>
    <Search/>
    
  </div>
   
</nav>
 
   
  )
}
