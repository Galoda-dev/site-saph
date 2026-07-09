import { useEffect, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import img1 from "../../assets/img1.JPG";

const Information = () => {
  const roles = ["Fullstack", "Frontend", "Backend"];
  const [role, setRole] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setRole((prev) => (prev + 1) % roles.length);
        setAnimate(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="scroll-mt-24 border-white/10 border-b flex flex-col-reverse md:flex-row px-6 md:px-12 pt-24 md:pt-12 pb-6 md:pb-12 items-center gap-10 md:gap-12 w-full">
      <motion.div
        className="flex flex-col flex-1 gap-6 text-center md:text-left"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-2">
          <motion.span
            className="font-medium text-neutral-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Bonjour, je suis
          </motion.span>
          <motion.h1
            className="font-bold text-white text-4xl md:text-5xl tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Saphira Roger
          </motion.h1>
          <motion.p
            className="font-medium text-neutral-400 text-lg md:text-xl flex items-center gap-2 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Développeur
            <motion.span
              key={role}
              className="text-green-500 font-semibold inline-block"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
            >
              {roles[role]}
            </motion.span>
          </motion.p>
        </div>
        <motion.p
          className="max-w-xl text-neutral-400 text-base leading-6 mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Développeur fullstack, passionné par le développement et la
          nouvelle technologie avec une compétence d'adaptation, un esprit
          de travail d'équipe et un esprit de partage.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="bg-green-500 hover:bg-green-400 text-black gap-2 transition-all hover:scale-105 shadow-lg shadow-green-500/20">
            <Mail className="size-4" />
            Me contacter
          </Button>
        </motion.div>
        <motion.div
          className="text-neutral-400 text-sm flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 sm:gap-6 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-green-500" />
            Madagascar
          </div>
          <div className="flex items-center gap-2">
            <Phone className="size-4 text-green-500" />
            +261 34 78 973 25
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.7, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative size-48 md:size-64 rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        >
          <div className="absolute inset-0 bg-green-500/20 blur-3xl" />
          <img src={img1} alt="Portrait professionnel" className="relative object-cover w-full h-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Information;