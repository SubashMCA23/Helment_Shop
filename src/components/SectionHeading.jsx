import { motion } from 'framer-motion';

export const SectionHeading = ({ label, title, description, align = 'left' }) => {
  return (
    <div className={`mb-12 flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      {label && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3"
        >
          {label}
        </motion.span>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-black mb-4 leading-tight"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-xl text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
