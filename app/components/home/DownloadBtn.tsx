import { MdDownload } from "react-icons/md";

const DownloadBtn = () => {
  return (
    <button className="bg-[#10b981] p-2 flex justify-center items-center  rounded-full fixed bottom-5 right-5 text-white font-bold text-lg shadow-lg">
      <MdDownload className="text-lg md:text-2xl lg:hidden" />
      <h1 className="hidden lg:flex px-4">Download</h1>
    </button>
  );
};

export default DownloadBtn;
