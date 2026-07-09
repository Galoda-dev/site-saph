import { useEffect, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

import img1 from "../../assets/img1.JPG";

const Information = () => {

  const roles = [
    "Fullstack",
    "Frontend",
    "Backend",
  ];

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
    <section
      id="home"
      className="
        scroll-mt-24
        border-white/10 border-b 
        flex flex-col-reverse md:flex-row 
        px-6 md:px-12
        pt-24 md:pt-12
        pb-6 md:pb-12
        items-center 
        gap-10 md:gap-12 
        w-full
      "
    >

      {/* Informations */}
      <div className="flex flex-col flex-1 gap-6 text-center md:text-left">

        <div className="flex flex-col gap-2">

          <span className="font-medium text-neutral-400 text-sm">
            Bonjour, je suis
          </span>


          <h1 className="font-bold text-white text-4xl md:text-5xl tracking-tight">
            Saphira Roger
          </h1>


          <p className="
            font-medium 
            text-neutral-400 
            text-lg md:text-xl 
            flex items-center 
            gap-2 
            justify-center 
            md:justify-start
          ">

            Développeur

            <span
              className={`
                text-green-500 
                font-semibold
                inline-block
                transition-all
                duration-500
                ease-out

                ${
                  animate
                    ? "opacity-100 translate-y-0 scale-100 blur-0"
                    : "opacity-0 translate-y-5 scale-95 blur-sm"
                }
              `}
            >
              {roles[role]}
            </span>

          </p>

        </div>


        <p className="
          max-w-xl 
          text-neutral-400 
          text-base 
          leading-6 
          mx-auto 
          md:mx-0
        ">
          Développeur fullstack, passionné par le développement et la
          nouvelle technologie avec une compétence d'adaptation, un esprit
          de travail d'équipe et un esprit de partage.
        </p>



        <div className="flex justify-center md:justify-start">

          <Button className="
            bg-green-500 
            hover:bg-green-400 
            text-black 
            gap-2
          ">
            <Mail className="size-4" />
            Me contacter
          </Button>

        </div>




        <div className="
          text-neutral-400 
          text-sm 
          flex flex-col 
          sm:flex-row 
          justify-center 
          md:justify-start 
          items-center 
          gap-4 
          sm:gap-6 
          pt-2
        ">


          <div className="flex items-center gap-2">

            <MapPin className="size-4 text-green-500" />

            Madagascar

          </div>



          <div className="flex items-center gap-2">

            <Phone className="size-4 text-green-500" />

            +261 34 78 973 25

          </div>


        </div>


      </div>





      {/* Image */}
      <div className="flex-shrink-0">

        <div className="
          size-48 
          md:size-64 
          shadow-[0_20px_60px_rgba(0,0,0,0.45)] 
          rounded-3xl 
          border 
          border-white/10 
          overflow-hidden
        ">

          <img
            src={img1}
            alt="Portrait professionnel"
            className="
              object-cover 
              w-full 
              h-full
            "
          />

        </div>

      </div>


    </section>
  );
};

export default Information;