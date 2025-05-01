import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="kontakt" className="w-full font-montserrat">
      {/* Zelený pruh nahoře */}
      <div className="w-full h-1 bg-[#008630]"></div>
      
      {/* Hlavní obsah footeru */}
      <div className="py-12 px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between">
        {/* Logo sekce */}
        <div className="mb-8 md:mb-0">
          <Image 
            src="/AZ_logo_footer_desktop.svg" 
            alt="AZ Masáže Logo" 
            width={150} 
            height={100}
          />
        </div>
        
        {/* Kontaktní sekce */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-[#008630] font-bold text-md mb-1">Máte dotaz? Napište nám :)</h3>
          <p className="text-black font-regular text-md">info@masaznikurzy.cz</p>
          
          <h3 className="text-[#008630] font-bold mt-6 mb-1">Fakturace</h3>
          <p className="text-black font-regular text-md">Aleš Zelinka</p>
          <p className="text-black font-regular text-md">Na Klinku 750</p>
          <p className="text-black font-regular text-md">530 06 Pardubice - Svítkov</p>
          <p className="text-black font-regular text-md">IČ: 12340944</p>
        </div>
        
        {/* Kancelář sekce */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-[#008630] font-bold mb-1">Kancelář / přihlášky</h3>
          <p className="text-black font-regular text-md">+420 608 883 739</p>
          
          <h3 className="text-[#008630] font-bold mt-6 mb-1">Aleš Zelinka</h3>
          <p className="text-black font-regular text-md">+420 608 883 741</p>
        </div>
        
        {/* Sociální sítě */}
        <div>
          <h3 className="text-[#008630] font-bold mb-1">Sledujte nás :)</h3>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/facebook_icon.svg" 
              alt="Facebook" 
              width={40} 
              height={40}
              className="mt-2"
            />
          </Link>
        </div>
      </div>
      

      <div className="bg-black text-white py-3 px-4">
        <div className="w-full px-32 mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/copyright.png" alt="copyright" width={25} height={25} />
            <p className="text-[10px]">copyright 2024</p>
          </div>
          <div>
            <Image src="/matfix.png" alt="Matfix Logo" width={100} height={100} />
          </div>
        </div>
      </div>
    </footer>
  );
} 