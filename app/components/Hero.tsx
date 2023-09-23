import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#10b981] w-full px-48 flex gap-4 ">
      <div className=" py-[160px] flex  justify-center items-center">
        <div className="w-[90%] flex flex-col justify-center items-left gap-5">
          <h1 className="text-6xl text-white  tracking-wide leading-[70px] font-extrabold font-Poppins">
            The most intuitive app you can get.
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
              Get the App
            </h2>
          </button>
        </div>
      </div>

      <div className="relative w-[55%]">
        <Image
          className="absolute -bottom-16 "
          src="/assets/images/muraajaco.webp"
          alt="muraajaco"
          height={500}
          width={500}
        />
      </div>
    </section>
  );
};

export default Hero;
