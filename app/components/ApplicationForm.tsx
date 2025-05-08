'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Course, Term, ApplicationData, submitTermApplication } from '../types/course';
import Button from './Button';

type ApplicationFormProps = {
  course: Course;
  term: Term;
};

// Funkce pro převod data do formátu "D. M." bez počátečních nul
function formatShortDate(dateString: string): string {
  const [year, month, day] = dateString.split('-');
  // Odstranění počátečních nul
  const dayWithoutZero = day.replace(/^0+/, '');
  const monthWithoutZero = month.replace(/^0+/, '');
  return `${dayWithoutZero}. ${monthWithoutZero}.`;
}

export default function ApplicationForm({ course, term }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    surname: '',
    birthDate: '',
    street: '',
    city: '',
    postalCode: '',
    email: '',
    phone: '',
    gdprConsent: false,
    photoConsent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    
    try {
      // Příprava dat pro API podle struktury v Postman kolekci
      const applicationData: ApplicationData = {
        title: formData.title,
        name: formData.name,
        surname: formData.surname,
        birthDate: formData.birthDate,
        email: formData.email,
        phone: formData.phone,
        address: {
          street: formData.street,
          city: formData.city,
          postalCode: formData.postalCode
        }
      };
      
      const success = await submitTermApplication(term.id, applicationData);
      
      if (success) {
        setSubmitted(true);
      } else {
        setError('Nastala chyba při odesílání přihlášky. Zkuste to prosím znovu.');
      }
    } catch (error) {
      console.error('Chyba při odesílání přihlášky:', error);
      setError('Nastala neočekávaná chyba. Zkuste to prosím znovu.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full font-montserrat">
      <div className="max-w-[1100px] mx-auto pt-10 pb-40 px-4">
      <div className="mb-8">
          <Link href={`/kurzy/${course.id}`} className="flex items-center text-black hover:text-[#008630]">
            <Image src="/Arrow_left_back_icon.svg" alt="arrow_back" width={20} height={20} className="mr-2" />
            <span className='underline text-[14px]'>Zpět na termíny</span>
          </Link>
        </div>

        <div className="w-full">
          <div className="text-center mb-10">
            <h1 className="text-[#008630] text-2xl font-regular mb-2">Vaše přihláška na</h1>
            <h2 className="text-[#008630] text-3xl font-bold mb-4 uppercase">{course.name || course.title || 'Bez názvu'}</h2>
            <h3 className="text-[#008630] text-3xl font-bold mb-4">
              {formatShortDate(term.dateFrom)} - {formatShortDate(term.dateTo)} {new Date(term.dateTo).getFullYear()}
            </h3>
            <p className="text-black text-md mb-8">vždy so + ne (9:00 - 18:00), 2x pá (16:00 - 21:00)</p>
            
            <div>
              <h3 className="text-black text-2xl font-bold mb-1">Místo konání:</h3>
              <p className="text-black text-3xl font-bold">{term.location}</p>
            </div>
          </div>

          {submitted ? (
            <div className="text-center p-8 bg-green-50 rounded-lg">
              <h2 className="text-[#008630] text-2xl font-bold mb-4">Přihláška byla úspěšně odeslána</h2>
              <p className="mb-2">Na e-mail vám přijdou pokyny k platbě, potvrzení registrace a pokyny k účasti na kurzu.</p>
              <p className="font-bold">POZOR zkontrolujte složku SPAM.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-[700px] mx-auto">
              {error && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <input
                    type="text"
                    name="title"
                    placeholder="Titul*"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full border border-[#008630] p-3 text-[#008630] placeholder:text-[#008630]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jméno* (s diakritikou)"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#008630] p-3 text-[#008630] placeholder:text-[#008630]"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <input
                    type="text"
                    name="surname"
                    placeholder="Příjmení* (s diakritikou)"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#008630] p-3 text-[#008630] placeholder:text-[#008630]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="birthDate"
                    placeholder="Datum narození* (RRRR-MM-DD)"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#008630] p-3 text-[#008630] placeholder:text-[#008630]"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <input
                    type="text"
                    name="street"
                    placeholder="Ulice č.p.*"
                    value={formData.street}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#008630] p-3 text-[#008630] placeholder:text-[#008630]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#008630] p-3 text-[#008630] placeholder:text-[#008630]"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <input
                    type="text"
                    name="city"
                    placeholder="Město*"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#008630] p-3 text-[#008630] placeholder:text-[#008630]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#008630] p-3 text-[#008630] placeholder:text-[#008630]"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="mb-6">
                  <input
                    type="text"
                  name="postalCode"
                  placeholder="PSČ*"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#008630] p-3 text-[#008630] placeholder:text-[#008630]"
                />
              </div>
              </div>


              
              <div className="mb-6">
                <div className="flex items-start mb-4">
                  <div className="flex items-center h-8 mr-3">
                    <input
                      type="checkbox"
                      name="gdprConsent"
                      checked={formData.gdprConsent}
                      onChange={handleChange}
                      required
                      className="w-6 h-6 border border-[#008630] rounded accent-[#008630]"
                    />
                  </div>
                  <div className="ml-2">
                    <label htmlFor="gdprConsent" className="text-black text-sm w-1/2">
                      Souhlasím s <a href="#" className="underline">ochranou osobních údajů / GDPR</a>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-8 mr-3">
                    <input
                      type="checkbox"
                      name="photoConsent"
                      checked={formData.photoConsent}
                      onChange={handleChange}
                      className="w-6 h-6 border border-gray-300 accent-[#008630]"
                    />
                  </div>
                  <div className="ml-2">
                    <label htmlFor="photoConsent" className="text-black text-sm">
                      Souhlasím s <a href="#" className="underline">pořizováním foto/video materiálů během kurzu a použitím pro marketingové účely</a>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <p className="mb-2">
                  Tímto stvrzuji, že se závazně přihlašuji na vybranou akci a odesláním přihlášky
                  souhlasím s podmínkami účasti. <span className="font-bold text-black">
                  Na e-mail vám přijdou pokyny k platbě, potvrzení registrace a pokyny k účasti na kurzu.
                </span>
                </p>
                <p className="font-bold text-black">
                  POZOR zkontrolujte složku SPAM.
                </p>
              </div>
              
              <div className="text-center mt-12">
                <Button 
                  type="submit" 
                  size="large"
                  disabled={submitting}
                >
                  {submitting ? 'Odesílám...' : 'Odeslat'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 