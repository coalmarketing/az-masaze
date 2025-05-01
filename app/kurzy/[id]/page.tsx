import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import CourseDetail from '../../components/CourseDetail';
import Footer from '../../components/Footer';
import { getCourseById, getAllCourses, Course } from '../../types/course';

// Nastavení pro dynamické parametry
export const dynamicParams = false;

// Přidání funkce pro statické parametry s opravou exportu
export async function generateStaticParams(): Promise<{ id: string }[]> {
  const courses = getAllCourses();
  return courses.map((course: Course) => ({
    id: course.id,
  }));
}

// Změněno: použití props místo destrukturování
export default async function CourseDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  // Musíme awaitat params z props
  const params = await props.params;
  const course = getCourseById(params.id);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <CourseDetail course={course} />
    </>
  );
} 