import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import CourseDetail from '../../components/CourseDetail';
import { getCourseById, getAllCourses } from '../../types/course';

// Generování statických cest pro prerendering
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

// Funkce stránky s dynamickými parametry
export default async function Page({ params }: any) {
  if (!params?.id) {
    console.error('Chybějící ID kurzu v URL parametrech');
    notFound();
  }

  const courseId = parseInt(params.id, 10);
  
  if (isNaN(courseId)) {
    console.error('Neplatné ID kurzu:', params.id);
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