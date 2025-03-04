'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Github', href: 'https://github.com/agntcy/agntcy-website' },
    { name: 'Resources', href: 'https://agntcy.org/' },
  ];

  return (
    <nav className="bg-[#00142B] shadow-lg py-4 w-screen md:w-full lg:w-full xl:w-full">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 xl:px-0 xl:mx-20">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className=''>
              <Link href="/" legacyBehavior>
                    <Image
                        unoptimized
                        src={"/images/logo.png"}
                        alt="Logo"
                        className="pt-4"
                        height={150}
                        width={150}
                    />
              </Link>
            </div>
            {/* <div className='flex flex-row lg:w-xl md:w-52 sm:w-0 xl:w-96'></div> */}
            <div className='absolute right-28 lg:right-10 md:right-10'>
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} legacyBehavior>
                  <a className="py-5 px-3 text-xl text-[#FBAB2C] hover:text-orange-500">{item.name}</a>
                </Link>
              ))}
              <Link href="mailto:hello@agntcy.org?subject=AGNTCY Membership Inquiry&body=Hi, I’d like to learn more about how my organization can become members of the AGNTCY open source collective." legacyBehavior>
                  <a className="flex-shrink-0 text-xl font-bold text-[#FBAB2C] hover:text-orange-500 border p-3 rounded-3xl">Join us</a>
              </Link>
            </div>
            {/* <div className="hidden md:flex items-center space-x-1">
              <Link href="mailto:hello@agntcy.org" legacyBehavior>
                  <a className="flex-shrink-0 text-xl font-bold text-[#FBAB2C] hover:text-orange-500 border p-3 rounded-3xl">Join us</a>
              </Link>
            </div> */}
            </div>
          </div>
          <div className="md:hidden flex items-center text-white">
            <button onClick={toggleMobileMenu} className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden my-6`}>
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} legacyBehavior>
            <a className="block py-1 px-4 text-sm text-[#FBAB2C] hover:bg-gray-200">{item.name}</a>
          </Link>
        ))}
        <div className='mt-3'>
        <Link href="mailto:hello@agntcy.org?subject=AGNTCY Membership Inquiry&body=Hi, I’d like to learn more about how my organization can become members of the AGNTCY open source collective." legacyBehavior className=''>
            <a className="flex-shrink-0 py-2 px-4 ml-4 text-sm font-bold text-[#FBAB2C] hover:text-orange-500 border rounded-3xl">Join us</a>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
