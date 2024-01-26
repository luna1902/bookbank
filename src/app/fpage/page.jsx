"use client"
import React from "react";
import Link from "next/link";
import Signup from "../signin/page";
import { useEffect, useState } from "react";
import { FaHandshake } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

 export default async function Dash() {
   


  return (
    <div
      className="  flex  bg-cover bg-opacity-95 bg-scroll bg-no-repeat "
      style={{ backgroundImage: "url('/dashn.jpg')" }}
    >


      <nav >
        <div className=" flex justify-between">
        <Link href="/">
          <h1 class=" font-serif font-semibold text-4xl mt-3 text-black">
            Kitabghr
          </h1>
        </Link >

        <div className=" bg-slate-300 hover:bg-slate-50 justify-items-center justify-center align-middle border-white rounded-full mr-7 mt-4 ">
        <Link href='/signin' className=" mt-4   ml-7 p-7 ">
         <FaUser />
         </Link>
        </div>
        </div>

        <div className=" flex mr-24 w-fit mb-9">
          <div className="Head mt-10 ml-24 h-fit bg-slate-300 mr-20 rounded-xl p-5  text-wrap text border-4">
            <h3 className=" text-4xl font-medium">
              Find your lost self or rather get lost?!
            </h3>
            <p className=" mt-3 text-slate-600">
              I have watched the sunset, I have watched the moon shine, Under
              the velvety eternal sky, I have seen the angels smile! With the
              turning pages I've watched the secrets unfold in several lines;
              Travelling through miles while sitting in my room i have often
              heard the battle cries ! From beaming when the boy lives and
              crying when Augustus died, I fell in love with a soul everytime I
              flipped through these pages once in a while! I have witnessed time
              travel and watched the roses bloom ; I know how the demons look
              and can tell you how the Satan smiles! Not so glittery but those
              pages can make you smile ;Black-white and boring you call them all
              the time but I find solace whenever I turn these magical pages of
              mine!
            </p>
            
          </div>   
           
          <nav className=" container">

           <div className=" flex">
           <h2 className=" text-5xl mt-14 font-medium ">Librarian's Recommendatins <FaHandshake /></h2>
           
          </div>
          <div className="cards justify-around flex">
            <div className=" card bg-slate-300 mt-10  rounded-sm h-24 w-60 text-justify p-3 border-4">
              
            </div>

            <div className=" card bg-slate-300 mt-10 ml-12 rounded-sm h-24 w-60 border-4 ">
              kkki
            </div>

           
          </div>  

           <div className="cards justify-around flex">
            <div className=" card bg-slate-300 mt-10   rounded-sm h-24 w-60 text-justify p-3 border-4">
              
            </div>

            <div className=" card bg-slate-300 mt-10 ml-12 rounded-sm h-24 w-60 border-4 ">
              kkki
            </div>
           </div>

           
          </nav>
           
          </div>    

          
          
      

        

      </nav>
    </div>
  );
}
