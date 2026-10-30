import React, { ReactNode } from 'react';
import { FloatingNavbar } from '../components/navigation/FloatingNavbar';
import { Footer } from '../components/ui/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-canvas-bg text-text-primary selection:bg-crimson selection:text-white flex flex-col relative overflow-x-hidden">
      {/* Background Architectural Grid Lines */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, #2b2d36 1px, transparent 1px), linear-gradient(to bottom, #2b2d36 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Floating Header */}
      <FloatingNavbar />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 pt-20">
        {children}
      </main>

      {/* Persistent Colophon Footer */}
      <Footer />
    </div>
  );
};
