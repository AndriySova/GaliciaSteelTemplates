import React, { useEffect, useState, createContext, useContext } from 'react';
type Theme = 'deep-navy' | 'steel-blue' | 'granite' | 'arctic';
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: {children: React.ReactNode;}) {
  const [theme, setTheme] = useState<Theme>('deep-navy');
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}>

      <div
        className={`theme-${theme} min-h-screen flex flex-col transition-colors duration-500 bg-theme-content text-theme-primary`}>

        {children}
      </div>
    </ThemeContext.Provider>);

}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}