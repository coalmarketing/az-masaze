import Navbar from '@/app/components/Navbar';
import ApplicationFormClient from '@/app/components/ApplicationFormClient';
import { getAllCourses } from '@/app/types/course';
import { Suspense } from 'react';

// Nastavení pro dynamické parametry
export const dynamicParams = false;

// Přidání funkce pro statické parametry s opravou exportu
export async function generateStaticParams(): Promise<{ id: string }[]> {
  const courses = getAllCourses();
  return courses.map((course: { id: string }) => ({
    id: course.id,
  }));
}

// Změněno: použití props místo destrukturování
export default async function ApplicationPage(props: {
  params: Promise<{ id: string }>;
}) {
  // Musíme awaitat params z props
  const params = await props.params;
  
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="w-full font-montserrat"><div className="max-w-[1100px] mx-auto pt-10 pb-20 px-4">Načítání...</div></div>}>
        <ApplicationFormClient courseId={params.id} />
      </Suspense>
    </>
  );
} 