import React from 'react';
import { Layout } from '../components/layout/Layout';
export function PortfolioPage() {
  const projects = [
  {
    id: 1,
    title: 'Резиденція в Конча-Заспі',
    category: 'Комплексне рішення',
    description:
    "Повний комплекс кованих виробів: в'їзна група, паркан, балконні огородження та вуличні ліхтарі.",
    imageBefore:
    'https://images.unsplash.com/photo-1600596542815-27b88e35eabd?q=80&w=2675&auto=format&fit=crop',
    imageAfter:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop'
  },
  {
    id: 2,
    title: "Ресторан 'Старий Львів'",
    category: "Інтер'єр",
    description:
    'Гвинтові сходи, декоративні перегородки та меблі в стилі лофт.',
    imageBefore:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop',
    imageAfter:
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop'
  }];

  return (
    <Layout>
      <div className="bg-theme-primary py-24 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
          Наше <span className="text-accent italic">Портфоліо</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 space-y-32 bg-theme-content">
        {projects.map((project) =>
        <div key={project.id} className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row justify-between items-end border-b border-theme-secondary pb-8">
              <div>
                <span className="text-accent uppercase tracking-widest text-sm font-bold mb-2 block">
                  {project.category}
                </span>
                <h2 className="text-4xl font-serif font-bold text-theme-primary">
                  {project.title}
                </h2>
              </div>
              <p className="text-theme-secondary max-w-md mt-4 md:mt-0">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <span className="absolute top-4 left-4 bg-theme-primary/80 text-white px-3 py-1 text-xs uppercase tracking-widest z-10">
                  Деталь
                </span>
                <img
                src={project.imageBefore}
                alt="Detail"
                className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-500" />

              </div>
              <div className="relative group">
                <span className="absolute top-4 left-4 bg-accent text-white px-3 py-1 text-xs uppercase tracking-widest z-10 font-bold">
                  Результат
                </span>
                <img
                src={project.imageAfter}
                alt="Result"
                className="w-full h-[400px] object-cover shadow-xl" />

              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>);

}