import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";


const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      text: "saphiraroger.dev@gmail.com",
    },
    {
      icon: Phone,
      text: "+261 34 78 973 25",
    },
    {
      icon: MapPin,
      text: "Fianarantsoa, Madagascar",
    },
  ];


  return (

    <section
      id="contact"
      className="p-6 md:p-12 w-full"
    >

      <Card className="bg-[#0B0B0B] text-white border-white/10 p-6 md:p-8">

        <CardContent className="p-0 flex flex-col items-center text-center gap-5">


          <h2 className="font-bold text-white text-2xl md:text-3xl">
            Travaillons ensemble
          </h2>


          <p className="max-w-md text-neutral-400 text-sm leading-5">
            Disponible pour de nouvelles opportunités en développement
            fullstack. N'hésitez pas à me contacter.
          </p>



          {/* Informations contact */}

          <div className="text-neutral-400 text-sm flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-2">

            {contactInfo.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.text}
                  className="flex items-center gap-2"
                >

                  <Icon className="size-4 text-green-500" />

                  <span>
                    {item.text}
                  </span>

                </div>

              );

            })}

          </div>



          <Button
            className="bg-green-500 hover:bg-green-400 text-black mt-2 gap-2"
          >

            <Send className="size-4" />

            Envoyer un message

          </Button>


        </CardContent>

      </Card>

    </section>

  );
};


export default Contact;