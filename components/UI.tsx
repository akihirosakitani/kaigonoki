import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  isExternal?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  isExternal,
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400 shadow-md",
    secondary: "bg-teal-50 text-orange-800 hover:bg-teal-100 focus:ring-teal-200",
    outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-50 focus:ring-orange-400"
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
          {children} <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

// --- Section ---
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'brand';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  background = 'white' 
}) => {
  const bgColors = {
    white: "bg-white",
    gray: "bg-slate-50",
    brand: "bg-orange-50"
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

// --- Card ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm ${hoverEffect ? 'hover:shadow-md transition-shadow duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
};

// --- Section Heading ---
export const SectionHeading: React.FC<{ title: string; subtitle?: string; center?: boolean }> = ({ title, subtitle, center }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    {subtitle && <span className="block text-orange-500 font-bold tracking-wide text-sm uppercase mb-2">{subtitle}</span>}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
      {title}
    </h2>
    <div className={`h-1 w-16 bg-teal-300 mt-4 ${center ? 'mx-auto' : ''} rounded-full`}></div>
  </div>
);
