import Image from "next/image";

const Enjoy = () => {
  return (
    <section className="px-48 my-40 flex items-center gap-32">
      <Image
        alt="muraajaco app"
        src="/assets/images/enjoy_new.webp"
        height={500}
        width={500}
      />
      <div className="h-full w-full flex flex-col items-start justify-start">
        <h1 className="font-Poppins text-left text-4xl mb-6 font-bold">
          Enjoy
        </h1>
        <p className="text-left text-md text-gray-500 tracking-wide w-full leading-7">
          Watch your wallet grow. Best of all, it’s hassle-free and fee-free.
          Welcome to the future of real estate investing.
        </p>
      </div>
    </section>
  );
};

export default Enjoy;
