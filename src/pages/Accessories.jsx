import { useState, useMemo } from 'react';
import { accessories } from '../data/products';
import { ProductGrid } from '../components/ProductGrid';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';

export const Accessories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Gloves', 'Jackets', 'Visors', 'Balaclavas', 'Riding Gear', 'Bike Covers'];

  const filteredAccessories = useMemo(() => {
    if (selectedCategory === 'All') return accessories;
    return accessories.filter(a => a.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <SectionHeading 
          label="RIDE READY"
          title="ACCESSORIES"
          description="Complete your riding setup with premium gear."
        />

        {/* Categories */}
        <ScrollReveal delay={0.1} className="mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 text-sm font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'bg-primary text-white' 
                    : 'bg-dark-surface text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <ScrollReveal delay={0.2}>
          <ProductGrid>
            {filteredAccessories.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </ScrollReveal>

      </div>
    </div>
  );
};
