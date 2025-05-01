import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { courses } from '../types/course';

type CourseProps = {
  title: string;
  link: string;
  image: string;
};

const CourseItem = ({ title, link, image }: CourseProps) => {
  return (
    <div className="mb-6">
      <Link href={link}>
        <div className="relative h-[7rem] verflow-hidden group">
          <div className="absolute inset-0">
            <Image 
              src={image} 
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[#008630] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-center h-full gap-4">
            <h3 className="text-lg font-bold text-white">{title}</h3>
             <Image src="/Arrow_right_icon.svg" alt="arrow_right" className='w-8 h-8' width={40} height={40} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default function CoursesGrid() {
  const courseItems = courses.map(course => ({
    title: course.title,
    link: `/kurzy/${course.id}`,
    image: course.image
  }));

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-4">
          {courseItems.map((course, index) => (
            <CourseItem key={index} title={course.title} link={course.link} image={course.image} />
          ))}
        </div>
      </div>
    </div>
  );
} 