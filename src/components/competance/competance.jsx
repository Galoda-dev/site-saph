import {
  Terminal,
  Layers,
  Database,
  GitBranch,
  Workflow,
  FileCode,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";


const skills = [
  {
    title: "Programmation",
    icon: Terminal,
    items: [
      "JavaScript",
      "Java",
      "HTML5",
      "CSS3",
      "SQL",
    ],
  },
  {
    title: "Technologies",
    icon: Layers,
    items: [
      "React",
      "VueJs",
      "NodeJs",
      "ExpressJs",
      "Spring Boot",
      "NestJS",
    ],
  },
  {
    title: "Bases de données",
    icon: Database,
    items: [
      "MySQL",
      "PostgreSQL",
      "Oracle",
    ],
  },
  {
    title: "Outils de versioning",
    icon: GitBranch,
    items: [
      "Git",
      "GitHub",
      "GitLab",
    ],
  },
   {
    title: "Gestion de projet",
    icon: Workflow,
    items: [
      "Jira",
      "Trello",
      "Agile SCRUM",
    ],
  },
  {
    title: "Modélisation",
    icon: FileCode,
    items: [
      "UML",
    ],
  },
];


const SkillCard = ({ skill }) => {

  const Icon = skill.icon;

  return (
    <Card className="bg-[#0B0B0B] text-white border-white/10 p-6">

      <CardHeader className="p-0 mb-4">

        <div className="flex items-center gap-2">

          <Icon className="size-5 text-green-500" />

          <CardTitle className="text-white text-base">
            {skill.title}
          </CardTitle>

        </div>

      </CardHeader>


      <CardContent className="p-0 flex flex-wrap gap-2">

        {skill.items.map((item) => (

          <Badge
            key={item}
            className="bg-white/10 text-neutral-400 hover:bg-white/20"
          >
            {item}
          </Badge>

        ))}

      </CardContent>

    </Card>
  );
};



const Skills = () => {

  return (

    <section
      id="skills"
      className="border-white/10 border-b p-6 md:p-12 w-full"
    >

      <div className="flex flex-col gap-8">


        {/* Header */}

        <div className="flex flex-col gap-2">

          <span className="font-medium text-neutral-400 text-sm">
            Expertise
          </span>

          <h2 className="font-bold text-white text-2xl md:text-3xl tracking-tight">
            Compétences en Informatique
          </h2>

        </div>



        {/* Skills Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill) => (

            <SkillCard
              key={skill.title}
              skill={skill}
            />

          ))}

        </div>


      </div>

    </section>

  );
};


export default Skills;