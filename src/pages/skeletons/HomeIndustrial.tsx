import React from 'react';
import { Button } from '../../components/ui/Button';
import {
  ArrowRight,
  Shield,
  Star,
  PenTool,
  Award,
  Quote,
  ChevronLeft,
  ChevronRight } from
'lucide-react';
import { Link } from 'react-router-dom';
export function HomeIndustrial() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section - Full Screen Video/Image */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2574&auto=format&fit=crop"
            alt="Industrial background"
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center md:text-left w-full">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 border border-accent text-accent text-xs uppercase tracking-[0.3em] mb-6 backdrop-blur-sm bg-theme-primary/30">
              GALICIA STEEL
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-8">
              Сила <span className="accent-gradient-text italic">металу</span> в
              кожній деталі
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
              Промислові масштаби, ювелірна точність. Ми створюємо металеві
              конструкції, що витримують випробування часом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/products">
                <Button size="lg">Каталог продукції</Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-theme-primary">

                  Зв'язатися
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-theme-secondary py-16 border-b border-theme-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-sm uppercase tracking-widest text-theme-muted">
              Років досвіду
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">2000+</div>
            <div className="text-sm uppercase tracking-widest text-theme-muted">
              Проектів
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm uppercase tracking-widest text-theme-muted">
              Майстрів
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm uppercase tracking-widest text-theme-muted">
              Гарантія
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Asymmetric Grid */}
      <section className="py-24 bg-theme-content">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-theme-primary mb-4">
                Наші <span className="text-accent italic">проекти</span>
              </h2>
              <p className="text-theme-secondary max-w-md">
                Від приватних резиденцій до промислових об'єктів.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="hidden md:flex items-center gap-2 text-accent uppercase tracking-widest text-sm font-medium hover:text-theme-primary transition-colors mt-6 md:mt-0">

              Всі роботи <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-7 h-[400px] md:h-full relative group overflow-hidden cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2684&auto=format&fit=crop"
                alt="Project 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              <div className="absolute inset-0 bg-gradient-to-t from-theme-primary/90 via-transparent to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-accent text-xs uppercase tracking-widest mb-2">
                  Екстер'єр
                </span>
                <h3 className="text-white font-serif text-3xl">
                  Ворота "Galicia Premium"
                </h3>
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col gap-6 h-full">
              <div className="flex-1 relative group overflow-hidden cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=2574&auto=format&fit=crop"
                  alt="Project 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-theme-primary/90 via-transparent to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-accent text-xs uppercase tracking-widest mb-2">
                    Інтер'єр
                  </span>
                  <h3 className="text-white font-serif text-2xl">
                    Гвинтові сходи
                  </h3>
                </div>
              </div>
              <div className="flex-1 relative group overflow-hidden cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2669&auto=format&fit=crop"
                  alt="Project 3"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-theme-primary/90 via-transparent to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-accent text-xs uppercase tracking-widest mb-2">
                    Декор
                  </span>
                  <h3 className="text-white font-serif text-2xl">
                    Балконні перила
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}