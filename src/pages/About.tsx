import { motion } from "framer-motion";

export function About() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-12 space-y-32">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif text-dark-choco tracking-tight"
        >
          История <br/><span className="italic text-primary-500 font-light">со вкусом</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-primary-900/70 font-light leading-relaxed"
        >
          Мы открыли свои двери в Евпатории, чтобы создать место, где время замедляется, а вкус выходит на первый план.
        </motion.p>
      </section>

      {/* Philosophy */}
      <section className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 order-2 md:order-1">
          <h2 className="text-4xl font-serif text-dark-choco">Наша миссия</h2>
          <p className="text-lg text-primary-800/80 font-light leading-relaxed">
            Bruni — это не просто кофейня. Это лаборатория вкуса, где каждый ингредиент отбирается с любовью. Мы сотрудничаем с лучшими обжарщиками, чтобы каждая чашка кофе раскрывалась уникальным букетом.
          </p>
          <p className="text-lg text-primary-800/80 font-light leading-relaxed">
            Наши десерты — это произведения искусства, созданные из натуральных ингредиентов без использования искусственных добавок. Мы верим, что настоящая роскошь кроется в простоте и качестве.
          </p>
          <blockquote className="border-l-2 border-primary-500 pl-6 italic text-primary-900 font-serif text-xl">
            "Каждый день мы стремимся превзойти ваши ожидания, создавая моменты радости в повседневной суете."
          </blockquote>
        </div>
        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80"
            alt="Процесс приготовления кофе"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply" />
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-dark-choco mb-4">Атмосфера</h2>
          <p className="text-primary-600">Интерьер, созданный для вашего комфорта</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80",
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"
          ].map((src, i) => (
            <div key={i} className="aspect-square rounded-[2rem] overflow-hidden group">
              <img
                src={src}
                alt={`Интерьер ${i + 1}`}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
