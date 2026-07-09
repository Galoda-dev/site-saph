import {
  GraduationCap,
  Languages,
  Trophy,
} from "lucide-react";

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


  return (
    <section
      id="about"
      className="border-white/10 border-b p-6 md:p-12 w-full"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-medium text-neutral-400 text-sm">
            À propos
          </span>
          <h2 className="font-bold text-white text-2xl md:text-3xl tracking-tight">
            Formation & Langues
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-[#0B0B0B] text-white border-white/10 p-6">

            <CardHeader className="p-0 mb-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="size-5 text-green-500" />

                <CardTitle className="text-white text-lg">
                  Formations et diplômes
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
              {formations.map((formation, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-1 pb-4 ${
                    index !== formations.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <span className="font-semibold text-white text-sm">
                    {formation.title}
                  </span>
                  <span className="text-neutral-400 text-sm">
                    {formation.school}
                  </span>
                  <span className="text-neutral-400 text-xs">
                    {formation.date}
                  </span>

                </div>
              ))}
            </CardContent>
          </Card>
          <div className="flex flex-col gap-6">
            <Card className="bg-[#0B0B0B] text-white border-white/10 p-6">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center gap-2">
                  <Languages className="size-5 text-green-500" />
                  <CardTitle className="text-white text-lg">
                    Langues
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-white text-sm">
                    Français
                  </span>
                  <Badge className="bg-white/10 text-neutral-400">
                    Intermédiaire
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white text-sm">
                    Anglais
                  </span>
                  <Badge className="bg-white/10 text-neutral-400">
                    Débutant
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#0B0B0B] text-white border-white/10 p-6">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center gap-2">
                  <Trophy className="size-5 text-green-500" />
                  <CardTitle className="text-white text-lg">
                    Intérêts
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 text-neutral-400 text-sm flex flex-col gap-2">
                <span>
                  Jeu vidéo, basket-ball, pêche
                </span>
                <span>
                  Autodidacte, dynamique
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Formation;