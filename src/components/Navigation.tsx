import { Link, useLocation } from "react-router-dom";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Главная", path: "/" },
    { name: "Меню", path: "/menu" },
    { name: "О нас", path: "/about" },
    { name: "Контакты", path: "/contacts" },
  ];

  const isHome = pathname === "/";
  const isTopOnHome = isHome && !scrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Coffee className={cn("w-8 h-8 transition-transform group-hover:rotate-12", isTopOnHome ? "text-white" : "text-primary-600")} />
          <span className={cn("font-serif text-2xl font-bold tracking-tight transition-colors", isTopOnHome ? "text-white" : "text-dark-choco")}>
            Bruni
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary-400 relative",
                isTopOnHome
                  ? "text-white"
                  : pathname === link.path
                    ? "text-primary-600"
                    : "text-dark-choco/80"
              )}
            >
              {link.name}
              {pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className={cn("absolute left-0 top-full mt-1 h-[2px] w-full rounded-full transition-colors", isTopOnHome ? "bg-white" : "bg-primary-600")}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2 transition-colors", isTopOnHome ? "text-white" : "text-dark-choco")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-milk/95 backdrop-blur-md border-b border-primary-100 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 py-3 rounded-xl text-lg font-medium transition-colors",
                    pathname === link.path
                      ? "bg-primary-100 text-primary-700"
                      : "text-dark-choco hover:bg-primary-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
