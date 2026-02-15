import React from 'react';
import { Layout } from '../components/layout/Layout';
import { useSkeleton } from '../lib/skeleton';
import { HomeIndustrial } from './skeletons/HomeIndustrial';
import { HomeMinimal } from './skeletons/HomeMinimal';
import { HomeGrid } from './skeletons/HomeGrid';
import { HomeEditorial } from './skeletons/HomeEditorial';
export function HomePage() {
  const { skeleton } = useSkeleton();
  const renderSkeleton = () => {
    switch (skeleton) {
      case 'industrial':
        return <HomeIndustrial />;
      case 'minimal':
        return <HomeMinimal />;
      case 'grid':
        return <HomeGrid />;
      case 'editorial':
        return <HomeEditorial />;
      default:
        return <HomeIndustrial />;
    }
  };
  return <Layout>{renderSkeleton()}</Layout>;
}