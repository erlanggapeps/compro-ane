"use client"

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Testimoni from "../components/testimoni";

export default function Home() {
  return (
    <div>
      <div className="flex w-full h-[600px] overflow-hidden bg-slider bg-cover">
        <div className="flex w-full h-full  bg-gradient-to-r from-blue-800/30 to-gray-600/90">
          <div className="flex flex-wrap text-center justify-between items-center text-white p-20">
            <div>
              <Image width={500} height={500} className="w-[175px] h-[50px] mx-auto mb-3" src="/logoUtama.png" alt="logo" />
              <p className="lg:text-lg text-lg pb-4">Do you feel like you dont get enough fresh air in your city? We are here to bring the solution, a new way to enjoy pure mountain air to your city</p>
              <Link href={'/about'} className="rounded-full bg-slate-50 text-sky-700 font-bold py-2 px-6">About Us</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[30px] py-4">
      </div>
      <div className="flex w-full justify-center px-7 py-16" >
        <Image
          src="/logoMain.png"
          alt="logo"
          width={400}
          height={50} />
      </div>
      <div>
        <h1 className="text-[40px] font-light text-center">Udara.co.id Overview</h1>
        <p className="text-[20px] font-extralight text-center lg:px-40 px-5">A company overview typically provides a concise description of a company mission, history, products or services, market position, and key achievements. Here a generic example of how you might structure it</p>
      </div>
      <div className="flex gap-1 w-full justify-around p-16 ">
        <Link href="/about"><div className="underline">History</div></Link>
        <Link href="/Teams"><div className="underline">Team</div></Link>
        <Link href="/about"><div className="underline">Culture</div></Link>
      </div>
      <div className="sticky top-0 h-[50px] bg-green-600 text-white font-semibold text-2xl">
        <p className="m-auto text-center">Our Product</p>
      </div>
      <div className="grid grid-row lg:grid-cols-2 justify-evenly h-[400px] overflow-hidden lg:bg-right-bottom text-center items-center">
        <div>
          <h1 className="font-semibold text-4xl p-5">Bring pure mountain air to your city</h1>
          <p className="p-5">A company overview typically provides a concise description of a company mission, history, products or services, market position, and key achievements. Here a generic example of how you might structure it</p>
          <Link href="/service"><div className="underline">Product</div></Link>
        </div>
        <div>
          <Image
            src="/airBottle.png"
            alt="logo"
            width={600}
            height={300}
            className="object-cover hidden lg:flex" />
        </div>
      </div>
      <div className="flex sticky top-0 h-[50px] z-40 bg-blue-600 text-white font-semibold text-2xl">
        <div className="my-auto">Testimonials</div>
      </div>
      <Testimoni />
      <Footer />
    </div>
  );
}
