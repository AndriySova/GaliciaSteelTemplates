import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
export function ContactPage() {
  return (
    <Layout>
      <div className="bg-theme-primary py-24 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
          Контакти
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 bg-theme-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-theme-primary mb-8">
              Завітайте до нашої майстерні
            </h2>
            <p className="text-theme-secondary mb-12 leading-relaxed">
              Ми завжди раді бачити вас у нашому офісі. Тут ви можете
              ознайомитися зі зразками матеріалів, переглянути каталоги та
              обговорити деталі вашого проекту за чашкою кави.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-theme-muted flex items-center justify-center text-accent shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-theme-primary mb-1">Адреса</h4>
                  <p className="text-theme-secondary">
                    м. Київ, вул. Металістів 12
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-theme-muted flex items-center justify-center text-accent shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-theme-primary mb-1">Телефон</h4>
                  <p className="text-theme-secondary">+38 (097) 123-45-67</p>
                  <p className="text-theme-secondary">+38 (044) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-theme-muted flex items-center justify-center text-accent shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-theme-primary mb-1">Email</h4>
                  <p className="text-theme-secondary">info@metal-master.ua</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-theme-muted flex items-center justify-center text-accent shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-theme-primary mb-1">
                    Графік роботи
                  </h4>
                  <p className="text-theme-secondary">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-theme-secondary">Сб: 10:00 - 15:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-theme-card p-8 md:p-12 shadow-2xl border-t-4 border-accent">
            <h3 className="text-2xl font-serif font-bold text-theme-primary mb-6">
              Записатися на консультацію
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-theme-secondary">

                    Ім'я
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-theme-input border border-theme-light focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-theme-primary"
                    placeholder="Ваше ім'я" />

                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-theme-secondary">

                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-theme-input border border-theme-light focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-theme-primary"
                    placeholder="+38 (___) ___-__-__" />

                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-theme-secondary">

                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-theme-input border border-theme-light focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-theme-primary"
                  placeholder="example@mail.com" />

              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-theme-secondary">

                  Повідомлення
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-theme-input border border-theme-light focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-theme-primary"
                  placeholder="Опишіть ваш проект...">
                </textarea>
              </div>

              <Button type="submit" className="w-full">
                Відправити запит
              </Button>
              <p className="text-xs text-theme-muted text-center mt-4">
                Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>);

}