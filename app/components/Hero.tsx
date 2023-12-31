import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className=" relative w-full px-2 bg-[#10b981] h-screen">
      <div className="flex lg:flex-row md:flex-col flex-col">
        <div className="px-5 flex flex-col items-center justify-center">
          <h1 className="text-5xl text-white leading-tight font-Poppins font-bold text-center pt-10">
            The most intuitive app
            <br /> you can get.
          </h1>
          <p className="font-Heading text-2xl  text-center my-10 text-white font-semibold">
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

      {/* <div className="w-[77%] relative bg-red mx-auto bottom-0">
        <Image
          className="absolute top-16"
          src="/assets/images/muraajaco.webp"
          alt="muraajaco"
          height={450}
          width={450}
        />
        
      </div> */}
    </section>
  );
};

export default Hero;
