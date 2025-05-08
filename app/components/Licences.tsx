'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { Licence, getAllLicences } from '../types/course';

export default function Licences() {
  const [licences, setLicences] = useState<Licence[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLicences = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAllLicences();
        console.log('Načtené licence:', data);
        setLicences(data);
      } catch (error) {
        console.error('Chyba při načítání licencí:', error);
        setError('Nepodařilo se načíst licence. Zkuste to prosím později.');
      } finally {
        setLoading(false);
      }
    };

    fetchLicences();
  }, []);

  return (
    <div className="w-full font-montserrat">
      <div className="max-w-[1100px] mx-auto py-12 sm:py-16 md:py-24 px-4 flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-[#008630] mb-4 md:mb-6 md:w-[90%] lg:w-[80%]">
            Aleš Zelinka, Masérská škola AZ
            - školící a&nbsp;vzdělávací zařízení
            v&nbsp;oblasti regenerace. Kurzy
            s&nbsp;akreditací a&nbsp;autorizací.
          </h1>
          
          <p className="text-md font-bold mb-6 md:mb-8 md:w-[80%] lg:w-[70%]">
            Vlastníme akreditrace MŠMT ČR i autorizaci na
            pořádání kvalifikačních zkoušek, jež budoucím
            masérům umožňuje podnikat jako OSVČ.
          </p>

          <div className="flex flex-row justify-around items-center space-x-4 my-12 lg:hidden">
            <div className="flex-1 flex justify-center">
              <Image src="/MSMT_AlezZelinka.svg" alt="MŠMT logo" width={100} height={100} className="object-contain" />
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/AZ_razitko.png" alt="Razítko AZ" width={100} height={100} className="object-contain" />
            </div>
          </div>

          <div className="space-y-3 md:space-y-4 mt-8 md:mt-12">
            {loading ? (
              <p className="text-center py-4">Načítání licencí...</p>
            ) : error ? (
              <p className="text-red-500 py-4">{error}</p>
            ) : licences && licences.length > 0 ? (
              licences.map((licence) => (
                <div key={licence.id} className="flex items-center justify-between">
                  <a 
                    href={licence.fileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-md font-bold block mr-4"
                  >
                    {licence.name}
                  </a>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image src="/Eye_licence_icon.svg" alt="Zobrazit" width={20} height={20} style={{ width: 'auto', height: 'auto' }} />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center py-4">Žádné licence k zobrazení</p>
            )}
          </div>
          
          <div className="mt-16 mb-10 md:mt-16 flex justify-center lg:hidden">
            <Button href="/kurzy" size="large">KURZY</Button>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-[400px]">
            <Image src="/MSMT_AlezZelinka.svg" alt="MŠMT logo" width={130} height={130} className="object-contain" />
          <div className="w-[70%] h-[2px] bg-black my-16"></div>
          
            <Image src="/AZ_razitko.png" alt="Razítko AZ" width={130} height={130} className="object-contain" />
          
          <div className="mt-24">
            <Button href="/kurzy" size="large">KURZY</Button>
          </div>
        </div>
      </div>
    </div>
  );
} 