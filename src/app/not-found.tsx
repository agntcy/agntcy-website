import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AGNTCY.org | 404",
};

export default async function NotFound() {
  return (
    <div className="min-h-[calc(100vh-100px)] mx-auto container md:py-36 w-screen py-12 flex items-center justify-center flex-col text-white gap-5 md:gap-8">
      <div className="flex flex-col md:flex-row items-center justify-center  gap-3">
        <p className="text-xl ">404</p>
        <div className="hidden md:block md:h-[20px] border-r-2 border-white"></div>
        <h2 className="text-xl ">This page could not be found.</h2>
      </div>
      <Link href="/">
        <div className="flex-shrink-0 text-center text-xl font-bold text-[#FBAB2C] hover:text-[#00142B] transition ease-in-out  hover:bg-[#FBAB2C] border-2 border-[#FBAB2C] py-3 md:py-0 lg:py-3 xl:py-3 2xl:py-3 px-5 rounded-full">
          Return Home
        </div>
      </Link>
    </div>
  );
}
