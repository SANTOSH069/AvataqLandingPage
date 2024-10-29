
import Link from "next/link";
import Navbar from "./components/Navbar";
import { Spotlight } from "./components/ui/Spotlight";


export default function Home() {
  return (
    <div className="w-full h-screen md:items-center md:justify-center bg-black/[0.96] bg-grid-white/[0.02] relative overflow-hidden">
    <Navbar/>
    <Spotlight
    className="hidden md:flex md:left-80  md:-top-80 "fill="white"/>
    <div className="p-4 mx-auto relative z-10 pt-10 md:pt-20 px-2">
      <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
      Create,Grow, and <br/> Scale your Business.
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
    An all in one place for SME's and influencers to boost their business with inbuilt tools and templates.
      </p>
      <Link href={`/`} className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white animate-shimmer">Get Started</Link>
<div className="w-full pt-20">

</div>
    </div>
    </div>
  );
}
