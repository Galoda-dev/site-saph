import { Terminal, Layers, Database, GitBranch, Workflow, FileCode } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills = [
  { title: "Programmation", icon: Terminal, items: ["JavaScript", "Java", "HTML5", "CSS3", "SQL"] },
  { title: "Technologies", icon: Layers, items: ["React", "VueJs", "NodeJs", "ExpressJs", "Spring Boot", "NestJS"] },
  { title: "Bases de données", icon: Database, items: ["MySQL", "PostgreSQL", "Oracle"] },
  { title: "Outils de versioning", icon: GitBranch, items: ["Git", "GitHub", "GitLab"] },
  { title: "Gestion de projet", icon: Workflow, items: ["Jira", "Trello", "Agile SCRUM"] },
  { title: "Modélisation", icon: FileCode, items: ["UML"] },
];

const cardAnimation = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      variants={cardAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-green-500/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl" />
      <Card className="relative bg-[#0B0B0B] text-white border-white/10 p-6 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-green-500"
          initial={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.4 }}
        />
        <CardHeader className="p-0 mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="size-6 text-green-500" />
            </motion.div>
            <CardTitle className="text-white text-base">{skill.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex flex-wrap gap-2">
          {skill.items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Badge className="bg-white/10 text-neutral-400 hover:bg-green-500/20 hover:text-green-400 transition-all cursor-default">
                {item}
              </Badge>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="border-white/10 border-b p-6 md:p-12 w-full">
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2"
        >
          <span className="font-medium text-neutral-400 text-sm">Expertise</span>
          <h2 className="font-bold text-white text-2xl md:text-3xl tracking-tight">
            Compétences en Informatique
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;