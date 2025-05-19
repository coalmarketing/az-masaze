'use client'

import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  variant = 'primary',
  href,
  type = 'button',
  onClick,
  children,
  className = '',
  disabled = false,
}: ButtonProps) => {
  // Základní styly pro všechny varianty tlačítek
  const baseStyles = 'font-bold inline-block text-center transition-colors duration-200 w-[200px] py-3 px-6 text-xl flex items-center justify-center';
  
  // Styly variant
  const variantStyles = {
    primary: 'bg-[#FFD600] hover:bg-[#008630] text-black hover:text-white',
    secondary: 'bg-[#008630] hover:bg-[#007025] text-white',
  };
  
  // Styly pro disabled
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Spojení všech stylů
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`;
  
  // Pokud máme odkaz, tlačítko bude jako <Link>
  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }
  
  // Jinak renderujeme obyčejné tlačítko
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
    >
      {children}
    </button>
  );
};

export default Button; 