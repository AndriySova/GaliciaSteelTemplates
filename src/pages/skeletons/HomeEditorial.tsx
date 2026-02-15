import React from 'react';
import { Button } from '../../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function HomeEditorial() {
  return (
    <div className="animate-in fade-in duration-500 bg-theme-content">
      {/* Editorial Header */}
      <section className="pt-32 pb-16 px-4 md:px-12 border-b border-theme-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <h1 className="text-6xl md:text-9xl font-serif font-bold text-theme-primary tracking-tighter">
              GALICIA
              <br />
              STEEL
            </h1>
            <div className="max-w-md mb-4 md:mb-8">
              <p className="text-xl text-theme-secondary font-serif italic">
                "Ми створюємо не просто конструкції, ми створюємо спадщину."
              </p>
            </div>
          </div>

          <div className="w-full h-[60vh] relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=2680&auto=format&fit=crop"
              alt="Hero"
              className="w-full h-full object-cover" />

            <div className="absolute bottom-0 left-0 p-8 bg-theme-content border-t border-r border-theme-light max-w-sm">
              <p className="text-theme-primary font-bold uppercase tracking-widest text-xs mb-2">
                З 2005 року
              </p>
              <p className="text-theme-secondary text-sm">
                Лідер у виробництві металоконструкцій на заході України. Якість,
                підтверджена тисячами клієнтів.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Style Sections */}
      <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 block">
              01 — Продукція
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-theme-primary mb-8">
              Естетика <br /> Холодного Металу
            </h2>
            <p className="text-theme-secondary text-lg leading-relaxed mb-8">
              Наші вироби поєднують в собі грубу силу металу та витонченість
              дизайну. Ми працюємо з найкращими матеріалами, щоб створити
              продукт, який стане окрасою вашого простору.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-theme-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">

              Переглянути каталог <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="h-[600px] bg-theme-muted relative">
            <img
              src="https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=2496&auto=format&fit=crop"
              alt="Product"
              className="w-full h-full object-cover" />

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="h-[600px] bg-theme-muted relative order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
              alt="Process"
              className="w-full h-full object-cover" />

          </div>
          <div className="order-1 md:order-2">
            <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 block">
              02 — Процес
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-theme-primary mb-8">
              Майстерність <br /> та Технології
            </h2>
            <p className="text-theme-secondary text-lg leading-relaxed mb-8">
              Поєднання традиційного ковальства з сучасними технологіями
              лазерної різки та зварювання дозволяє нам досягати неймовірної
              точності та якості.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-theme-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">

              Дізнатися більше <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>);

}