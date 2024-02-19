import Link from "next/link";
import Image from "next/image";
import Search from "../searchBar/page";
import { FaBookBookmark } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import { FaShuttleSpace } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";



export default function Navbar() {
  return (
    <main>
      <div class=" flex align-baselin  pt-5 ">
        <Link href="/" >
          <h1 class=" font-serif font-semibold text-7xl mr-6 ml-2">Kitabghr</h1>
        </Link>
        <div class=" flex items-center ml-64">
          <ul class=" flex  items-center h-8 text-zinc-100 text-xl ">
            <li >
              <Link href="/" >
              <button class=" bg-black text-white hover:bg-slate-500 p-3 rounded-lg hover:shadow-md ml-2 flex">
              Subscribe..<FaBookBookmark />
            </button>
              </Link>
            </li>
            {/* <li className=" flex ">              
              <Search/>              
            </li> */}
            <li >
              <Link href="./signin/" >
              <button class=" bg-black text-white hover:bg-slate-500 p-3 rounded-lg hover:shadow-md ml-2 flex">
              Sign-in..<FaPen />
            </button>
              </Link>
            </li>
            <li >
              <Link href="./signin/" >
              <button class=" bg-black text-white hover:bg-slate-500 p-3 rounded-lg hover:shadow-md ml-2 flex">
             Announcements..<GrAnnounce />
            </button>
              </Link>
            </li>
          </ul>
          <Link href="./fpage">
            <button class=" bg-black text-white hover:bg-slate-500 p-3 rounded-lg hover:shadow-md ml-2 flex ">
              Get Started..<FaShuttleSpace />
            </button>
          </Link>
        </div>
      </div>
      <div class="border-b border-solid border-black w-screen"></div>
    </main>
  );
}
//Subscribe <FaBookBookmark />
//Search <FaMagnifyingGlass />
//Sign-in <FaPen />