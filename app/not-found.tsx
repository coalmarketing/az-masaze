import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="w-full font-montserrat">
        <div className="max-w-[1100px] mx-auto py-18 px-4 min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-[#008630] mb-4">Stránka nenalezena</h1>
          <p className="text-lg mb-8">Omlouváme se, ale požadovaná stránka neexistuje.</p>
          <Button 
            href="/" 
            variant="secondary"
          >
            Zpět na úvodní stránku
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
} 