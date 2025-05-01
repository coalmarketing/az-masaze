'use client'

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ApplicationForm from './ApplicationForm';
import { getCourseById } from '../types/course';

type ApplicationFormClientProps = {
  courseId: string;
};

export default function ApplicationFormClient({ courseId }: ApplicationFormClientProps) {
  const searchParams = useSearchParams();
  const termId = searchParams.get('termId');
  
  const course = getCourseById(courseId);
  
  if (!course) {
    return (
      <div className="w-full font-montserrat">
        <div className="max-w-[1100px] mx-auto pt-10 pb-20 px-4">
          <h2 className="text-[#008630] text-2xl font-bold mb-8">Kurz nenalezen</h2>
        </div>
      </div>
    );
  }

  if (!course.terms || course.terms.length === 0) {
    return (
      <div className="w-full font-montserrat">
        <div className="max-w-[1100px] mx-auto pt-10 pb-20 px-4">
          <h2 className="text-[#008630] text-2xl font-bold mb-8">Pro tento kurz nejsou k dispozici žádné termíny</h2>
        </div>
      </div>
    );
  }

  const term = course.terms.find(t => t.id === termId);

  if (!term) {
    return (
      <div className="w-full font-montserrat">
        <div className="max-w-[1100px] mx-auto pt-10 pb-20 px-4">
          <h2 className="text-[#008630] text-2xl font-bold mb-8">Termín nenalezen</h2>
        </div>
      </div>
    );
  }

  return <ApplicationForm course={course} term={term} />;
} 