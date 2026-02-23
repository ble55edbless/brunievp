import { Link } from "react-router-dom";
import { Coffee, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 space-y-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="w-32 h-32 rounded-full bg-primary-100 flex items-center justify-center shadow-inner relative overflow-hidden"
      >
        <Coffee className="w-16 h-16 text-primary-400 opacity-50 absolute" />
        <span className="font-serif text-6xl text-dark-choco relative z-10">404</span>
      </motion.div>
      <div className="space-y-4 max-w-md">
        <h1 className="text-3xl font-serif text-dark-choco">Ой, страница не найдена</h1>
        <p className="text-primary-800/70 font-light">
          Кажется, вы забрели не туда. Но не расстраивайтесь, мы всегда рады видеть вас на главной!
        </p>
      </div>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-8 py-3 bg-dark-choco text-white rounded-full font-medium hover:bg-primary-900 transition-colors shadow-lg shadow-dark-choco/20"
      >
        <ArrowLeft className="w-5 h-5" />
        Вернуться на главную
      </Link>
    </div>
  );
}
