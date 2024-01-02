import Image from "next/image";

const Portfolio = () => {
  return (
    <section className="w-full pb-20 h-full flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-center text-3xl font-bold font-Poppins">
          Have your portfolio in control
        </h1>
        <p className="text-gray-500 mt-3 text-center">
          Now available on both iOS and Android
        </p>
        <button className="bg-[#10b981] ml-[25%] w-56 mt-10 py-3 flex justify-center items-center px-2  rounded-xl text-white font-bold text-lg">
          <Image
            alt="murajaco-icon-dark"
            width={40}
            height={40}
            src="/assets/svg/logo/icon-dark.svg"
          />
          <span className="mr-2">Download now</span>
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
