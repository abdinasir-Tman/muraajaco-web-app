import Image from "next/image";

const Learn = () => {
  return (
    <section className="w-full px-40 lg:flex-row  md:flex-col md:pb-[50px]  py-20  bg-gray-100 my-40 flex items-center gap-20">
      <div className="h-full  flex flex-col items-start justify-start">
        <h1 className="font-Poppins w-full lg:text-left text-4xl mb-6 font-bold md:text-center">
          Learn
        </h1>
        <p className="lg:text-left text-md text-gray-500 tracking-wide w-full leading-7 md:text-center">
          Get all the details you need about a property to make informed
          decisions. Location information, financial data, disclosures,
          documents: it’s all there.
        </p>
      </div>
      <Image
        alt="muraajaco app"
        src="/assets/images/learn_new.webp"
        height={600}
        width={600}
      />
    </section>
  );
};

export default Learn;
