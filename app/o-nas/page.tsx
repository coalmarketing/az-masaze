'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ONasPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/#about');
  }, [router]);
  
  return null; // Stránka je pouze přesměrování, nic se nezobrazí
} 