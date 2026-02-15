import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';
export function ProductsPage() {
  const categories = [
  {
    title: 'Ковані ворота',
    desc: "Величні в'їзні групи, що стануть візитівкою вашого маєтку.",
    image:
    'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2684&auto=format&fit=crop'
  },
  {
    title: 'Сходи та перила',
    desc: 'Вишукані огородження для сходів та балконів будь-якої складності.',
    image:
    'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=2574&auto=format&fit=crop'
  },
  {
    title: 'Меблі та декор',
    desc: "Столи, стільці, ліжка та предмети інтер'єру з металу.",
    image:
    'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=2574&auto=format&fit=crop'
  },
  {
    title: 'Навіси та козирки',
    desc: 'Надійний захист від негоди з елегантним дизайном.',
    image:
    'https://images.unsplash.com/photo-1591533985313-a42167d7454f?q=80&w=2574&auto=format&fit=crop'
  },
  {
    title: 'Броньовані двері',
    desc: 'Максимальна безпека у поєднанні з ексклюзивним оздобленням.',
    image:
    'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=2496&auto=format&fit=crop'
  },
  {
    title: 'Садово-паркова архітектура',
    desc: 'Альтанки, лавки, містки та ліхтарі для вашого саду.',
    image:
    'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2664&auto=format&fit=crop'
  }];

  return (
    <Layout>
      <div className="bg-theme-primary py-24 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
          Наша <span className="text-accent italic">Продукція</span>
        </h1>
        <p className="text-theme-muted max-w-2xl mx-auto text-lg">
          Ми пропонуємо широкий спектр виробів з металу, кожен з яких
          виготовляється індивідуально під замовлення.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 bg-theme-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {categories.map((cat, idx) =>
          <div key={idx} className="group cursor-pointer">
              <div className="relative h-[400px] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-theme-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-theme-primary mb-2 group-hover:text-accent transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-theme-secondary max-w-md">{cat.desc}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-theme-secondary flex items-center justify-center text-theme-secondary group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>);

}