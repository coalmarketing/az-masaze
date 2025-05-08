'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { Term } from '../types/course';

type CourseTermsProps = {
  terms: Term[];
  courseId?: number;
};

// Funkce pro formátování rozsahu dat
function formatDateRange(fromDate: string, toDate: string): string {
  // Parsování dat - předpokládáme formát YYYY-MM-DD z API
  const [fromYear, fromMonth, fromDay] = fromDate.split('-').map(num => parseInt(num, 10));
  const [toYear, toMonth, toDay] = toDate.split('-').map(num => parseInt(num, 10));
  
  // Formátování datumů
  if (fromYear === toYear) {
    return `${fromDay}. ${fromMonth}. - ${toDay}. ${toMonth}. ${fromYear}`;
  }
  
  return `${fromDay}. ${fromMonth}. ${fromYear} - ${toDay}. ${toMonth}. ${toYear}`;
}

export default function CourseTerms({ terms, courseId }: CourseTermsProps) {
  // State pro klientské renderování
  const [isClient, setIsClient] = useState(false);
  
  // Po načtení na klientovi nastavíme isClient na true
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="w-full font-montserrat">
      <div className="max-w-[1100px] mx-auto pt-10 pb-20 px-4">
        <h2 className="text-[#008630] text-2xl font-bold mb-8">Termíny</h2>
        
        <div className="flex flex-col gap-6 w-full">
          {terms.map((term) => (
            <div key={term.id} className="border-b border-[#00863050] pb-6">
              {/* Mobilní zobrazení */}
              <div className="flex md:hidden items-start gap-4">
                <div className="mt-1">
                  <Image 
                    src="/Date_icon.svg" 
                    alt="Kalendář" 
                    width={35} 
                    height={35}
                    priority
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>
                <div className="flex-grow">
                  {isClient ? (
                    <p className="text-[#008630] text-xl font-bold">{formatDateRange(term.dateFrom, term.dateTo)}</p>
                  ) : (
                    <p className="text-[#008630] text-xl font-bold">{term.dateFrom} - {term.dateTo}</p>
                  )}
                  <h3 className="text-black text-2xl font-bold mt-1">{term.location}</h3>
                  <p className="text-black mt-1">{term.note}</p>
                </div>
                <Link href={courseId ? `/kurzy/${courseId}/prihlaska?termId=${term.id}` : '#'}>
                  <Image 
                    src="/Arrow_right_yellow.svg" 
                    alt="Šipka" 
                    width={44} 
                    height={44}
                    priority
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </Link>
              </div>
              
              {/* Desktop zobrazení - původní layout */}
              <div className="hidden md:flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex items-start mb-2 md:mb-0 w-[70%]">
                  <Image 
                    src="/Date_icon.svg" 
                    alt="Kalendář" 
                    width={20} 
                    height={20} 
                    className="mr-4"
                    priority
                    style={{ width: 'auto', height: 'auto' }}
                  />
                  <div className='w-full'>
                    <div className="flex justify-between mb-1">
                      {isClient ? (
                        <p className="text-[#008630] text-xl font-bold w-1/2">{formatDateRange(term.dateFrom, term.dateTo)}</p>
                      ) : (
                        <p className="text-[#008630] text-xl font-bold w-1/2">{term.dateFrom} - {term.dateTo}</p>
                      )}
                      <p className="text-black text-xl font-bold w-1/2 text-left">{term.location}</p>
                    </div>
                    <p className="text-black text-sm mt-1">{term.note}</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  {courseId ? (
                    <Button 
                      href={`/kurzy/${courseId}/prihlaska?termId=${term.id}`}
                      size="small"
                    >
                      PŘIHLÁSIT SE
                    </Button>
                  ) : (
                    <Button size="small">
                      PŘIHLÁSIT SE
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 