import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import facture from "@/assets/experiences/factureList.jpg";
import activity from "@/assets/experiences/listeprojet.jpg";
import miAina from "@/assets/experiences/ispf.jpg";
const projects = [
  {
  title: "Site web ISPF Mi Aina",
  description:
    "Site web moderne de l'Institut de formation des Paramédicaux Mi Aina permettant de présenter l'établissement, ses formations, ses enseignants et ses actualités, avec une interface d'administration pour gérer les contenus du site.",
  image:
    miAina,
  skills: [
    "React",
    "Vite",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "JWT",
    "Administration",
    "Git",
  ],
},
  {
    title: "Compte rendu d'activités",
    description:
      "Application web permettant de centraliser, gérer et suivre les comptes rendus d'activités de l'entreprise.",
    image:
      activity,
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Thymeleaf",
      "PostgreSQL",
      "UML",
      "Git",
      "Trello",
    ],
  },
  {
    title: "Facturation électronique",
    description:
      "Application web permettant de créer, gérer et suivre les factures électroniques, avec une gestion sécurisée des utilisateurs, des clients et des entreprises.",
    image:
      facture,
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Thymeleaf",
      "PostgreSQL",
      "UML",
      "Git",
      "Jira",
    ],
  },
  {
  title: "Système de gestion de bibliothèque",
  description:
    "Application web permettant de digitaliser et simplifier la gestion d'une bibliothèque, avec la gestion des ouvrages, des adhérents, des emprunts, des retours et du suivi des disponibilités.",
  image:
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
  skills: [
    "React",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "JWT",
    "Tailwind CSS",
    "REST API",
    "Git",
  ],
},
 
 
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      transition={{
        duration: 0.25,
      }}
      className="h-full"
    >
      <Card
        className="
          group
          h-full
          overflow-hidden
          border
          border-white/10
          bg-neutral-900/70
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-green-500/40
        "
      >
        {/* IMAGE */}
        <div className="relative h-52 w-full overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover"
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-neutral-950
              via-neutral-950/20
              to-transparent
            "
          />

          {/* Icon */}
          <div
            className="
              absolute
              bottom-4
              left-4
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/20
              bg-black/50
              backdrop-blur-md
            "
          >
            <Code2 className="h-5 w-5 text-green-400" />
          </div>
        </div>

        {/* HEADER */}
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-white">
            {project.title}
          </CardTitle>

          {/* PETITE DESCRIPTION */}
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">
            {project.description}
          </p>
        </CardHeader>

        {/* TECHNOLOGIES */}
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Badge
                  className="
                    bg-white/10
                    text-neutral-300
                    transition-colors
                    duration-300
                    hover:bg-green-500/20
                    hover:text-green-400
                  "
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Experiences = () => {
  return (
    <section
      id="projects"
      className="w-full py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">

        <motion.div
          className="flex flex-col gap-2"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
         

          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Mes Projets
          </h2>

          <p className="max-w-2xl text-sm text-neutral-400">
            Découvrez quelques projets réalisés au cours de mes expériences
            professionnelles et de ma formation.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;