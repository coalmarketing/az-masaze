'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Course, getAllCourses } from '../types/course';

type CourseProps = {
  title: string;
  link: string;
  image: string;
};

const DEFAULT_IMAGE = '/header_img.jpg';

// API base URL
const API_URL = 'https://testadmin-masaze.matfix.cz';

const CourseItem = ({ title, link, image }: CourseProps) => {
  const [imageError, setImageError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Zajistí, že image není nikdy prázdné
  const imageUrl = !imageError && image && image.trim() !== '' ? image : DEFAULT_IMAGE;
  
  // Pro sledování chyb načítání obrázků - tichý handler
  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <div className="mb-6">
      <Link href={link}>
        <div className="relative h-[7rem] overflow-hidden group bg-gray-100">
          <div className="absolute inset-0">
            {isMounted ? (
              <Image 
                src={imageUrl} 
                alt={title || 'Kurz'}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full bg-gray-200"></div>
            )}
          </div>
          <div className="absolute inset-0 bg-[#008630] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-center h-full gap-4">
            <h3 className="text-lg font-bold text-white">{title || 'Kurz'}</h3>
            <Image 
              src="/Arrow_right_icon.svg" 
              alt="arrow_right" 
              className='w-8 h-8' 
              width={40} 
              height={40}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default function CoursesGrid() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Přímý fetch pro lepší kontrolu
        const response = await fetch(`${API_URL}/api/courses/list`, {
          headers: {
            'X-AUTH-TOKEN': '146bc54efbd8fa13e1a728c4097c8451dbc60949bb0ea189afaba77306ee6ba7'
          }
        });
        
        if (!response.ok) {
          setError(`Chyba při komunikaci s API: ${response.status} ${response.statusText}`);
          setLoading(false);
          return;
        }
        
        // Zkusit parsovat jako JSON
        try {
          const data = await response.json();
          
          // Kontrola, zda je výsledek pole
          if (!Array.isArray(data)) {
            setError('API nevrátilo očekávaná data');
            setLoading(false);
            return;
          }
          
          setCourses(data);
        } catch (parseError) {
          setError('Chyba parsování odpovědi z API');
        }
      } catch (error) {
        setError('Chyba při komunikaci s API');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const courseItems = courses.map(course => {
    return {
      title: course.name || course.title || 'Bez názvu', // Nejprve zkusíme name, pak title jako fallback
      link: `/kurzy/${course.id}`,
      image: course.thumbnailImageUrl || course.image || DEFAULT_IMAGE // Nejprve zkusíme thumbnailImageUrl, pak image jako fallback
    };
  });

  return (
    <div className="w-full font-montserrat">
        <div className="max-w-[1100px] mx-auto py-18 px-4">
        <div className="text-left text-black mb-10">
          <h2 className="text-[#008630] text-2xl font-bold mb-6">Vyberte si svůj kurz</h2>
          <p className="max-w-xl font-bold">
            Vyberte si svůj kurz, místo a termín konání. Odešlete přihlášku
            do kurzu a zkontrolujte svůj e-mail, na který vám přijde platba
            a veškeré další informace.
          </p>
        </div>
        
        {loading ? (
          <p>Načítání kurzů...</p>
        ) : error ? (
          <div>
            <p className="text-red-500">{error}</p>
          </div>
        ) : courses.length === 0 ? (
          <p>Nebyly nalezeny žádné kurzy</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-4">
            {courseItems.map((course, index) => (
              <CourseItem key={index} title={course.title} link={course.link} image={course.image} />
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
} 