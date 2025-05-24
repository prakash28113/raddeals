import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon
}) => {
  const baseClasses = 'flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary text-secondary hover:bg-primary-dark focus:ring-primary-dark',
    secondary: 'bg-white text-secondary border border-secondary hover:bg-accent hover:shadow-md focus:ring-secondary',
    outline: 'bg-transparent border border-primary text-black hover:bg-primary-light focus:ring-primary'
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-1.5',
    md: 'text-base px-6 py-2.5',
    lg: 'text-lg px-8 py-3'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    }
    
    if (onClick) {
      onClick();
    }
  };
  
  if (href) {
    return (
      <a href={href} className={classes} onClick={handleClick}>
        {children}
        {icon}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
      {icon}
    </button>
  );
};

export default Button;