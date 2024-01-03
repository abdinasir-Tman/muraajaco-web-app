import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className=" relative w-full px-2 bg-[#10b981] h-screen  lg:px-40 md:h-[40rem]">
      <div className="flex lg:flex-row md:flex-col flex-col">
        <div className="px-5 flex flex-col items-center justify-center lg:pt-32 lg:items-start md:px-20 lg:px-12">
          <h1 className="text-5xl text-white leading-tight lg:leading-[65px] font-Poppins font-bold text-center pt-10 lg:text-left lg:text-5xl lg:w-[27rem]">
            The most intuitive app you can get.
          </h1>
          <p className="font-Heading text-2xl  text-center lg:my-7 my-10 text-white font-semibold">
            Secured like we care about our own
          </p>
          <button className="font-Poppins  bg-white flex justify-evenly items-center w-48 py-2 rounded-lg">
            <Image
              src="/assets/svg/logo/icon.svg"
              alt="muraajaco"
              height={40}
              width={40}
            />
            <h2 className="text-lg text-[#10b981] font-Poppins font-bold">
              Get the App
            </h2>
          </button>
        </div>
      </div>

      <div className="w-[77%]  bg-red mx-auto">
        <Image
          className="lg:absolute relative top-20 lg:top-20 lg:right-12 lg:w-2/5 lg:h-[38rem] md:-right-20 md:w-[28rem]"
          src="/assets/images/muraajaco.webp"
          alt="muraajaco"
          height={450}
          width={450}
        />
      </div>
    </section>
  );
};

export default Hero;
