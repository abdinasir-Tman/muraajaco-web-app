import { MdDownload } from "react-icons/md";

const DownloadBtn = () => {
  return (
    <button className="bg-[#10b981] p-2 flex justify-center items-center  rounded-full fixed bottom-5 right-5 text-white font-bold text-lg">
      <MdDownload className='text-lg'/>
    </button>
  );
};

export default DownloadBtn;
