const Footer = () => {
  return (
    <section className="bg-[#25292e] w-full pt-24 px-20 grid grid-cols-5 gap-5">
      <div>
        <h1 className="mb-4 text-white text-2xl font-bold">NEW</h1>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          App
        </p>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          IRA
        </p>
      </div>
      <div>
        <h1 className="mb-4 text-white text-2xl font-bold">SUPPORT</h1>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          FAQ
        </p>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          Step by Step
        </p>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          Instructions
        </p>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          contact
        </p>
      </div>
      <div>
        <h1 className="mb-4 text-white text-2xl font-bold">LEGAL</h1>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          SEC Filings
        </p>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          Terms & Conditions
        </p>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          Privacy Policy
        </p>
      </div>
      <div className="col-span-2"></div>
    </section>
  );
};

export default Footer;
