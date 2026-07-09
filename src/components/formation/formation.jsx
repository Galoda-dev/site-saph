import {
  GraduationCap,
  Languages,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Formation = () => {
  const formations = [
    {
      title: "Diplôme de Master en Informatique",
      school:
        "Ecole Nationale d'Informatique — Génie Logiciel et Base de données",
      date: "Novembre 2025",
    },
    {
      title: "Diplôme de Licence en Informatique",
      school:
        "Ecole Nationale d'Informatique — Génie Logiciel et Base de données",
      date: "Décembre 2023",
    },
  ];

  // Variants d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.02,
      borderColor: "rgba(34, 197, 94, 0.5)",
      boxShadow: "0 0 30px rgba(34, 197, 94, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -5, 0],
      scale: 1.2,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="about"
      className="border-white/10 border-b p-6 md:p-12 w-full"
    >
      <motion.div 
        className="flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-col gap-2"
          variants={itemVariants}
        >
          <motion.span 
            className="font-medium text-neutral-400 text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            À propos
          </motion.span>
          <motion.h2 
            className="font-bold text-white text-2xl md:text-3xl tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Formation & Langues
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Card 
              className="bg-[#0B0B0B] text-white border-white/10 p-6 hover:border-green-500/30 transition-all duration-300"
            >
              <CardHeader className="p-0 mb-4">
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover="hover"
                >
                  <motion.div variants={iconVariants}>
                    <GraduationCap className="size-5 text-green-500" />
                  </motion.div>
                  <CardTitle className="text-white text-lg">
                    Formations et diplômes
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className="p-0 flex flex-col gap-4">
                {formations.map((formation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{ 
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                    className={`flex flex-col gap-1 pb-4 ${
                      index !== formations.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <motion.span 
                      className="font-semibold text-white text-sm"
                      whileHover={{ color: "#22c55e" }}
                      transition={{ duration: 0.2 }}
                    >
                      {formation.title}
                    </motion.span>
                    <span className="text-neutral-400 text-sm">
                      {formation.school}
                    </span>
                    <span className="text-neutral-400 text-xs">
                      {formation.date}
                    </span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-6"
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              custom={cardVariants}
            >
              <Card className="bg-[#0B0B0B] text-white border-white/10 p-6 hover:border-green-500/30 transition-all duration-300">
                <CardHeader className="p-0 mb-4">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover="hover"
                  >
                    <motion.div variants={iconVariants}>
                      <Languages className="size-5 text-green-500" />
                    </motion.div>
                    <CardTitle className="text-white text-lg">
                      Langues
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent className="p-0 flex flex-col gap-3">
                  <motion.div 
                    className="flex justify-between items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { delay: 0.2 } }
                    }}
                  >
                    <span className="text-white text-sm">Français</span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge className="bg-white/10 text-neutral-400 hover:bg-green-500/20 hover:text-green-400 transition-all duration-300">
                        Intermédiaire
                      </Badge>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="flex justify-between items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { delay: 0.3 } }
                    }}
                  >
                    <span className="text-white text-sm">Anglais</span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge className="bg-white/10 text-neutral-400 hover:bg-green-500/20 hover:text-green-400 transition-all duration-300">
                        Débutant
                      </Badge>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Card className="bg-[#0B0B0B] text-white border-white/10 p-6 hover:border-green-500/30 transition-all duration-300">
                <CardHeader className="p-0 mb-4">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover="hover"
                  >
                    <motion.div variants={iconVariants}>
                      <Trophy className="size-5 text-green-500" />
                    </motion.div>
                    <CardTitle className="text-white text-lg">
                      Intérêts
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent className="p-0 text-neutral-400 text-sm flex flex-col gap-2">
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ color: "#22c55e", x: 5 }}
                  >
                    Jeu vidéo, basket-ball, pêche
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    whileHover={{ color: "#22c55e", x: 5 }}
                  >
                    Autodidacte, dynamique
                  </motion.span>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Formation;