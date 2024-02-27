
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Signup from "../signin/page";
import { FaHandshake } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Books from "./data/page";

export default async function Dash() {
  return (
    <div
      className="  flex  bg-cover bg-opacity-95 bg-scroll bg-no-repeat "
      style={{ backgroundImage: "url('/crumble.jpg')" }}
    >
      <nav>
        <div className=" flex justify-between">
          <Link href="/">
            <h1 class=" font-serif font-semibold text-4xl mt-3 text-black">
              Kitabghr
            </h1>
          </Link>

          <div className=" bg-slate-300 hover:bg-slate-50 justify-items-center justify-center align-middle rounded-full mr-7 mt-4 ">
            <Link href="/signin" className="">
              <FaUser className=" size-9" />
            </Link>
          </div>
        </div>

        <div className=" flex mr-24 w-fit mb-9">
          <div className="Head ml-48 mt-10  justify-center h-fit  bg-blend-saturation  bg-slate-300 bg-opacity-30 mr-20 rounded-xl p-5  text-wrap text shadow-xl shadow-black">
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

            <br />
            <p className="  text-slate-600">Shambhavi Rai</p>
          </div>
        </div>

        <div className=" container mb-5">
          <Books/>
        </div>
      </nav>
    </div>
  );
}
