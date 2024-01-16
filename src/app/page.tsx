import Image from 'next/image'
import Link from 'next/link'
import Navbar from './navbar/page'

export default function Home() {
  return (
    <div className=" h-screen flex  bg-cover " style={{backgroundImage: "url('/new.png')" }}>
    <Navbar/>
   
  </div>
  )
}
