import Image from 'next/image';
import React from 'react';
import Button from './Button';

const licenceItems = [
  "Autorizace 2023-28 A",
  "Autorizace 2023-28 část B",
  "Živnostenský list",
  "Autorizace 2023-28 A",
  "Autorizace 2023-28 část B",
  "Živnostenský list",
];

export default function Licences() {
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

          <div className="flex flex-wrap items-center justify-around gap-6 mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32">
              <Image src="/MSMT_AlezZelinka.svg" alt="MŠMT logo" width={150} height={150} className="object-contain w-full h-full" />
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32">
              <Image src="/AZ_razitko.png" alt="Razítko AZ" width={150} height={150} className="object-contain w-full h-full" />
            </div>
          </div>

          <div className="space-y-3 md:space-y-4 mt-8 md:mt-12">
            {licenceItems.map((title, index) => (
              <div key={index} className="flex items-center justify-between">
                <a href="#" className="text-md font-bold block mr-4">{title}</a>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/Eye_licence_icon.svg" alt="Zobrazit" width={20} height={20} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 mb-10 md:mt-16 flex justify-center lg:hidden">
            <Button href="/kurzy" size="large">KURZY</Button>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center">
          <Button href="/kurzy" size="large">KURZY</Button>
        </div>
      </div>
    </div>
  );
} 