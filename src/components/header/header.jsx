import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Menu,
  X,
} from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const menus = [
    {
      name: "Home",
      href: "#home",
      icon: Home,
    },
    {
      name: "About",
      href: "#about",
      icon: User,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: Briefcase,
    },
    {
      name: "Skills",
      href: "#skills",
      icon: Code,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: Mail,
    },
  ];

  useEffect(() => {
    const sections = menus.map((menu) =>
      document.querySelector(menu.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const current = menus.find(
              (menu) => menu.href === `#${entry.target.id}`
            );

            if (current) {
              setActive(current.name);
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();

  }, []);


  return (
    <nav
      className="
        fixed top-0 left-0 z-50 
        w-full h-16
        bg-[#050505]/90
        backdrop-blur-md
        border-b border-white/10
      "
    >

      <div className="
        h-full 
        flex 
        items-center 
        justify-between
        px-6 md:px-12
      ">
        <div className="hidden md:flex items-center gap-8 text-sm">

          {menus.map((item)=>{

            const Icon = item.icon;
            const isActive = active === item.name;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`
                  flex items-center gap-2
                  py-5
                  font-medium
                  border-b-2
                  transition-all
                  ${
                    isActive
                    ? "text-white border-green-500"
                    : "text-neutral-400 border-transparent hover:text-white"
                  }
                `}
              >

                <Icon
                  className={`
                    size-4
                    ${
                      isActive
                      ? "text-green-500"
                      : ""
                    }
                  `}
                />

                {item.name}

              </a>
            );
          })}

        </div>
        <button
          className="md:hidden text-white"
          onClick={()=>setOpen(!open)}
        >
          {
            open 
            ? <X className="size-6"/>
            : <Menu className="size-6"/>
          }

        </button>
      </div>
      {
        open && (

          <div
            className="
              md:hidden
              absolute
              top-16
              left-0
              w-full
              bg-[#050505]
              border-b border-white/10
              px-6 py-5
            "
          >

            <div className="flex flex-col gap-5">

              {
                menus.map((item)=>{

                  const Icon = item.icon;
                  const isActive = active === item.name;

                  return (

                    <a
                      key={item.name}
                      href={item.href}
                      onClick={()=>setOpen(false)}
                      className={`
                        flex items-center gap-3
                        font-medium
                        ${
                          isActive
                          ? "text-white"
                          : "text-neutral-400 hover:text-white"
                        }
                      `}
                    >

                      <Icon
                        className={`
                          size-5
                          ${
                            isActive
                            ? "text-green-500"
                            : ""
                          }
                        `}
                      />

                      {item.name}

                    </a>

                  );
                })
              }

            </div>

          </div>

        )
      }

    </nav>
  );
};

export default Header;