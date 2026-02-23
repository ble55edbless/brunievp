import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

export function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-dark-choco">
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80" 
          alt="Bruni Coffee" 
          className="absolute inset-0 w-full h-full object-cover opacity-85"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-0 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl flex flex-col items-center justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white backdrop-blur-md text-xs md:text-sm font-medium tracking-widest uppercase mb-6 md:mb-8 border border-white/20 shadow-sm">
              Евпатория
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] font-serif tracking-tight drop-shadow-xl">
              Искусство <br className="hidden sm:block" />
              <span className="italic text-primary-200 font-light">в каждой чашке</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md px-2">
              Bruni — это место, где современный минимализм встречается с теплотой, а свежеобжаренный кофе с авторскими десертами.
            </p>
            <Link
              to="/menu"
              className="group relative inline-flex items-center gap-3 bg-white text-dark-choco px-8 py-4 md:px-10 md:py-5 rounded-full font-medium text-lg overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-black/40"
            >
              <span className="relative z-10 transition-colors group-hover:text-white">Смотреть меню</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-all group-hover:translate-x-1 group-hover:text-white" />
              <div className="absolute inset-0 bg-primary-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="container mx-auto px-4 mt-8 md:mt-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] md:rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10 group">
            <img
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80"
              alt="Интерьер Bruni"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none" />
          </div>
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif text-dark-choco leading-tight">
              Эстетика <br/>и вкус <br/><span className="italic text-primary-500">в гармонии</span>
            </h2>
            <p className="text-base md:text-lg text-primary-900/70 font-light leading-relaxed">
              Мы создали Bruni как оазис спокойствия в шумном городе. Интерьер в стиле soft luxury, много естественного света, аромат свежей выпечки и кофе спешелти обжарки.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {[
                { icon: Coffee, text: "Зерно свежей обжарки 100% Арабика" },
                { icon: Heart, text: "Десерты ручной работы каждый день" },
                { icon: Star, text: "Уютная атмосфера европейского курорта" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-dark-choco font-medium">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Menu Preview */}
      <section className="bg-primary-50 py-16 md:py-24 rounded-[2rem] md:rounded-[3rem] mx-2 md:mx-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary-200/50 blur-[80px] md:blur-[100px] rounded-full pointer-events-none mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-dark-choco mb-10 md:mb-16">Наши хиты</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { name: "Капучино", price: "250 ₽", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80" },
              { name: "Тарталетка", price: "350 ₽", img: "https://images.unsplash.com/photo-1514056052883-d017fddd0426?w=500&q=80" },
              { name: "Сырники", price: "400 ₽", img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500&q=80" }
            ].map((item, i) => (
              <div key={i} className="glass p-4 rounded-3xl text-left group hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                  <img src={item.img} alt={item.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="px-2">
                  <h3 className="font-serif text-2xl text-dark-choco mb-2">{item.name}</h3>
                  <p className="text-primary-600 font-medium text-lg">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/menu" className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-dark-choco transition-colors">
              Перейти к полному меню <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
