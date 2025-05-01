import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Course } from '../types/course';
import CourseTerms from './CourseTerms';

type CourseDetailProps = {
  course: Course;
};

export default function CourseDetail({ course }: CourseDetailProps) {
  if (!course) return <div>Kurz nebyl nalezen</div>;

  return (
    <div className="w-full font-montserrat">
      <div className="max-w-[1100px] mx-auto py-10 px-4">
        <div className="mb-8">
          <Link href="/kurzy" className="flex items-center text-black hover:text-[#008630]">
            <Image src="/Arrow_left_back_icon.svg" alt="arrow_back" width={20} height={20} className="mr-2" />
            <span className='underline text-[14px]'>Zpět na výpis kurzů</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Levá strana - obrázek */}
          <div className="w-full md:w-[30%]">
            <div className="relative h-[200px] w-full">
              <Image 
                src={course.image} 
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            
        <div className="mt-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className='text-center mx-auto'>
              <h2 className="text-[#008630] text-2xl font-bold">Cena kurzu</h2>
              <p className="text-3xl font-bold mb-4">{course.price.toLocaleString()} Kč</p>
              
              <h3 className="text-[#008630] text-sm font-bold">Cena kvalifikační zkoušky</h3>
              <p className="text-sm">{course.examPrice.schoolAlumni.toLocaleString()} Kč (absolventi naší školy)</p>
              <p className="text-sm">{course.examPrice.otherAlumni.toLocaleString()} Kč (absolventi jiné školy)</p>
            </div>
          </div>
        </div>
          </div>


          {/* Pravá strana - informace */}
          <div className="w-full md:w-[70%]">
            <h1 className="text-[#008630] text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-black mb-6">{course.description}</p>
            
            <div className="mb-6">
              <p className="text-black font-bold">
                Akreditace MŠMT ČR (schváleno pod č.j: 42468/2020-2/509) splňuje
                všechny požadavky živnostenského zákona. Podkladem pro získání Výpisu 
                z živnostenského rejstříku (ŽL) je Osvědčení o kvalifikaci – sportovní masáž
                (kód profesní kvalifikace 69-037-M). Toto osvědčení lze získat na základě
                vykonání kvalifikační zkoušky v naší masérské škole, které byla udělena
                autorizace (Čj: MŠMT-6374/2023) pro pořádání těchto zkoušek.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-black text-xl font-bold mb-3">Podmínky pro přijetí do kurzu:</h2>
              <ul className="list-disc pl-5 mb-4">
                {course.requirements.map((requirement, index) => (
                  <li key={index} className="text-black mb-1">{requirement}</li>
                ))}
              </ul>
            </div>

            {course.note && (
              <div className="mb-6">
                <p className="text-black">{course.note}</p>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-black text-xl font-bold mb-3">Co s sebou:</h2>
              <ul className="list-disc pl-5 mb-4">
                {course.items.map((item, index) => (
                  <li key={index} className="text-black mb-1">{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-black text-xl font-bold mb-3">Délka kurzu:</h2>
              <p className="text-black">{course.duration}</p>
            </div>
          </div>
        </div>

        {course.terms && course.terms.length > 0 && (
          <CourseTerms terms={course.terms} courseId={course.id} />
        )}

      </div>
    </div>
  );
} 