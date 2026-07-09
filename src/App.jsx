import { lazy, Suspense } from "react";
import Loader from "@/components/loader/loader";

const Header = lazy(() => import("@/components/header/header"));
const Information = lazy(() => import("@/components/information/information"));
const Formation = lazy(() => import("@/components/formation/formation"));
const Experiences = lazy(() => import("@/components/experiences/experiences"));
const Skills = lazy(() => import("@/components/competance/competance"));
const Contact = lazy(() => import("@/components/contact/contact"));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="bg-[#050505] text-white w-full min-h-screen overflow-hidden">
        <Header />
        <Information />
        <Formation />
        <Experiences />
        <Skills />
        <Contact />
      </div>
    </Suspense>
  );
}