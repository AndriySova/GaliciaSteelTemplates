import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { SkeletonSwitcher } from '../SkeletonSwitcher';
export function Layout({ children }: {children: React.ReactNode;}) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <ThemeSwitcher />
      <SkeletonSwitcher />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>);

}