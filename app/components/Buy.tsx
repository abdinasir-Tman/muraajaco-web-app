import Image from "next/image";

const Buy = () => {
  return (
    <section className="px-40 lg:flex-row md:flex-col-reverse my-40 flex items-center gap-32">
      <Image
        alt="muraajaco app"
        src="/assets/images/buy_new.webp"
        height={500}
        width={500}
      />
      <div className="h-full w-full flex flex-col items-start justify-start">
        <h1 className="font-Poppins lg:text-left text-4xl mb-6 font-bold w-full md:text-center">
          Buy
        </h1>
        <p className="lg:text-left text-md text-gray-500 tracking-wide w-full leading-7 md:text-center">
          Choose the number of shares you’d like in a property. Place your
          order. Did you just buy real estate in under five minutes? Yes, yes
          you did.
        </p>
      </div>
    </section>
  );
};

export default Buy;
