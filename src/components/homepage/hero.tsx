'use client';
import Link from 'next/link';
import Image from "next/image";


const Hero = () => {
  return (
    <div className="mx-auto bg-[#00142B] md:py-36 md:px-20 w-screen sm:py-12 sm:px-12 lg:pt-20 lg:pb-5">
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-36 w-full py-1'>
            <div className="col-span-1 sm:pt-0 sm:pb-12 px-4 ">
                <div className=''>
                    <Image
                        unoptimized
                        src={"/images/logo_big.png"}
                        alt="Logo"
                        className="pt-4"
                        height={450}
                        width={450}
                    />
                </div>
                <div className='py-12'>
                    <Link href="mailto:hello@agntcy.org?subject=AGNTCY Membership Inquiry&body=Hi, I’d like to learn more about how my organization can become members of the AGNTCY open source collective." legacyBehavior>
                        <a className="flex-shrink-0 text-2xl font-bold text-[#FBAB2C] hover:text-orange-500 border p-3 rounded-3xl">Join us</a>
                    </Link>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2 px-4 relative">
                <div className='text-[#FBAB2C] text-5xl'>An open source collective for inter-agent collaboration.</div>
                <div className='text-white py-10 text-xl'>The AGNTCY is where we are building the Internet of Agents to be accessible for all: A diverse, collaborative space to innovate, develop, and maintain software components and services for agentic workflows and multi-agent applications.</div>
                <div className='text-[#FBAB2C] pb-6 underline'><a href='https://outshift.cisco.com/blog/building-the-internet-of-agents-introducing-the-AGNTCY' target='_blank'>Learn more about AGNTCY and what we’re launching</a></div>
                <div className='text-white text-[16px] pb-6 pt-4'>GET INVOLVED</div>
                <div className='grid grid-cols-1 content-between lg:grid-cols-3 gap-3'>
                <Image
                        unoptimized
                        src={"/images/outshift_logo.png"}
                        alt="Logo"
                        className=""
                        height={150}
                        width={150}
                    />
                    <Image
                        unoptimized
                        src={"/images/Langchain_updated.png"}
                        alt="Logo"
                        className="pt-4"
                        height={150}
                        width={150}
                    />
                    <Image
                        unoptimized
                        src={"/images/Galileo.png"}
                        alt="Logo"
                        className="pt-4"
                        height={150}
                        width={150}
                    />
                </div>
            </div>
            <div className='hidden lg:block -mt-1'>
            <Image
                unoptimized
                src={"/images/hero_border.png"}
                alt="Logo"
                // className="right-0 lg:bottom-0 xl:bottom-0 pr-0 absolute"
                className="absolute right-0"
                height={12}
                width={800}
            />
            </div>
        </div>
    </div>
  );
};

export default Hero;
