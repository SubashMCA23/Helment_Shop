import { cn } from '../utils/cn';

export const ProductGrid = ({ children, className }) => {
  return (
    <div className={cn(
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
      className
    )}>
      {children}
    </div>
  );
};
