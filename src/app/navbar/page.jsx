import Link from "next/link";
import Image from "next/image";
import { FaBookBookmark } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import { FaShuttleSpace } from "react-icons/fa6";
export default function Navbar() {
  return (
    <main>
      <div class=" flex justify-evenly pt-5 ">
        <Link href="/" >
          <h1 class=" font-serif font-semibold text-7xl">Kitabghr</h1>
        </Link>
        <div class=" flex items-center pl-96">
          <ul class=" flex  items-center space-x-6 text-zinc-100 text-xl">
            <li className=" hover:bg-black hover:text-white">
              <Link href="/" className=" flex bg-black p-3 rounded-lg" >Subscribe <FaBookBookmark /></Link>
            </li>
            <li>
              <Link href="/" className=" hover:bg-black hover:text-white flex bg-black rounded-lg p-3">Search <FaMagnifyingGlass /></Link>
            </li>
            <li className=" hover:bg-black hover:text-white p-3 bg-black rounded-lg">
              <Link href="./signin/" className=" flex ">Sign-in <FaPen /></Link>
            </li>
          </ul>
          <Link href="./fpage">
            <button class=" bg-black text-white hover:bg-slate-500 p-3 rounded-lg hover:shadow-md ml-5 flex">
              Get Started..<FaShuttleSpace />
            </button>
          </Link>
        </div>
      </div>
      <div class="border-b border-solid border-black"></div>
    </main>
  );
}
