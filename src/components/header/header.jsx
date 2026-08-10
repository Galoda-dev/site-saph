import { useEffect, useState } from "react";
import { Home, User, Briefcase, Code, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const menus = [
  { name: "Accueil", href: "#home", icon: Home },
  { name: "À propos", href: "#about", icon: User },
  { name: "Projets", href: "#projects", icon: Briefcase },
  { name: "Compétences", href: "#skills", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
];

  useEffect(() => {
    const sections = menus.map((menu) => document.querySelector(menu.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const current = menus.find(menu => menu.href === `#${entry.target.id}`);
            if (current) setActive(current.name);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach(section => { if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full h-16 bg-[#050505]/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="h-full flex items-center justify-between px-6 md:px-12">
        <div className="hidden md:flex items-center gap-8 text-sm">
          {menus.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="relative flex items-center gap-2 py-5 font-medium text-neutral-400 hover:text-white transition"
              >
                <motion.div animate={{ scale: isActive ? 1.15 : 1 }}>
                  <Icon className={`size-4 ${isActive ? "text-green-500" : ""}`} />
                </motion.div>
                <span className={isActive ? "text-white" : ""}>{item.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="active"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500"
                  />
                )}
              </motion.a>
            );
          })}
        </div>
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </motion.button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#050505] border-b border-white/10 px-6 py-5 overflow-hidden"
          >
            <div className="flex flex-col gap-5">
              {menus.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.name;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className={`flex items-center gap-3 font-medium ${isActive ? "text-white" : "text-neutral-400"}`}
                  >
                    <Icon className={`size-5 ${isActive ? "text-green-500" : ""}`} />
                    {item.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
export default Header;