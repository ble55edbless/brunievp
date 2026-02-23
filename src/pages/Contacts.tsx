import { MapPin, Phone, Clock, MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function Contacts() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12">
      <div className="text-center mb-16 space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif text-dark-choco tracking-tight"
        >
          Ждём вас <span className="italic text-primary-500">в гости</span>
        </motion.h1>
      </div>

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Contact Info */}
        <div className="space-y-12 order-2 md:order-1 glass p-8 rounded-[2rem] border-primary-200 shadow-xl shadow-primary-900/5">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-dark-choco border-b border-primary-200 pb-4">
              Связь с нами
            </h2>
            <ul className="space-y-8">
              <li className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-dark-choco">Адрес</h3>
                  <a 
                    href="https://yandex.com/maps/org/bruni/16809647060/?ll=33.349343%2C45.198956&mode=search&sctx=ZAAAAAgBEAAaKAoSCQn5oGezrEBAEVJgAUwZmkZAEhIJhJuMKsO4Wz8RZLDiVGthRj8iBgABAgMEBSgKOABAx1lIAWoCdWGdAc3MzD2gAQCoAQC9AdZC09fCAQXUt7vPPoICBUJydW5pigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=33.349343%2C45.198956&sspn=0.049827%2C0.020105&text=Bruni&z=15.27" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-800/80 font-light mt-1 hover:text-primary-600 transition-colors block"
                  >
                    Евпатория, Интернациональная улица, 139А<br/>Смотреть на карте
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-dark-choco">Телефон</h3>
                  <a href="tel:+79786142170" className="text-primary-600 font-medium hover:text-primary-800 transition-colors mt-1 block">
                    +7 (978) 614-21-70
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-dark-choco">Режим работы</h3>
                  <p className="text-primary-800/80 font-light mt-1">
                    Ежедневно<br/>с 08:00 до 21:00
                  </p>
                </div>
              </li>
              <li className="flex flex-col gap-4 items-start pt-4">
                <a
                  href="https://vk.com/bruni_evp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-dark-choco text-white rounded-full font-medium hover:bg-primary-900 transition-colors shadow-lg shadow-dark-choco/20 w-full justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Мы ВКонтакте
                </a>
                <a
                  href="https://www.instagram.com/bruni_evp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-200 text-dark-choco rounded-full font-medium hover:border-primary-400 hover:bg-primary-50 transition-colors shadow-lg shadow-primary-900/5 w-full justify-center"
                >
                  <Instagram className="w-5 h-5" />
                  Мы в Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="order-1 md:order-2 aspect-square md:aspect-auto md:h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary-900/10 border-4 border-white relative group">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=33.349343%2C45.198956&mode=search&oid=16809647060&ol=biz&z=15.27"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Карта Евпатории"
            className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
