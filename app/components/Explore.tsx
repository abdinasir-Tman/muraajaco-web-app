import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <section className="mx-52 my-40 flex items-center gap-20">
      <Image
        alt="muraajaco app"
        src="/assets/images/explore_new.webp"
        height={600}
        width={600}
      />
      <div className="h-full w-full flex flex-col items-start justify-start">
        <h1 className="font-Poppins text-left text-4xl mb-6 font-bold">
          Explore
        </h1>
        <p className="text-left text-md text-gray-500 tracking-wide w-full leading-7">
          Browse a list of curated, income-generating properties in top markets
          across the U.S. and diversify your portfolio.
        </p>
      </div>
    </section>
  );
};

export default Explore;
