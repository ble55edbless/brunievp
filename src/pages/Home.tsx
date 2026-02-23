import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

export function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center -mt-24 pt-24 pb-16 overflow-hidden bg-primary-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80')] bg-cover bg-center bg-no-repeat opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/40 z-0" />
        
        <div className="container mx-auto px-4 z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white backdrop-blur-sm text-xs md:text-sm font-medium tracking-widest uppercase mb-6 md:mb-8 border border-white/30 shadow-sm">
              Евпатория
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 md:mb-6 leading-tight font-serif tracking-tight drop-shadow-md">
              Искусство <br className="hidden sm:block" />
              <span className="italic text-primary-200 font-light">в каждой чашке</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow px-2">
              Bruni — это место, где современный минимализм встречается с теплотой, а свежеобжаренный кофе с авторскими десертами.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/menu"
                className="group relative inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg overflow-hidden transition-transform hover:scale-105 shadow-xl shadow-black/20"
              >
                <span className="relative z-10">Смотреть меню</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-primary-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="container mx-auto px-4">
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
