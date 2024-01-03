import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#10b981] relative w-full  lg:px-48 md:px-8 sm:px-4 lg:flex-row md:flex-col md:pb-[160px]  flex lg:gap-6">
      <div className=" flex lg:flex-row  sm:flex-col md:py-[60px] sm:py-[70px] justify-center items-center">
        <div className="w-[90%] flex flex-col justify-center items-left sm:items-center md:items-center gap-5">
          <h1 className="lg:text-6xl text-white  tracking-wide lg:leading-[75px] sm:leading-[20px]  md:leading-[40px] sm:text-9xl md:text-4xl  md:text-center font-extrabold font-Poppins">
            The most intuitive app
            <br /> you can get.
          </h1>
          <p className="font-Heading text-2xl text-white font-semibold">
            Secured like we care about our own
          </p>
          <button className="font-Poppins text-2xl  bg-white flex justify-center items-center w-56 rounded-lg">
            <Image
              src="/assets/svg/logo/icon.svg"
              alt="muraajaco"
              height={60}
              width={60}
            />
            <h2 className="text-2xl text-[#10b981] font-Poppins font-bold ">
              <span className="mr-2">Get the App</span>
            </h2>
          </button>
        </div>
      </div>

      <div className="w-[55%] lg:static  sm:relative">
        <Image
          className="absolute lg:right-16  sm:right-1/4 sm:left-1/2 lg:-bottom-32 sm:-bottom-[510px]  "
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
