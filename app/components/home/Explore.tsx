import Image from "next/image";

const Explore = () => {
  return (
    <section className="px-10 py-16 flex flex-col-reverse justify-center items-center gap-10 lg:px-48 lg:flex-row">
      <Image
        alt="muraajaco app"
        src="/assets/images/explore_new.webp"
        height={800}
        width={800}
      />
      <div className=" flex flex-col items-start justify-start">
        <h1 className="font-Poppins text-center w-full text-3xl md:text-4xl md:mb-2 font-bold text-[#1A263D] lg:text-left">
          Explore
        </h1>
        <p className="text-sm text-center text-gray-500 tracking-wide w-full leading-7 lg:text-left md:text-xl">
          Browse a list of curated, income- generating properties in top markets
          across the U.S. and diversify your portfolio.
        </p>
      </div>
    </section>
  );
};

export default Explore;
