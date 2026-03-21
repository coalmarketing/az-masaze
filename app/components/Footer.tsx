'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  // State pro kontrolu, zda jsme na klientovi
  const [mounted, setMounted] = useState(false);
  
  // Po načtení na klientovi nastavíme mounted na true
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Pro SSR použijeme div místo Image (zabráníme hydratačním chybám)
  if (!mounted) {
    return (
      <footer id="kontakt" className="w-full font-montserrat">
        <div className="w-full h-1 bg-[#008630]"></div>
        <div className="py-10 px-4 sm:px-6 md:py-12 md:px-8 lg:px-12 max-w-[1400px] mx-auto flex flex-col gap-10 md:flex-row md:flex-nowrap md:items-start md:justify-between md:gap-8">
          <div className="flex w-full justify-center md:w-auto md:justify-start">
            <div className="h-12 w-[96px] md:h-[60px] md:w-[120px]" aria-hidden />
          </div>
          
          <div className="w-full md:w-auto md:shrink-0">
            <h3 className="text-[#008630] font-bold text-md mb-1">Máte dotaz? Napište nám :)</h3>
            <p className="text-black font-regular text-md">info@masaznikurzy.cz</p>
            
            <h3 className="text-[#008630] font-bold mt-6 mb-1">Fakturace</h3>
            <p className="text-black font-regular text-md">Aleš Zelinka</p>
            <p className="text-black font-regular text-md">Na Klinku 750</p>
            <p className="text-black font-regular text-md">530 06 Pardubice - Svítkov</p>
            <p className="text-black font-regular text-md">IČ: 12340944</p>
          </div>
          
          <div className="w-full md:w-auto md:shrink-0">
            <h3 className="text-[#008630] font-bold mb-1">Kancelář / přihlášky</h3>
            <p className="text-black font-regular text-md">+420 608 883 739</p>
            
            <h3 className="text-[#008630] font-bold mt-6 mb-1">Aleš Zelinka</h3>
            <p className="text-black font-regular text-md">+420 608 883 741</p>
          </div>
          
          <div className="flex w-full flex-col items-start md:w-auto">
            <h3 className="text-[#008630] font-bold mb-1">Sledujte nás :)</h3>
            <div className="mt-2" style={{ width: '32px', height: '32px' }}></div>
          </div>
        </div>
        
        <div className="bg-black text-white py-3 px-4">
          <div className="mx-auto flex w-full flex-row flex-nowrap items-center justify-between gap-3 px-4 md:px-8 lg:px-32">
            <div className="flex min-w-0 items-center gap-2">
              <div style={{ width: '20px', height: '20px' }}></div>
              <p className="truncate text-[10px] md:text-xs">copyright 2024</p>
            </div>
            <div className="shrink-0">
              <div className="w-[52px] md:w-[64px]" style={{ height: '20px' }}></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  // Pro klientské renderování použijeme plnou verzi s obrázky
  return (
    <footer id="kontakt" className="w-full font-montserrat">
      {/* Zelený pruh nahoře */}
      <div className="w-full h-1 bg-[#008630]"></div>
      
      {/* Hlavní obsah footeru */}
      <div className="py-10 px-4 sm:px-6 md:py-12 md:px-8 lg:px-12 max-w-[1400px] mx-auto flex flex-col gap-10 md:flex-row md:flex-nowrap md:items-start md:justify-between md:gap-8">
        {/* Logo sekce */}
        <div className="flex w-full justify-center md:w-auto md:justify-start">
          <Image 
            src="/AZ_logo_footer_desktop.svg" 
            alt="AZ Masáže Logo" 
            width={120} 
            height={60}
            className="h-12 w-auto md:h-[60px]"
          />
        </div>
        
        {/* Kontaktní sekce */}
        <div className="w-full md:w-auto md:shrink-0">
          <h3 className="text-[#008630] font-bold text-md mb-1">Máte dotaz? Napište nám :)</h3>
          <p className="text-black font-regular text-md">info@masaznikurzy.cz</p>
          
          <h3 className="text-[#008630] font-bold mt-6 mb-1">Fakturace</h3>
          <p className="text-black font-regular text-md">Aleš Zelinka</p>
          <p className="text-black font-regular text-md">Na Klinku 750</p>
          <p className="text-black font-regular text-md">530 06 Pardubice - Svítkov</p>
          <p className="text-black font-regular text-md">IČ: 12340944</p>
        </div>
        
        {/* Kancelář sekce */}
        <div className="w-full md:w-auto md:shrink-0">
          <h3 className="text-[#008630] font-bold mb-1">Kancelář / přihlášky</h3>
          <p className="text-black font-regular text-md">+420 608 883 739</p>
          
          <h3 className="text-[#008630] font-bold mt-6 mb-1">Aleš Zelinka</h3>
          <p className="text-black font-regular text-md">+420 608 883 741</p>
        </div>
        
        {/* Sociální sítě */}
        <div className="flex w-full flex-col items-start md:w-auto">
          <h3 className="text-[#008630] font-bold mb-1">Sledujte nás :)</h3>
          <Link href="https://www.facebook.com/profile.php?id=100057228649193" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/facebook_icon.svg" 
              alt="Facebook" 
              width={32} 
              height={32}
              className="mt-2 h-8 w-8"
            />
          </Link>
        </div>
      </div>
      
      <div className="bg-black text-white py-3 px-4">
        <div className="mx-auto flex w-full flex-row flex-nowrap items-center justify-between gap-3 px-4 md:px-8 lg:px-32">
          <div className="flex min-w-0 items-center gap-2">
            <Image 
              src="/copyright.png" 
              alt="copyright" 
              width={20} 
              height={20} 
              className="h-5 w-5 shrink-0"
            />
            <p className="truncate text-[10px] md:text-xs">copyright 2024</p>
          </div>
          <div className="shrink-0">
            <Image 
              src="/matfix.png" 
              alt="Matfix Logo" 
              width={128} 
              height={48} 
              className="h-5 w-auto md:h-6 opacity-90" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
} 