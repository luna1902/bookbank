import React from "react";
import Link from "next/link";
// import Inputss from './inputs/page'

export default function Signup() {
  return (
    <div
      className=" h-screen flex  bg-cover "
      style={{ backgroundImage: "url('/sign.jpg')" }}
    >
      <div class="flex bg-white p-8 saturate-200 h-96 border-black border-solid opacity-70 rounded-lg mt-28 ml-96 justify-center align-middle">
        <div class="heading ">
          <h2 class=" font-semibold text-3xl">Sign in to our platform</h2>
          <p>Login here using your username and password</p>

          <div class="inputs ">
            <h3 class="pt-7 font-semibold text-xl">Your Email</h3>
            <p>input component5</p>
            <h3 class="pt-7 font-semibold text-xl">Your Password</h3>
            <p>input password</p>

            <div class="remb flex">
              <h3 class="pt-7 font-semibold text-xl">Remember me</h3>
              {/* <Link href='/'> <h3>Forgot Password?</h3></Link> */}

              
            </div>
            <Link href="./fpage">
            <button class=" bg-black text-white py-2 mt-5 px-4 ml-32 rounded hover:shadow-md opacity-100  hover:bg-gray-600 hover:border-solid hover:border-black ">
              Sign-in
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
