'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Course, Term, getCourseTerms } from '../types/course';
import CourseTerms from './CourseTerms';

// Výchozí obrázek pro případy, kdy není k dispozici
const DEFAULT_IMAGE = '/header_img.jpg';

type CourseDetailProps = {
  course: Course;
};

export default function CourseDetail({ course }: CourseDetailProps) {
  const [terms, setTerms] = useState<Term[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Kontrola, zda máme validní data kurzu
  const isValidCourse = course && (course.name || course.title);

  // Získání názvu kurzu - přednostně z name, pak z title
  const courseName = course?.name || course?.title || '';

  // Zajistí, že obrázek není prázdný - přednostně z thumbnailImageUrl, pak z imageUrl, pak z image
  const initialImageUrl = (course && (
    course.thumbnailImageUrl || 
    course.imageUrl || 
    (course.image && course.image.trim() !== '')
  )) ? (course.thumbnailImageUrl || course.imageUrl || course.image || DEFAULT_IMAGE) 
    : DEFAULT_IMAGE;
    
  // Použij výchozí obrázek, pokud došlo k chybě načítání
  const imageUrl = !imageError ? initialImageUrl : DEFAULT_IMAGE;

  // Pro sledování chyb načítání obrázků bez zobrazení v konzoli
  const handleImageError = () => {
    // Tichá změna stavu bez logu v konzoli
    setImageError(true);
  };
  
  useEffect(() => {
    setIsMounted(true);
    
    const fetchTerms = async () => {
      if (course && course.id) {
        try {
          const data = await getCourseTerms(course.id);
          setTerms(data);
        } catch (error) {
          setError('Nepodařilo se načíst termíny kurzu.');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchTerms();
  }, [course]);

  if (!isValidCourse) return (
    <div className="w-full font-montserrat p-8 text-center">
      <div className="max-w-[1100px] mx-auto py-10 px-4">
        <p className="text-red-500 text-xl">Kurz nebyl nalezen nebo neobsahuje platná data.</p>
        <div className="mt-4">
          <Link href="/kurzy" className="text-[#008630] hover:underline">
            Zpět na výpis kurzů
          </Link>
        </div>
        {course && (
          <div className="mt-8 p-4 bg-gray-100 rounded text-left">
            <h3 className="font-bold mb-2">Debug informace:</h3>
            <pre className="text-xs overflow-auto max-h-[300px]">
              {JSON.stringify(course, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full font-montserrat">
      <div className="max-w-[1100px] mx-auto py-10 px-4">
        <div className="mb-8">
          <Link href="/kurzy" className="flex items-center text-black hover:text-[#008630]">
            <Image 
              src="/Arrow_left_back_icon.svg" 
              alt="arrow_back" 
              width={20} 
              height={20} 
              className="mr-2" 
              style={{ width: 'auto', height: 'auto' }} 
            />
            <span className='underline text-[14px]'>Zpět na výpis kurzů</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Levá strana - obrázek */}
          <div className="w-full md:w-[30%]">
            <div className="relative h-[200px] w-full bg-gray-100">
              {isMounted ? (
                <Image 
                  src={imageUrl}
                  alt={courseName || 'Kurz'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full bg-gray-200"></div>
              )}
            </div>

            
        <div className="mt-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className='text-center mx-auto'>
              <h2 className="text-[#008630] text-2xl font-bold">Cena kurzu</h2>
              <p className="text-3xl font-bold mb-4">{course.price ? course.price.toLocaleString('cs-CZ', { maximumFractionDigits: 0 }) : '0'} Kč</p>
              
              {(course.examPriceOurSchool || course.examPriceExternal) && (
                <>
                  <h3 className="text-[#008630] text-sm font-bold">Cena kvalifikační zkoušky</h3>
                  <p className="text-sm">{course.examPriceOurSchool ? course.examPriceOurSchool.toLocaleString('cs-CZ', { maximumFractionDigits: 0 }) : '0'} Kč (absolventi naší školy)</p>
                  <p className="text-sm">{course.examPriceExternal ? course.examPriceExternal.toLocaleString('cs-CZ', { maximumFractionDigits: 0 }) : '0'} Kč (absolventi jiné školy)</p>
                </>
              )}
            </div>
          </div>
        </div>
          </div>


          {/* Pravá strana - informace */}
          <div className="w-full md:w-[70%]">
            <h1 className="text-[#008630] text-3xl font-bold mb-4">{courseName}</h1>
            {course.description ? (
              <div 
                className="text-black mb-6 course-description" 
                dangerouslySetInnerHTML={{ __html: course.description }}
              />
            ) : (
              <p className="text-black mb-6">Žádný popis kurzu není k dispozici.</p>
            )}
            
            <div className="mb-6">
              <h2 className="text-black font-bold mb-3">Podmínky pro přijetí do kurzu:</h2>
              <ul className="list-disc pl-5 mb-4">
                <li className="text-black mb-1">věk min. 18 let</li>
                <li className="text-black mb-1">ukončený 1 rok SŠ či učiliště</li>
                <li className="text-black mb-1">dobrý zdravotní stav, bezinfekčnost</li>
              </ul>
              <p className="text-black mb-4">POZOR! - pro evidované uchazeče o zaměstnání možnost úhrady kurzu úřadem práce! (po individuálním schválení vaším úřadem práce)</p>
            </div>

            <div className="mb-6">
              <h2 className="text-black font-bold mb-3">Co s sebou:</h2>
              <ul className="list-disc pl-5 mb-4">
                <li className="text-black mb-1">sešit, psací potřeby</li>
                <li className="text-black mb-1">ručník, mýdlo</li>
                <li className="text-black mb-1">masérské oblečení (triko, tepláky a přezůvky</li>
                <li className="text-black mb-1">napínací prostěradlo (1 lůžko)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-black font-bold mb-3">Délka kurzu:</h2>
              <p className="text-black">18 vyučovacích hodin</p>
            </div>

            {course.requirements && course.requirements.length > 0 && (
              <div className="mb-6">
                <h2 className="text-black font-bold mb-3">Podmínky pro přijetí do kurzu:</h2>
                <ul className="list-disc pl-5 mb-4">
                  {course.requirements.map((requirement, index) => (
                    <li key={index} className="text-black mb-1">{requirement}</li>
                  ))}
                </ul>
              </div>
            )}

            {course.note && (
              <div className="mb-6">
                <p className="text-black">{course.note}</p>
              </div>
            )}

            {course.items && course.items.length > 0 && (
              <div className="mb-6">
                <h2 className="text-black text-xl font-bold mb-3">Co s sebou:</h2>
                <ul className="list-disc pl-5 mb-4">
                  {course.items.map((item, index) => (
                    <li key={index} className="text-black mb-1">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {course.duration && (
              <div className="mb-6">
                <h2 className="text-black text-xl font-bold mb-3">Délka kurzu:</h2>
                <p className="text-black">{course.duration}</p>
              </div>
            )}
          </div>
        </div>

        {error ? (
          <p className="mt-8 text-red-500">{error}</p>
        ) : loading ? (
          <p className="mt-8">Načítání termínů...</p>
        ) : terms && terms.length > 0 ? (
          <CourseTerms terms={terms} courseId={course.id} />
        ) : (
          <p className="mt-8">Pro tento kurz nejsou vypsány žádné termíny.</p>
        )}
        
      </div>
    </div>
  );
} 