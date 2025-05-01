import Image from 'next/image';
import React from 'react';

export default function AboutSchool() {
  return (
    <div id="about" className="w-full font-montserrat flex flex-col md:flex-row">
      <div className="w-full md:w-[65%] bg-white flex justify-end">
        <div className="py-12 md:py-32 w-full max-w-[calc(1100px*0.65)] px-4">
          <div className="w-full md:w-[75%] leading-[1.4]">
            <h1 className="text-[#008630] text-[24px] md:text-[30px] font-extrabold mb-6">
              Aleš Zelinka, Masérská škola AZ
              - školící a&nbsp;vzdělávací zařízení
              v&nbsp;oblasti regenerace. Kurzy
              s&nbsp;akreditací a&nbsp;autorizací.
            </h1>
            
            <p className="text-black font-regular mb-6">
              Vítejte na stránkách masérské školy AZ, školícího a
              vzdělávacího zařízení v oblasti regenerace.
            </p>
            
            <p className="text-black font-regular mb-6">
              Jsme škola s <span className="underline">více než 30-ti letou tradicí</span>, jednou z
              prvně založenou v ČR. Naší hlavní náplní je pořádání
              masérských kurzů, školení a seminářů s různou
              tématikou.
            </p>
            
            <p className="text-black font-bold mb-6">
              Vlastníme akreditrace MŠMT ČR i autorizaci na
              pořádání kvalifikačních zkoušek, jež budoucím
              masérům umožňuje podnikat jako OSVČ.
            </p>

            {/* Mobilní zobrazení obrázků pod OSVČ odstavcem */}
            <div className="flex md:hidden w-full flex-row items-center justify-around mb-8">
              <div>
                <Image 
                  src="/MSMT_AlezZelinka.svg" 
                  alt="MŠMT Certifikace" 
                  width={100}
                  height={70}
                />
              </div>
              
              <div>
                <Image 
                  src="/AZ_razitko.png" 
                  alt="Razítko Aleš Zelinka"
                  width={120}
                  height={120}
                />
              </div>
            </div>
            
            <p className="text-black mb-6">
              Mnozí naši maséři již našli uplatnění ve špičkových
              sportovních klubech, vlastních salónech, ale i v
              zahraničí. Snad je to i tím, že se snažíme školit
              kvalitně a naši absolventi se mohou dále vzdělávat na
              různých doskoleních či seminářích, které pořádáme
              pod záštitou naší školy.
            </p>
            
            <p className="text-black mb-4">
              Dále nabízíme
            </p>
            
            <ul className="text-black mb-6">
              <li className="mb-2">• Profesionální regenerační zajištění 
              sportovních i firemních akcí
              zkušenými maséry a terapeuty,</li>
              <li>• Realizace kvalifikačních zkoušek ze
              sportovní masáže.</li>
            </ul>
            
            <div className="text-black font-bold italic mb-4">
              „Těšíme se na Vás,<br />
              přijďte s dobrou náladou! :)"
            </div>
            
            <p className="text-black italic">
              Aleš Zelinka
            </p>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex w-[45%] bg-gray-100 justify-start">
        <div className="py-12 w-full max-w-[calc(1100px*0.45)] px-8 flex flex-col items-center justify-center">
          <div className="mb-16">
            <Image 
              src="/MSMT_AlezZelinka.svg" 
              alt="MŠMT Certifikace" 
              width={120}
              height={80}
              className="mt-4"
            />
          </div>
          
          <div className="border-t border-black w-1/2 mx-auto my-8"></div>
          
          <div>
            <Image 
              src="/AZ_razitko.png" 
              alt="Razítko Aleš Zelinka"
              width={140}
              height={140}
              className="mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 