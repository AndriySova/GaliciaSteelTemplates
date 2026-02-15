import React from 'react';
import { Layout } from '../components/layout/Layout';
export function AboutPage() {
  return (
    <Layout>
      <div className="bg-theme-primary py-24 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
          Про <span className="text-accent italic">Майстерню</span>
        </h1>
      </div>

      <section className="py-24 max-w-4xl mx-auto px-4 md:px-8 bg-theme-content">
        <div className="prose prose-lg prose-slate mx-auto">
          <p className="text-2xl font-serif leading-relaxed text-theme-primary mb-12 first-letter:text-7xl first-letter:font-bold first-letter:text-accent first-letter:mr-3 first-letter:float-left">
            МЕТАЛ-МАЙСТЕР — це не просто виробництво, це сімейна справа, що
            передається з покоління в покоління. Ми віримо, що метал має душу, і
            наше завдання — розкрити її красу.
          </p>
        </div>
      </section>

      <div
        className="w-full h-[60vh] relative bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
          'url(https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=2680&auto=format&fit=crop)'
        }}>

        <div className="absolute inset-0 bg-theme-primary/50 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white text-center px-4">
            Традиції та Інновації
          </h2>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 bg-theme-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-serif font-bold text-theme-primary mb-6">
              Наша філософія
            </h3>
            <p className="text-theme-secondary mb-6 leading-relaxed">
              Ми відмовилися від масового виробництва на користь
              індивідуальності. Кожен проект для нас — це виклик і можливість
              створити щось неповторне. Ми не використовуємо дешеві сплави або
              готові штамповані елементи з Китаю.
            </p>
            <p className="text-theme-secondary leading-relaxed">
              Кожен завиток, кожен лист, кожна деталь виковується вручну нашими
              майстрами. Це дозволяє нам гарантувати не тільки ексклюзивний
              вигляд, але й найвищу якість, за яку ми відповідаємо своїм ім'ям.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1617720367668-3f562795c477?q=80&w=2574&auto=format&fit=crop"
              alt="Detail 1"
              className="w-full h-64 object-cover rounded-sm" />

            <img
              src="https://images.unsplash.com/photo-1567606404453-6d09c6296b05?q=80&w=2670&auto=format&fit=crop"
              alt="Detail 2"
              className="w-full h-64 object-cover rounded-sm mt-8" />

          </div>
        </div>
      </section>
    </Layout>);

}