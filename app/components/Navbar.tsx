'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
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
    <div className="w-full bg-white font-montserrat">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <nav className="flex items-center justify-between py-6 relative z-50">
          <div className="w-full">
            <Link href="/">
              <Image 
                src="/Logo_desktop.svg"
                alt="AZ Masérská škola"
                width={240}
                height={80}
                className="object-contain"
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
                    className={`text-[#008630] relative font-bold hover:text-green-600 whitespace-nowrap ${
                      isActive ? 'font-extrabold' : ''
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
                <Image src="/x.svg" alt="Zavřít menu" width={40} height={40} />
              ) : (
                <Image src="/Menu_icon.svg" alt="Otevřít menu" width={40} height={40} />
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
                  className="text-[#008630] font-bold text-xl py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 