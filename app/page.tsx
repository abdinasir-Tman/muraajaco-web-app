import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Explore from "./components/Explore";
import Learn from "./components/Learn";
import Buy from "./components/Buy";
import Manage from "./components/Manage";
export default function Home() {
  return (
    <div>
      <Hero />
      <Explore />
      <Learn />
      <Buy />
      <Manage />
    </div>
  );
}
