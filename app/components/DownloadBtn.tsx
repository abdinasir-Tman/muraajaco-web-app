import Image from "next/image";

const DownloadBtn = () => {
  return (
    <button className="bg-[#10b981] py-3 flex justify-center items-center px-4 rounded-3xl fixed bottom-5 right-5 text-white font-bold text-lg">
      <Image
        alt="murajaco-icon-dark"
        width={40}
        height={40}
        src="/assets/svg/logo/icon-dark.svg"
      />
      Download now
    </button>
  );
};

export default DownloadBtn;
