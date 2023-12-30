import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <main>
      <div class=" flex justify-evenly pt-5 bg-opacity-15 ">
        <Link href="/"><h1 class=" font-serif font-semibold text-7xl">BookBank</h1></Link>
        <div class=" flex items-center pl-96">
          <ul class=" flex  items-center space-x-6  text-white text-xl">
            <li>
              <Link href="/">Subscribe</Link>
            </li>
            <li>
              <Link href="/">Search</Link>
            </li>
            <li>
              <Link href="./signin/">Sign</Link>
            </li>
          </ul>
          <Link href="./fpage">
            <button class=" bg-black text-white hover:bg-slate-500 py-2 px-4 ml-32 rounded hover:shadow-md">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div class="border-b border-solid border-black"></div>
    </main>
  );
}
