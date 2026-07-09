import { motion } from "framer-motion";
import Logo from "../../assets/s.svg";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative flex items-center justify-center w-40 h-40">

        <motion.div
          className="absolute w-36 h-36 rounded-full bg-green-500/20 blur-3xl"
          animate={{
            scale: [0.9, 1.2, 0.9],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-32 h-32 rounded-full border-[3px] border-green-500/20 border-t-green-500"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute w-24 h-24 rounded-full border-[2px] border-green-500/20 border-b-green-500"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.img
          src={Logo}
          alt="Logo"
          className="relative z-10 w-16 h-16"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;