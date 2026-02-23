import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchMenuData } from "../lib/sheets";
import { MenuItem } from "../lib/validation";
import { Coffee, Cake, Croissant, EggFried, Search } from "lucide-react";
import { cn } from "../utils/cn";

const CATEGORY_ICONS: Record<string, any> = {
  "Кофе": Coffee,
  "Десерты": Cake,
  "Торты": Cake,
  "Завтраки": EggFried,
  "Выпечка": Croissant,
};

export function Menu() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Все");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchMenuData()
      .then((data) => {
        if (mounted) {
          setItems(data);
          setError(null);
        }
      })
      .catch(() => {
        if (mounted) setError("Не удалось загрузить меню. Пожалуйста, обновите страницу.");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => { mounted = false; };
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(items.map((i) => i.category));
    return ["Все", ...Array.from(cats)];
  }, [items]);

  const filteredItems = useMemo(() => {
    let result = items;
    if (activeCategory !== "Все") {
      result = result.filter((i) => i.category === activeCategory);
    }
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          (i.description && i.description.toLowerCase().includes(q))
      );
    }
    return result;
  }, [items, activeCategory, searchQuery]);

  return (
    <div className="container mx-auto px-4 max-w-6xl min-h-[60vh] pt-28 md:pt-36 pb-16">
      <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
        <h1 className="text-4xl md:text-6xl font-serif text-dark-choco tracking-tight">
          Наше меню
        </h1>
        <p className="text-primary-600 font-light text-base md:text-lg">
          Авторские десерты и спешелти кофе
        </p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center mb-8 border border-red-100">
          {error}
        </div>
      )}

      {/* Search and Categories */}
      {!loading && !error && (
        <div className="max-w-3xl mx-auto mb-12 space-y-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" />
            <input
              type="text"
              placeholder="Поиск по меню..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-primary-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all shadow-sm"
            />
          </div>

          {categories.length > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                    activeCategory === cat
                      ? "bg-dark-choco text-white border-dark-choco shadow-md"
                      : "bg-transparent text-dark-choco border-primary-200 hover:border-primary-400 hover:bg-primary-50"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`skeleton-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass rounded-[2rem] p-4 flex flex-col gap-4"
              >
                <div className="skeleton w-full aspect-[4/3] rounded-[1.5rem]" />
                <div className="px-2 space-y-3">
                  <div className="skeleton h-6 w-3/4 rounded" />
                  <div className="skeleton h-4 w-full rounded" />
                  <div className="skeleton h-4 w-5/6 rounded" />
                  <div className="skeleton h-6 w-1/4 rounded mt-4" />
                </div>
              </motion.div>
            ))
          ) : (
            filteredItems.map((item, i) => {
              const Icon = CATEGORY_ICONS[item.category] || Coffee;
              return (
                <motion.div
                  layout
                  key={`${item.name}-${i}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                  className="glass rounded-[2rem] p-4 flex flex-col group hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-500 bg-white/40"
                >
                  {item.image && (
                    <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 relative">
                      <div className="absolute inset-0 bg-primary-100 flex items-center justify-center -z-10">
                        <Icon className="w-12 h-12 text-primary-300" />
                      </div>
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="px-2 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-serif text-2xl text-dark-choco leading-tight">
                        {item.name}
                      </h3>
                      <span className="font-semibold text-primary-700 whitespace-nowrap bg-primary-50 px-3 py-1 rounded-full text-sm">
                        {item.price} ₽
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-sm text-primary-900/60 leading-relaxed mt-2 flex-grow font-light">
                        {item.description}
                      </p>
                    )}
                    <div className="mt-4 pt-4 border-t border-primary-100/50 flex items-center gap-2 text-xs font-medium text-primary-400 uppercase tracking-wider">
                      <Icon className="w-4 h-4" />
                      {item.category}
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
        {!loading && !error && filteredItems.length === 0 && (
          <div className="col-span-full text-center py-12 text-primary-500">
            Ничего не найдено.
          </div>
        )}
      </div>
    </div>
  );
}
