import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, text: "saphiraroger.dev@gmail.com" },
    { icon: MessageCircle, text: "+261 34 78 973 25" },
    { icon: MapPin, text: "Madagascar" },
  ];

  return (
    <section id="contact" className="p-6 md:p-12 w-full">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-3xl" />
        <Card className="relative bg-[#0B0B0B] text-white border-white/10 p-6 md:p-8 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-green-500"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
          />
          <CardContent className="p-0 flex flex-col items-center text-center gap-5">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-white text-2xl md:text-3xl"
            >
              Travaillons ensemble
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-md text-neutral-400 text-sm leading-5"
            >
              Disponible pour de nouvelles opportunités en développement
              fullstack. N'hésitez pas à me contacter.
            </motion.p>
            <div className="text-neutral-400 text-sm flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-2">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="size-5 text-green-500" />
                    </motion.div>
                    <span>{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-green-500 hover:bg-green-400 text-black mt-2 gap-2 relative overflow-hidden">
                <motion.div
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Send className="size-4" />
                </motion.div>
                Envoyer un message
              </Button>
            </motion.div>

            {/* Copyright Saphira Roger */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 pt-4 border-t border-white/10 w-full text-center"
            >
              <p className="text-neutral-500 text-xs">
                &copy; {new Date().getFullYear()} Saphira Roger. Tous droits réservés.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default Contact;