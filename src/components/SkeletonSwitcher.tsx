import React, { useState } from 'react';
import { useSkeleton, SkeletonType } from '../lib/skeleton';
import { Layout, Check, Factory, Monitor, Grid, Newspaper } from 'lucide-react';
export function SkeletonSwitcher() {
  const { skeleton, setSkeleton } = useSkeleton();
  const [isOpen, setIsOpen] = useState(false);
  const skeletons: {
    id: SkeletonType;
    name: string;
    icon: React.ElementType;
  }[] = [
  {
    id: 'industrial',
    name: 'Індустріальний',
    icon: Factory
  },
  {
    id: 'minimal',
    name: 'Мінімалізм',
    icon: Monitor
  },
  {
    id: 'grid',
    name: 'Сітка',
    icon: Grid
  },
  {
    id: 'editorial',
    name: 'Журнальний',
    icon: Newspaper
  }];

  return (
    <div className="fixed top-24 left-0 z-50 flex items-start">
      <div
        className={`bg-theme-primary p-4 shadow-xl rounded-br-md border-b border-r border-accent transition-all duration-300 origin-left ${isOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 w-0 p-0 overflow-hidden'}`}>

        <div className="flex flex-col gap-3 min-w-[180px]">
          <span className="text-xs uppercase tracking-widest text-theme-muted mb-1">
            Оберіть макет
          </span>
          {skeletons.map((s) =>
          <button
            key={s.id}
            onClick={() => setSkeleton(s.id)}
            className={`flex items-center justify-between gap-3 text-sm transition-colors p-2 rounded hover:bg-theme-secondary ${skeleton === s.id ? 'text-accent font-bold bg-theme-secondary' : 'text-theme-secondary hover:text-theme-primary'}`}>

              <div className="flex items-center gap-3">
                <s.icon className="w-4 h-4" />
                <span>{s.name}</span>
              </div>
              {skeleton === s.id && <Check className="w-3 h-3 text-accent" />}
            </button>
          )}
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-theme-primary text-theme-primary p-3 rounded-r-md shadow-lg hover:bg-theme-secondary transition-colors border-r border-t border-b border-accent"
        aria-label="Skeleton Switcher">

        <Layout className="w-5 h-5 text-accent" />
      </button>
    </div>);

}