import { ReactNode, useEffect } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTopButton } from "./ScrollToTopButton";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="flex-grow pt-24 pb-16"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
