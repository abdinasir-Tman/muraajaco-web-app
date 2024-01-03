import Image from "next/image";

const Learn = () => {
  return (
    <section className="px-10 py-16 flex flex-col-reverse justify-center lg:flex-row-reverse items-center gap-10 lg:px-48 ">
      <Image
        alt="muraajaco app"
        src="/assets/images/learn_new.webp"
        height={800}
        width={800}
        className="lg:w-1/2"
      />
      <div className=" flex flex-col items-start justify-start">
        <h1 className="font-Poppins text-center w-full text-3xl font-bold text-[#1A263D] lg:text-left md:text-4xl md:mb-2">
          Learn
        </h1>
        <p className="text-sm text-center text-gray-500 tracking-wide w-full leading-7 lg:text-left md:text-xl">
          Get all the details you need about a property to make informed
          decisions. Location information, financial data, disclosures,
          documents: it’s all there.
        </p>
      </div>
    </section>
  );
};

export default Learn;
