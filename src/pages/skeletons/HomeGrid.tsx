import React from 'react';
import { Button } from '../../components/ui/Button';
import { ArrowRight, Layers, PenTool, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
export function HomeGrid() {
  return (
    <div className="animate-in fade-in duration-500 bg-theme-muted">
      {/* Grid Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
          <div className="md:col-span-8 bg-theme-primary p-8 md:p-16 flex flex-col justify-center rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Galicia Steel
              </h1>
              <p className="text-xl text-slate-300 max-w-md mb-8">
                Сучасні металоконструкції для вашого бізнесу та дому. Якість,
                перевірена часом.
              </p>
              <Link to="/products">
                <Button className="bg-accent text-white border-none hover:bg-white hover:text-theme-primary">
                  Дивитись каталог
                </Button>
              </Link>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 bg-gradient-to-l from-accent to-transparent"></div>
          </div>

          <div className="md:col-span-4 grid grid-rows-2 gap-4">
            <div className="bg-theme-card p-8 rounded-2xl flex flex-col justify-center hover:shadow-lg transition-shadow border border-theme-light">
              <div className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-theme-primary mb-2">
                Виробництво
              </h3>
              <p className="text-theme-secondary text-sm">
                Власний цех з сучасним обладнанням
              </p>
            </div>
            <div className="bg-theme-secondary p-8 rounded-2xl flex flex-col justify-center text-white relative overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=500&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity"
                alt="Process" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Портфоліо</h3>
                <Link
                  to="/portfolio"
                  className="flex items-center gap-2 text-sm text-accent hover:text-white transition-colors">

                  Переглянути <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-theme-primary mb-12">
          Наші послуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
          {
            icon: Layers,
            title: 'Проектування',
            desc: 'Розробка креслень та 3D моделей будь-якої складності'
          },
          {
            icon: Settings,
            title: 'Виготовлення',
            desc: 'Повний цикл виробництва металоконструкцій'
          },
          {
            icon: PenTool,
            title: 'Монтаж',
            desc: 'Професійне встановлення та обслуговування'
          }].
          map((item, i) =>
          <div
            key={i}
            className="bg-theme-card p-8 rounded-xl border border-theme-light hover:border-accent transition-colors group">

              <div className="w-12 h-12 bg-theme-muted rounded-lg flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-theme-primary mb-3">
                {item.title}
              </h3>
              <p className="text-theme-secondary">{item.desc}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Grid */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-theme-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Маєте ідею?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Ми допоможемо втілити її в життя. Залиште заявку, і ми зв'яжемося
              з вами протягом години.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-theme-primary hover:bg-accent hover:text-white border-none">

                Обговорити проект
              </Button>
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>
      </section>
    </div>);

}