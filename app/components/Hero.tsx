import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#10b981] relative w-full px-2 md:px-48">
      <div className="flex lg:flex-row md:flex-col flex-col">
        <div className="">
          <h1 className="text-4xl font-serif text-center pt-5">
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

      <div className="w-[55%] lg:static md:relative">
        <Image
          className="absolute lg:right-16  md:right-1/4 md:left-1/2 lg:-bottom-32 md:-bottom-[510px] -bottom-24 "
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
