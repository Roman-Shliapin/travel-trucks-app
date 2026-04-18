import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Camper Details — TravelTrucks',
  description: 'View detailed information about the camper, gallery, reviews and book your trip.',
};

export default function CamperLayout({ children }: { children: React.ReactNode }) {
  return children;
}
