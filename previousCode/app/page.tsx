import Header from "@/app/components/global/Header";
import Hero from "@/app/components/home/Hero";
import Explore from "./components/Explore";
import Learn from "./components/Learn";
import Buy from "./components/Buy";
import Manage from "./components/Manage";
import Enjoy from "./components/Enjoy";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Hero />
      <Explore />
      <Learn />
      <Buy />
      <Manage />
      <Enjoy />
      <Portfolio />
      <Footer />
    </div>
  );
}
