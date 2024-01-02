import Image from "next/image";

const Manage = () => {
  return (
    <section className="w-full md:flex-col px-40 lg:flex-row py-20  bg-gray-100 my-40 flex items-center gap-20">
      <div className="h-full  flex flex-col items-start justify-start">
        <h1 className="font-Poppins lg:text-left text-4xl mb-6 font-bold w-full md:text-center">
          Manage
        </h1>
        <p className="lg:text-left text-md text-gray-500 tracking-wide w-full leading-7 md:text-center">
          Check your shares and track your dividends all in one place. Leave
          behind the accounting struggles of traditional real estate for good.
        </p>
      </div>
      <Image
        alt="muraajaco app"
        src="/assets/images/manage_new.webp"
        height={500}
        width={500}
      />
    </section>
  );
};

export default Manage;
