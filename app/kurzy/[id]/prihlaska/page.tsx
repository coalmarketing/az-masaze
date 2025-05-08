import Navbar from '@/app/components/Navbar';
import ApplicationFormClient from '@/app/components/ApplicationFormClient';
import { getAllCourses } from '@/app/types/course';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

// Nastavení statického generování pro stránku
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidace stránky každou hodinu

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
    console.error('Chyba při generování statických parametrů pro přihlášku:', error);
    return [];
  }
}

// Funkce stránky s dynamickými parametry
export default async function Page({ params }: any) {
  if (!params?.id) {
    console.error('Chybějící ID kurzu v URL parametrech přihlášky');
    notFound();
  }

  try {
    const courseId = params.id;
    
    return (
      <>
        <Navbar />
        <Suspense fallback={<div className="w-full font-montserrat"><div className="max-w-[1100px] mx-auto pt-10 pb-20 px-4">Načítání...</div></div>}>
          <ApplicationFormClient courseId={courseId} />
        </Suspense>
      </>
    );
  } catch (error) {
    console.error('Chyba při zpracování stránky přihlášky:', error);
    notFound();
  }
} 