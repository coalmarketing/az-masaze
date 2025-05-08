import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import CourseDetail from '../../components/CourseDetail';
import Footer from '../../components/Footer';
import { getCourseById, getAllCourses } from '../../types/course';

// Pomocné typy
interface PageProps {
  params: {
    id: string;
  };
}

// Generování statických cest
export async function generateStaticParams() {
  try {
    const courses = await getAllCourses();
    
    if (!Array.isArray(courses)) {
      console.error('getAllCourses nevrátilo pole:', courses);
      return [];
    }
    
    return courses.map((course) => ({
      id: String(course.id),
    }));
  } catch (error) {
    console.error('Chyba při generování statických parametrů:', error);
    return [];
  }
}

// Hlavní funkce stránky
export default async function CourseDetailPage({ params }: PageProps) {
  // Důležité: params musí být awaited před použitím jeho vlastností
  // Zajistíme, že params je připraven
  const safeParams = await Promise.resolve(params);
  
  if (!safeParams?.id) {
    console.error('Chybějící ID kurzu v URL parametrech');
    notFound();
  }

  const courseId = parseInt(safeParams.id, 10);
  
  if (isNaN(courseId)) {
    console.error('Neplatné ID kurzu:', safeParams.id);
    notFound();
  }
  
  try {
    const course = await getCourseById(courseId);

    if (!course) {
      notFound();
    }

    return (
      <>
        <Navbar />
        <CourseDetail course={course} />
      </>
    );
  } catch (error) {
    console.error('Chyba při načítání kurzu:', error);
    notFound();
  }
} 