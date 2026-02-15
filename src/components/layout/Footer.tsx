import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-theme-primary text-theme-on-dark pt-20 pb-10 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/1709302341galiciasteel.png"
                  alt="Galicia Steel Logo"
                  className="w-full h-full object-contain" />

              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-theme-on-dark">
                GALICIA STEEL
              </span>
            </div>
            <p className="text-theme-muted text-sm leading-relaxed mb-6">
              Створюємо елітні металеві вироби, які поєднують в собі надійність,
              естетику та вікові традиції ковальства.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-theme-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 text-theme-muted">

                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-theme-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 text-theme-muted">

                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-theme-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 text-theme-muted">

                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-accent">Навігація</h4>
            <ul className="space-y-3 text-sm text-theme-muted">
              <li>
                <Link
                  to="/"
                  className="hover:text-theme-on-dark transition-colors flex items-center gap-2">

                  <ArrowRight className="w-3 h-3" /> Головна
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-theme-on-dark transition-colors flex items-center gap-2">

                  <ArrowRight className="w-3 h-3" /> Продукція
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-theme-on-dark transition-colors flex items-center gap-2">

                  <ArrowRight className="w-3 h-3" /> Про нас
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-theme-on-dark transition-colors flex items-center gap-2">

                  <ArrowRight className="w-3 h-3" /> Портфоліо
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-theme-on-dark transition-colors flex items-center gap-2">

                  <ArrowRight className="w-3 h-3" /> Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-accent">Вироби</h4>
            <ul className="space-y-3 text-sm text-theme-muted">
              <li>
                <Link
                  to="/products"
                  className="hover:text-theme-on-dark transition-colors">

                  Ковані ворота
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-theme-on-dark transition-colors">

                  Сходи та перила
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-theme-on-dark transition-colors">

                  Броньовані двері
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-theme-on-dark transition-colors">

                  Меблі лофт
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-theme-on-dark transition-colors">

                  Садовий декор
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-accent">Контакти</h4>
            <ul className="space-y-4 text-sm text-theme-muted">
              <li className="flex flex-col gap-1">
                <span className="text-theme-on-dark font-medium">Адреса:</span>
                <span>м. Київ, вул. Металістів 12</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-theme-on-dark font-medium">Телефон:</span>
                <span>+38 (097) 123-45-67</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-theme-on-dark font-medium">Email:</span>
                <span>info@galicia-steel.ua</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-theme-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-theme-muted">
          <p>&copy; 2024 GALICIA STEEL. Всі права захищено.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-theme-on-dark transition-colors">
              Політика конфіденційності
            </a>
            <a href="#" className="hover:text-theme-on-dark transition-colors">
              Умови використання
            </a>
          </div>
        </div>
      </div>
    </footer>);

}