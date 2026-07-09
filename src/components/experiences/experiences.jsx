import { Building2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "RELIA Consulting",
    duration: "6 mois",
    icon: Building2,
    projects: [
      {
        title: " Compte rendu d'activités",
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
        skills: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Thymeleaf",
          "PostgreSQL",
          "Jira",
        ],
      },
    ],
  },
  {
    company: "Faculté de Médecine Fianarantsoa",
    duration: "3 mois",
    icon: Building2,
    projects: [
      {
        title: " Application de suivi de dossiers",
        skills: [
          "React JS",
          "Express JS",
          "JavaScript",
          "MySQL",
          "VS Code",
        ],
      },
    ],
  },
  {
    company: "SRB Haute Matsiatra",
    duration: "3 mois",
    icon: Building2,
    projects: [
      {
        title: " Application d'enregistrement des correspondances",
        skills: [
          "Vue JS",
          "PHP",
          "MySQL",
          "HTML",
          "CSS",
          "Git",
        ],
      },
    ],
  },
  {
    company: "Projets Scolaires — DevOps",
    icon: GraduationCap,
    projects: [
      {
        title: " Pipeline CI/CD",
        skills: ["GitHub Actions", "Docker", "CI/CD"],
      },
      {
        title: "Projet 9 : Data Warehouse",
        skills: ["Apache Kylin", "ETL", "OLAP", "SQL"],
      },
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

const ExperienceCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
    >
      <Card className="bg-[#0B0B0B] text-white border border-white/10 p-6 transition-all duration-300 hover:border-green-500/40 hover:shadow-[0_15px_40px_rgba(34,197,94,0.15)]">
        <CardHeader className="p-0 mb-4">
          <div className="flex justify-between items-center gap-3">
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className="size-5 text-green-500" />
              </motion.div>

              <CardTitle className="text-white text-base">
                {item.company}
              </CardTitle>
            </div>

            {item.duration && (
              <Badge className="bg-green-500/10 text-green-500 border border-green-500/30">
                {item.duration}
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-0 flex flex-col gap-5">
          {item.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.15,
              }}
              className="flex flex-col gap-2"
            >
              <span className="font-semibold text-white text-sm">
                {project.title}
              </span>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.05,
                    }}
                    whileHover={{
                      scale: 1.08,
                    }}
                  >
                    <Badge className="bg-white/10 text-neutral-300 hover:bg-green-500/20 hover:text-green-400 transition-colors duration-300">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Experiences = () => {
  return (
    <section
      id="projects"
      className="border-b border-white/10 p-6 md:p-12 w-full"
    >
      <div className="flex flex-col gap-8">
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="font-medium text-neutral-400 text-sm">
            Expérience
          </span>

          <h2 className="font-bold text-white text-2xl md:text-3xl">
            Expériences Professionnelles
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {experiences.map((item, index) => (
            <ExperienceCard
              key={index}
              item={item}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;