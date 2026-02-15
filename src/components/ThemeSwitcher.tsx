import React, { useState } from 'react';
import { useTheme } from '../lib/theme';
import { Palette, Check } from 'lucide-react';
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const themes = [
  {
    id: 'deep-navy',
    name: 'Глибокий Navy',
    colors: ['#070d1a', '#1e293b', '#3b82f6'] // Dark navy, lighter navy, blue accent
  },
  {
    id: 'steel-blue',
    name: 'Синій Сталь',
    colors: ['#0c1929', '#f0f4f8', '#1e6bb8'] // Navy header, light blue content, blue accent
  },
  {
    id: 'granite',
    name: 'Сірий Граніт',
    colors: ['#1e293b', '#f1f5f9', '#3b82f6'] // Slate header, grey content, blue accent
  },
  {
    id: 'arctic',
    name: 'Арктичний',
    colors: ['#0f172a', '#ffffff', '#1d4ed8'] // Navy header, white content, deep blue accent
  }] as
  const;
  return (
    <div className="fixed top-24 right-0 z-50 flex items-start">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-theme-primary text-theme-primary p-3 rounded-l-md shadow-lg hover:bg-theme-secondary transition-colors border-l border-t border-b border-accent"
        aria-label="Theme Switcher">

        <Palette className="w-5 h-5 text-accent" />
      </button>

      <div
        className={`bg-theme-primary p-4 shadow-xl rounded-bl-md border-b border-l border-accent transition-all duration-300 origin-right ${isOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 w-0 p-0 overflow-hidden'}`}>

        <div className="flex flex-col gap-3 min-w-[160px]">
          <span className="text-xs uppercase tracking-widest text-theme-muted mb-1">
            Оберіть стиль
          </span>
          {themes.map((t) =>
          <button
            key={t.id}
            onClick={() => setTheme(t.id as any)}
            className={`flex items-center justify-between gap-3 text-sm transition-colors p-2 rounded hover:bg-theme-secondary ${theme === t.id ? 'text-accent font-bold bg-theme-secondary' : 'text-theme-secondary hover:text-theme-primary'}`}>

              <div className="flex items-center gap-3">
                <div className="flex h-4 w-12 rounded overflow-hidden border border-theme-dark">
                  {t.colors.map((c, i) =>
                <div
                  key={i}
                  className="flex-1 h-full"
                  style={{
                    backgroundColor: c
                  }} />

                )}
                </div>
                <span>{t.name}</span>
              </div>
              {theme === t.id && <Check className="w-3 h-3 text-accent" />}
            </button>
          )}
        </div>
      </div>
    </div>);

}