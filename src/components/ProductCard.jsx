import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../utils/cn';

export const ProductCard = ({ product, className }) => {
  const { id, name, brand, category, price, image } = product;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={cn("group flex flex-col h-full bg-dark-surface border border-white/5 overflow-hidden", className)}
    >
      <Link to={`/helmets/${id}`} className="relative aspect-square overflow-hidden bg-[#111] p-6 flex items-center justify-center block">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <motion.img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">{brand}</span>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="font-display font-bold text-lg mb-1 truncate">{name}</h3>
            <span className="text-sm text-gray-400">{category}</span>
          </div>
          <span className="text-primary font-bold flex-shrink-0">₹{price.toLocaleString('en-IN')}</span>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
          <Link
            to={`/helmets/${id}`}
            className="text-sm font-medium text-white flex items-center gap-1 group-hover:text-primary transition-colors"
          >
            VIEW DETAILS
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
