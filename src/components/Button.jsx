import { cn } from '../utils/cn';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  className,
  as: Component = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 active:scale-95';
  
  const variants = {
    primary: 'bg-primary hover:bg-orange-600 text-white px-8 py-3',
    secondary: 'bg-white hover:bg-gray-200 text-black px-8 py-3',
    outline: 'border border-white/20 hover:border-primary text-white hover:text-primary px-8 py-3',
    ghost: 'text-gray-400 hover:text-white px-4 py-2',
  };

  return (
    <Component
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
