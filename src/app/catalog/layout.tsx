import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catalog — TravelTrucks',
  description: 'Browse available campervans. Filter by location, body type, engine and transmission.',
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
