import Image from "next/image";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Learn from "./components/Learn";
import Buy from "./components/Buy";
import Manage from "./components/Manage";
import Enjoy from "./components/Enjoy";
import Portfolio from "./components/Portfolio";
import DownloadBtn from "./components/DownloadBtn";

export default function Home() {
  return <>
  <Hero />
  <Explore/>
  <Learn />
  <Buy />
  <Manage />
  <Enjoy />
  <Portfolio />
  <DownloadBtn />
  </>;
}
