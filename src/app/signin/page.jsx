import React from "react";
import Link from "next/link";
// import Inputss from './inputs/page'

export default function Signup() {
  return (
    <div
      className=" h-screen flex  bg-cover "
      style={{ backgroundImage: "url('/sign.jpg')" }}
    >
        <Link href="/" >
          <h1 class=" font-serif font-semibold text-4xl mt-3 text-white">Kitabghr</h1>
        </Link>

      <div class="flex bg-white p-8 saturate-200 h-96 border-black border-solid  rounded-lg mt-48 ml-72 justify-center align-middle">
        <div class="heading ">
          <h2 class=" font-semibold text-3xl">Sign in to our platform</h2>
          <p>Login here using your username and password</p>

          <form className=" py-7">
            <label class="pt-7 font-semibold ">Username</label>
            <input
              type="text"              
              class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-white focus:ring-1 focus:ring-amber-300
      disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />

<label class="pt-7 font-semibold ">Password</label>
            <input
              type="password"              
              class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-white focus:ring-1 focus:ring-amber-300
      disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
          </form>

          <Link href="./fpage">
            <button class=" bg-black text-white py-2  px-4 ml-32 rounded hover:shadow-md opacity-100  hover:bg-gray-600 hover:border-solid hover:border-black ">
              Sign-in
            </button>
          </Link>

          <div className=" Rem flex justify-evenly mt-3  text-gray-700">
              <Link href="/" className="hover:text-lg" >Sign-up</Link>
              <Link href="/" className=" hover:text-lg">forgot Password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
