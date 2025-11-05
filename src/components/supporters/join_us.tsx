import Image from "next/image";
import Link from "next/link";

const JoinUs = () => {
  return (
    <div className="mx-auto 2xl:mx-0 container w-full py-2 md:py-2 lg:py-6 lg:mb-2">
      <div className="px-5 md:px-8 lg:px-0">
        <div className="flex items-center justify-center py-12">
          <Image
            unoptimized
            src={"/images/logo_orange.png"}
            alt="Logo"
            className="pt-4"
            height={250}
            width={250}
          />
        </div>
        <div className="text-lg text-center text-white">
          We build and grow together! You can start as a Supporter or Adopter
          and grow your involvement through contributions.
        </div>
        <div className="py-12 flex items-center justify-center ">
          <Link href="https://join.slack.com/t/agntcy/shared_invite/zt-3hb4p7bo0-5H2otGjxGt9OQ1g5jzK_GQ">
            <div className="flex-shrink-0 text-2xl text-[#FBAB2C] hover:text-[#00142B] hover:bg-[#FBAB2C] transition ease-in-out border-2 border-[#FBAB2C] py-3 px-3 rounded-full">
              Become a supporter
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
