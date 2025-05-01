'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function KontaktPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/#kontakt');
  }, [router]);
  
  return null; // Stránka je pouze přesměrování, nic se nezobrazí
} 