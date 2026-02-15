import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Головна',
    path: '/'
  },
  {
    name: 'Продукція',
    path: '/products'
  },
  {
    name: 'Про нас',
    path: '/about'
  },
  {
    name: 'Портфоліо',
    path: '/portfolio'
  },
  {
    name: 'Контакти',
    path: '/contact'
  }];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-theme-primary text-theme-muted py-2 px-4 text-xs tracking-widest border-b border-theme-dark">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="hidden md:flex gap-6">
            <span className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
              <Phone className="w-3 h-3" /> +38 (097) 123-45-67
            </span>
            <span className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
              <Mail className="w-3 h-3" /> info@galicia-steel.ua
            </span>
          </div>
          <div className="ml-auto">
            <span>Пн-Пт: 9:00 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-theme-card/95 backdrop-blur-md shadow-md py-3 border-b border-theme-light' : 'bg-theme-card py-5 border-b border-transparent'}`}>

        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="/1709302341galiciasteel.png"
                alt="Galicia Steel Logo"
                className="w-full h-full object-contain" />

            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wider text-theme-primary leading-none">
                GALICIA STEEL
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-theme-muted group-hover:text-accent transition-colors">
                Сила металу
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:text-accent relative group ${location.pathname === link.path ? 'text-accent' : 'text-theme-secondary'}`}>

                {link.name}
                <span
                className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />

              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-theme-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen &&
      <div className="fixed inset-0 z-30 bg-theme-primary/95 backdrop-blur-lg pt-24 px-8 md:hidden">
          <nav className="flex flex-col gap-6 items-center">
            {navLinks.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-2xl font-serif font-bold transition-colors ${location.pathname === link.path ? 'text-accent' : 'text-theme-on-dark'}`}>

                {link.name}
              </Link>
          )}
            <div className="mt-8 flex flex-col items-center gap-4 text-theme-muted">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +38 (097) 123-45-67
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> info@galicia-steel.ua
              </span>
            </div>
          </nav>
        </div>
      }
    </>);

}