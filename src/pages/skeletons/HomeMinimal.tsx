import React from 'react';
import { Button } from '../../components/ui/Button';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
export function HomeMinimal() {
  return (
    <div className="animate-in fade-in duration-500 bg-theme-content">
      {/* Minimal Hero */}
      <section className="min-h-screen flex flex-col justify-center px-4 md:px-16 pt-20 relative">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-theme-primary leading-tight mb-8">
            Galicia <br />
            <span className="text-accent">Steel.</span>
          </h1>
          <p className="text-xl md:text-2xl text-theme-secondary max-w-2xl mb-12 font-light">
            Мистецтво металу в чистому вигляді. Ми створюємо досконалі форми,
            відкидаючи все зайве.
          </p>
          <div className="flex gap-6">
            <Link
              to="/products"
              className="text-theme-primary border-b border-theme-primary pb-1 hover:text-accent hover:border-accent transition-colors">

              Переглянути каталог
            </Link>
            <Link
              to="/contact"
              className="text-theme-primary border-b border-theme-primary pb-1 hover:text-accent hover:border-accent transition-colors">

              Зв'язатися з нами
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 hidden md:block">
          <ArrowDown className="w-8 h-8 text-theme-muted animate-bounce" />
        </div>
      </section>

      {/* Horizontal Scroll Showcase */}
      <section className="py-24 overflow-hidden border-t border-theme-light">
        <div className="px-4 md:px-16 mb-12 flex justify-between items-end">
          <h2 className="text-3xl font-serif font-bold text-theme-primary">
            Вибрані роботи
          </h2>
          <span className="text-theme-muted">01 / 05</span>
        </div>

        <div className="flex gap-8 overflow-x-auto px-4 md:px-16 pb-12 snap-x">
          {[1, 2, 3, 4].map((i) =>
          <div
            key={i}
            className="min-w-[300px] md:min-w-[500px] h-[400px] md:h-[600px] bg-theme-card relative group snap-center">

              <img
              src={`https://images.unsplash.com/photo-${i === 1 ? '1516455590571-18256e5bb9ff' : i === 2 ? '1505577058444-a3dab90d4253' : i === 3 ? '1533090161767-e6ffed986c88' : '1581091226825-a6a2a5aee158'}?q=80&w=1000&auto=format&fit=crop`}
              alt={`Work ${i}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />

              <div className="absolute bottom-0 left-0 p-8 bg-theme-primary/90 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-serif text-xl">Проект #{i}</h3>
                <p className="text-theme-muted text-sm mt-2">Категорія робіт</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Simple Text Section */}
      <section className="py-32 px-4 md:px-16 bg-theme-secondary text-theme-on-dark">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-serif leading-relaxed">
            "Метал — це не просто матеріал. Це характер. Це міцність. Це
            вічність, втілена у формі."
          </p>
          <div className="mt-12">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-white">

              Про компанію
            </Button>
          </div>
        </div>
      </section>
    </div>);

}