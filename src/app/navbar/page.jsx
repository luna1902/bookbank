import Link from "next/link";
export default function Navbar()
{
    return ( 
        <div class=" flex bg-black">
            <h3 class=" bg-black"> LOGO</h3>
            <div class="">
               <ul class=" ">
                 <li><Link href="/">Subscribe</Link></li>
                 <li><Link href="/">Search</Link></li>
                 <li><Link href="/">Sign</Link></li>
               </ul>
               <button>Get Started</button>
            </div>
        </div>
     );
}
 
