import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ThemeMode";

const Header = () => {
  return (
    <header className="bg-[#10b981]   py-2 px-5 lg:px-48 flex justify-between w-full items-center">
      <Link href="/">
        <Image
          className="text-[#1A263D]"
          src="/assets/svg/logo/icon-light.svg"
          alt="Muraajaco-logo-icon-dark"
          width={70}
          height={70}
        />
      </Link>
      <div className="flex space-x-2">
        <div className="fixed z-30 bottom-5 left-5">
          <ModeToggle />
        </div>

        <Link
          href="/about"
          className="text-[#ffffff] active:text-[#10b981] text-xl"
        >
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
