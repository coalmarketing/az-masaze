'use client'

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ApplicationForm from './ApplicationForm';
import { getCourseById, getCourseTerms, Course, Term } from '../types/course';

type ApplicationFormClientProps = {
  courseId: string;
};

export default function ApplicationFormClient({ courseId }: ApplicationFormClientProps) {
  const searchParams = useSearchParams();
  const termId = searchParams.get('termId');
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function loadCourseAndTerm() {
      try {
        setLoading(true);
        const courseData = await getCourseById(parseInt(courseId));
        
        if (!courseData) {
          setError('Kurz nebyl nalezen.');
          setLoading(false);
          return;
        }
        
        // Načteme termíny kurzu
        const termsData = await getCourseTerms(parseInt(courseId));
        
        // Přidáme termíny do dat kurzu
        const courseWithTerms = { ...courseData, terms: termsData };
        setCourse(courseWithTerms);
        
        if (termId) {
          const term = termsData.find(t => t.id === parseInt(termId));
          setSelectedTerm(term || null);
          
          if (!term) {
            setError('Vybraný termín nebyl nalezen.');
          }
        }
      } catch (err) {
        console.error('Chyba při načítání kurzu nebo termínu:', err);
        setError('Nepodařilo se načíst data kurzu.');
      } finally {
        setLoading(false);
      }
    }
    
    loadCourseAndTerm();
  }, [courseId, termId]);
  
  if (loading) {
    return (
      <div className="w-full font-montserrat">
        <div className="max-w-[1100px] mx-auto pt-10 pb-20 px-4">
          <h2 className="text-[#008630] text-2xl font-bold mb-8">Načítání...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full font-montserrat">
        <div className="max-w-[1100px] mx-auto pt-10 pb-20 px-4">
          <h2 className="text-[#008630] text-2xl font-bold mb-8">{error}</h2>
        </div>
      </div>
    );
  }

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

  if (!selectedTerm) {
    return (
      <div className="w-full font-montserrat">
        <div className="max-w-[1100px] mx-auto pt-10 pb-20 px-4">
          <h2 className="text-[#008630] text-2xl font-bold mb-8">Termín nenalezen</h2>
        </div>
      </div>
    );
  }

  return <ApplicationForm course={course} term={selectedTerm} />;
} 