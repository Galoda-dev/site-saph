import { Building2, GraduationCap } from "lucide-react";

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
        title: "Projet 1 : Compte rendu d'activités",
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
        title: "Projet 2 : Facturation électronique",
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
        title: "Projet 3 : Application de suivi de dossiers",
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
        title:
          "Projet 4 : Application d'enregistrement des correspondances",
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
        title: "Projet 5 : Pipeline CI/CD",
        skills: [
          "GitHub Actions",
          "Docker",
          "CI/CD",
        ],
      },
      {
        title: "Projet 9 : Data Warehouse",
        skills: [
          "Apache Kylin",
          "ETL",
          "OLAP",
          "SQL",
        ],
      },
    ],
  },
];

const ExperienceCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <Card className="bg-[#0B0B0B] text-white border-white/10 p-6">
      <CardHeader className="p-0 mb-4">
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <Icon className="size-5 text-green-500" />
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
          <div
            key={index}
            className="flex flex-col gap-2"
          >
            <span className="font-semibold text-white text-sm">
              {project.title}
            </span>
            <div className="flex flex-wrap gap-1">
              {project.skills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-white/10 text-neutral-400"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};



const Experiences = () => {

  return (

    <section
      id="projects"
      className="border-white/10 border-b p-6 md:p-12 w-full"
    >

      <div className="flex flex-col gap-8">


        <div className="flex flex-col gap-2">

          <span className="font-medium text-neutral-400 text-sm">
            Expérience
          </span>

          <h2 className="font-bold text-white text-2xl md:text-3xl">
            Expériences Professionnelles
          </h2>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {experiences.map((item, index) => (

            <ExperienceCard
              key={index}
              item={item}
            />

          ))}

        </div>


      </div>

    </section>

  );
};


export default Experiences;