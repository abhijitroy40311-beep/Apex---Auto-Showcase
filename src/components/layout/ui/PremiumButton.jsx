import React from 'react';
import { Link } from 'react-router-dom';

const PremiumButton = ({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-block px-8 py-4 text-sm uppercase tracking-widest transition-colors text-center";
  
  const variants = {
    primary: "bg-accent text-primary font-semibold hover:bg-accent-hover",
    secondary: "bg-transparent border border-border text-text-primary font-medium hover:border-accent hover:text-accent",
    tertiary: "inline-flex items-center gap-3 text-xs uppercase tracking-widest text-text-primary font-medium hover:text-accent transition-colors pb-1 border-b border-accent px-0 py-0"
  };

  const classes = `${variant === 'tertiary' ? variants.tertiary : baseStyles + ' ' + variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }
  
  if (href) {
    return <a href={href} className={classes} target="_blank" rel="noreferrer" {...props}>{children}</a>;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default PremiumButton;
