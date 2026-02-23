import { Link } from "react-router-dom";
import { Coffee, MapPin, Phone, MessageCircle, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-choco text-milk/90 pt-16 pb-8 border-t border-primary-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-900/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 group">
              <Coffee className="w-8 h-8 text-primary-400 group-hover:rotate-12 transition-transform" />
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                Bruni
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-milk/70 mt-4 max-w-xs">
              Атмосферная кофейня и авторская кондитерская в самом сердце Евпатории. 
              Создаем настроение с каждой чашкой.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4 col-span-1">
            <h4 className="font-serif text-lg text-white mb-6">Навигация</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Главная</Link></li>
              <li><Link to="/menu" className="hover:text-primary-400 transition-colors">Меню</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">О нас</Link></li>
              <li><Link to="/contacts" className="hover:text-primary-400 transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4 col-span-1">
            <h4 className="font-serif text-lg text-white mb-6">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <a 
                  href="https://yandex.com/maps/org/bruni/16809647060/?ll=33.349343%2C45.198956&mode=search&sctx=ZAAAAAgBEAAaKAoSCQn5oGezrEBAEVJgAUwZmkZAEhIJhJuMKsO4Wz8RZLDiVGthRj8iBgABAgMEBSgKOABAx1lIAWoCdWGdAc3MzD2gAQCoAQC9AdZC09fCAQXUt7vPPoICBUJydW5pigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=33.349343%2C45.198956&sspn=0.049827%2C0.020105&text=Bruni&z=15.27" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-400 transition-colors"
                >
                  Евпатория, Интернациональная улица, 139А<br/>Смотреть на карте
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                <a href="tel:+79786142170" className="hover:text-primary-400 transition-colors">+7 (978) 614-21-70</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4 col-span-1 flex flex-col items-start gap-3">
            <h4 className="font-serif text-lg text-white mb-6 w-full">Мы в соцсетях</h4>
            <a
              href="https://vk.com/bruni_evp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-800 hover:border-primary-400 hover:bg-primary-900/30 transition-all text-sm group"
            >
              <MessageCircle className="w-4 h-4 text-primary-400 group-hover:scale-110 transition-transform" />
              ВКонтакте
            </a>
            <a
              href="https://www.instagram.com/bruni_evp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-800 hover:border-primary-400 hover:bg-primary-900/30 transition-all text-sm group"
            >
              <Instagram className="w-4 h-4 text-primary-400 group-hover:scale-110 transition-transform" />
              Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-primary-900/50 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-milk/50">
          <p>© {new Date().getFullYear()} Bruni Coffee & Sweets. Все права защищены.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-milk transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
