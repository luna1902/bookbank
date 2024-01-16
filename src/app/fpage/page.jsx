import React from "react";
import Link from "next/link";

export default function Dash() {
  return (
    <div
      className=" h-screen flex  bg-cover bg-fixed  bg-opacity-75"
      style={{ backgroundImage: "url('/dashn.jpg')" }}
    >
     <nav>
     <Link href="/">
        <h1 class=" font-serif font-semibold text-4xl mt-3 text-black">
          Kitabghr
        </h1>
      </Link>

      <div>
         <div className="Head mt-10 ml-48 mr-48 text-wrap text ">
         <h3 className=" text-4xl font-medium">Find your lost self or rather get lost?!</h3>
         <p className=" mt-3">I have watched the sunset, 
I have watched the moon shine, 
Under the velvety eternal sky, I have seen the angels smile! 
        With the turning pages I've watched the secrets unfold in several lines; Travelling through miles while sitting in my room i have often heard the battle cries ! 
      From beaming when the boy lives and crying when Augustus died, I fell in love with a soul everytime I flipped through these pages once in a while! 
     I have witnessed time travel and watched the roses bloom ; I know how the demons look and can tell you how the Satan smiles! Not so glittery but those pages can make you smile ;Black-white and boring you call them all the time but I find solace whenever I turn these magical pages of mine! 
    </p>
         </div>

         <div className="cards justify-around flex">
         <div className=" card bg-slate-400 mt-10  mr-12 rounded-sm h-24 w-60 ">
            kkki
         </div>

         <div className=" card bg-slate-400 mt-10 ml-12 rounded-sm h-24 w-60 ">
            kkki
         </div>
         
         <div className=" card bg-slate-400 mt-10 ml-12 rounded-sm h-24 w-60 ">
            kkki
         </div>

         <div className=" card bg-slate-400 mt-10 ml-12 rounded-sm h-24 w-60 ">
            kkki
         </div>

         

         
         </div>
      </div>
     </nav>
    </div>
  );
}
