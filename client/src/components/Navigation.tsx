import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLElement>(null);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If href is "#", scroll to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  // Track mouse position for glass effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const nav = navRef.current;
    if (nav) {
      nav.addEventListener("mousemove", handleMouseMove);
      return () => nav.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Scroll behavior - apenas para detectar seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Active section detection
      const sections = ["cortex", "atlas", "neura"];
      const scrollPosition = currentScroll + 150; // Offset for active detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // Reset active section if at top
      if (currentScroll < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Recursos", href: "#", id: "" }, // Scrolls to top
    { label: "Córtex", href: "#cortex", id: "cortex" },
    { label: "Atlas", href: "#atlas", id: "atlas" },
    { label: "Neura", href: "#neura", id: "neura" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
        backdrop-blur-xl bg-gradient-to-r from-white/[0.08] via-white/[0.12] to-white/[0.08]
        border border-white/20
        rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] px-6 py-3 max-w-4xl w-[90%]
        transition-all duration-500 ease-out overflow-hidden
        opacity-100 translate-y-0
        before:absolute before:inset-0 before:rounded-full
        before:bg-gradient-to-r before:from-cyan-500/0 before:via-purple-500/10 before:to-cyan-500/0
        before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
        after:absolute after:inset-0 after:rounded-full
        after:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(147,197,253,0.15),transparent_50%)]
        after:pointer-events-none after:transition-all after:duration-300
      `}
      style={{
        "--mouse-x": `${mousePosition.x}px`,
        "--mouse-y": `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      <div className="flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMobileMenuOpen(false);
          }}
          className="text-xl font-bold text-white tracking-wide hover:text-slate-200 
          transition-all duration-300 relative z-10 cursor-pointer
          hover:scale-105 transform flex-shrink-0"
        >
          Noésis
        </a>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-6 relative z-10 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-sm font-medium relative transition-all duration-300 group px-2 py-1 rounded-lg
                  ${isActive 
                    ? "text-white" 
                    : "text-slate-300 hover:text-white"
                  }
                  ${isActive ? "bg-white/10" : ""}
                `}
              >
                {link.label}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300
                    ${isActive 
                      ? "w-full bg-gradient-to-r from-cyan-400 to-purple-400" 
                      : "w-0 bg-white group-hover:w-full"
                    }
                  `} 
                />
                {isActive && (
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-sm -z-10 animate-pulse" />
                )}
              </a>
            );
          })}
        </div>

        {/* Botões Desktop */}
        <div className="hidden md:flex items-center gap-3 relative z-10 flex-shrink-0">
         <Link to="/login">
           <Button
               variant="outline"
                 className="border border-white/20 text-white hover:bg-white/10 hover:text-white 
                 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20
                 transition-all rounded-full px-5 py-1.5 relative overflow-hidden group">
                  <span className="relative z-10">Login</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/20 to-cyan-500/0 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              className="bg-white text-black font-medium rounded-full px-5 py-1.5 
              hover:bg-slate-100 hover:shadow-lg hover:shadow-white/20
              transition-all relative overflow-hidden group">
                <span className="relative z-10">Criar Conta</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none hover:opacity-80 
          relative z-10 transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`inline-block transition-all duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 bg-gradient-to-br from-white/[0.1] to-white/[0.05] 
          backdrop-blur-xl border border-white/20 rounded-none p-4 flex flex-col gap-4 
          animate-fadeIn shadow-2xl relative z-10 overflow-hidden
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/10 before:via-purple-500/10 before:to-cyan-500/10
          before:opacity-50 before:pointer-events-none">
          <div className="relative z-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block text-slate-300 hover:text-white text-sm font-medium 
                    transition-all py-2 px-3 rounded-lg relative
                    ${isActive ? "text-white bg-white/10" : "hover:bg-white/5"}
                  `}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-r" />
                  )}
                </a>
              );
            })}
            <div className="flex flex-col gap-2 pt-2">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="w-full border border-white/20 text-white hover:bg-white/10 
                  hover:text-white hover:border-cyan-400/50 transition-all rounded-full"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  className="w-full bg-white text-black font-medium rounded-full 
                  hover:bg-slate-100 transition-all"
                >
                  Criar Conta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
