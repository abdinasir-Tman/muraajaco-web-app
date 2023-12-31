import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ThemeMode";

const Header = () => {
  return (
    <header className="bg-[#10b981]  py-2 px-2 md:px-48 flex justify-between w-full items-center">
      <Link href="/">
        {/* <Image
          className="text-[#1A263D]"
          src="/assets/svg/logo/icon-dark.svg"
          alt="Muraajaco-logo-icon-dark"
          width={80}
          height={80}
        /> */}
      </Link>
      <div className="flex space-x-2">
        <ModeToggle />
        <Link
          href="/about"
          className="text-[#1A263D] active:text-[#10b981] text-2xl"
        >
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
