import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className=" relative w-full px-2 md:px-48 bg-[#10b981] h-screen">
      <div className="flex lg:flex-row md:flex-col flex-col">
        <div className="px-5 flex flex-col items-center justify-center">
          <h1 className="text-5xl leading-tight font-Poppins font-bold text-center pt-10">
            The most intuitive app
            <br /> you can get.
          </h1>
          <p className="font-Heading text-2xl  text-center my-10 text-white font-semibold">
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
              <span className="mr-2 ">Get the App</span>
            </h2>
          </button>
        </div>
      </div>

      <div className="w-[85%] relative bg-red mx-auto bottom-0">
        <Image
          className="absolute top-20"
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
