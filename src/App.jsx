
import Header from "@/components/header/header";
import Information from "@/components/information/information";
import Formation from "@/components/formation/formation";
import Experiences from "@/components/experiences/experiences";
import Skills from "@/components/competance/competance";
import Contact from "@/components/contact/contact";
export default function App() {
  return (
    <div>
      <div className="bg-[#050505] text-white w-full min-h-screen overflow-x-hidden">
      <Header />
      <Information />
      <Formation />
      <Experiences />
      <Skills />
      <Contact />
      </div>
    </div>
  );
}
