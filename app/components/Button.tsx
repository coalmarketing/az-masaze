'use client'

import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  href,
  type = 'button',
  onClick,
  children,
  className = '',
  fullWidth = false,
  disabled = false,
}: ButtonProps) => {
  // Základní styly pro všechny varianty tlačítek
  const baseStyles = 'font-bold inline-block text-center transition-colors duration-200';
  
  // Styly variant
  const variantStyles = {
    primary: 'bg-[#FFD600] hover:bg-[#008630] text-black hover:text-white',
    secondary: 'bg-[#008630] hover:bg-[#007025] text-white',
  };
  
  // Styly velikostí
  const sizeStyles = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-6 text-base',
    large: 'py-4 px-8 text-lg uppercase',
  };
  
  // Styly pro disabled
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Spojení všech stylů
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${disabledStyles} ${className}`;
  
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