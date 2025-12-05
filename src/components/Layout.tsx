import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './Navigation';
import MobileNav from './MobileNav';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <main className="container mx-auto px-4 py-6 pb-20 md:pb-6 max-w-7xl">
        <Outlet />
      </main>
    </div>
  );
}
