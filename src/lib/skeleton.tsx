import React, { useState, createContext, useContext } from 'react';
export type SkeletonType = 'industrial' | 'minimal' | 'grid' | 'editorial';
interface SkeletonContextType {
  skeleton: SkeletonType;
  setSkeleton: (skeleton: SkeletonType) => void;
}
const SkeletonContext = createContext<SkeletonContextType | undefined>(
  undefined
);
export function SkeletonProvider({ children }: {children: React.ReactNode;}) {
  const [skeleton, setSkeleton] = useState<SkeletonType>('industrial');
  return (
    <SkeletonContext.Provider
      value={{
        skeleton,
        setSkeleton
      }}>

      {children}
    </SkeletonContext.Provider>);

}
export function useSkeleton() {
  const context = useContext(SkeletonContext);
  if (context === undefined) {
    throw new Error('useSkeleton must be used within a SkeletonProvider');
  }
  return context;
}