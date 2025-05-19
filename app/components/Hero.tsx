'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Button from './Button';

export default function Hero() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { href: '/kurzy', label: 'Kurzy' },
    { href: '/licence', label: 'Licence' },
    { href: '#about', label: 'O nás' },
    { href: '#kontakt', label: 'Kontakt' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      // Interní odkaz (scroll nebo přesměrování + scroll)
      const targetId = href.substring(1);
      
      if (pathname === '/') {
        // Jsme na hlavní stránce, jen scrollneme
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Nejsme na hlavní stránce, přesměrujeme na hlavní s hashem
        router.push(`/${href}`);
      }
    } else {
      // Externí odkaz na jinou stránku
      router.push(href);
    }
    
    // Zavřeme menu po kliknutí na mobilu
    setIsMenuOpen(false);
  };

  // Zpracujeme hash po načtení stránky
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const targetId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <div className="relative min-h-screen w-full font-montserrat">
      {/* Pozadí - obrázek masáže */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/header_img.jpg" 
          alt="Masáž zad" 
          fill
          className="object-cover opacity-50"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPj4+Oj4+Oj4+Oj4+Oj4+Oj4+Oj4+Oj7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      {/* Obsah */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4">
        {/* Navigace */}
        <nav className="flex items-center justify-between py-6 relative z-50">
          <div className="w-full">
            <Link href="/">
              <Image 
                src="/Logo_desktop.svg"
                alt="AZ Masérská škola"
                width={240}
                height={80}
                className="object-contain"
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
          </div>
          
          {/* Desktop navigace */}
          <div className="hidden md:flex items-center gap-8 lg:gap-24 text-lg lg:text-xl">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href || 
                (link.href === '#about' && (pathname === '/#about' || pathname === '/o-nas')) ||
                (link.href === '#kontakt' && (pathname === '/#kontakt' || pathname === '/kontakt'));
              
              return (
                <React.Fragment key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-[#008630] relative hover:text-green-600 whitespace-nowrap ${
                      isActive ? 'font-extrabold' : 'font-medium'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <div className="absolute bottom-[-8px] left-0 w-full h-1 bg-[#ffe135]"></div>
                    )}
                  </a>
                  {index < navLinks.length - 1 && (
                    <svg className="hidden lg:block" width="3" height="54" viewBox="0 0 3 54">
                      <line x1="1.5" y1="0" x2="1.5" y2="54" stroke="#008630" strokeWidth="3"/>
                    </svg>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          
          {/* Menu tlačítko pro mobilní zařízení */}
          <div className="md:hidden z-50">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#008630] mr-4"
            >
              {isMenuOpen ? (
                <Image src="/Close_mobile_menu.svg" alt="Zavřít menu" width={40} height={40} style={{ width: 'auto', height: 'auto' }} />
              ) : (
                <Image src="/Menu_icon.svg" alt="Otevřít menu" width={40} height={40} style={{ width: 'auto', height: 'auto' }} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobilní menu */}
        {isMenuOpen && (
          <div className="fixed top-0 pt-28 left-0 right-0 bg-[#ffe135] z-40 w-full h-auto">
            <div className="flex flex-col items-center gap-4 py-8 mt-12">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-black text-xl py-2 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Hlavní text */}
        <div className="mt-20 md:mt-48 max-w-4xl mx-auto text-center px-4">
          <div className="flex flex-col gap-1">
            <p className="text-4xl sm:text-5xl md:text-5xl lg:text-[60px] font-medium md:font-regular mx-6 md:mx-0 leading-[1.2]">Školící a&nbsp;vzdělávací zařízení v&nbsp;oblasti regenerace.</p>
            <p className="text-4xl sm:text-4xl md:text-5xl lg:text-[60px] font-semibold hidden md:flex leading-[1.2]">Masérské kurzy s&nbsp;akreditací a&nbsp;autorizací.</p>
          </div>
          
          {/* Tlačítko */}
          <div className="mt-8 md:mt-16">
            <Button href="/kurzy">
              KURZY
            </Button>
          </div>
        </div>

        {/* Certifikace */}
        <div className="flex justify-center mt-8">
          <div className="flex flex-col items-center">
            <Image 
              src="/MSMT_AlezZelinka.svg" 
              alt="MŠMT Certifikace" 
              width={80} 
              height={50} 
              className="mt-2"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 