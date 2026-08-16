import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { helmets } from '../data/products';
import { ProductGrid } from '../components/ProductGrid';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';

export const Helmets = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');

  const categories = ['All', 'Full Face', 'Modular', 'Open Face', 'Off-Road'];

  const filteredAndSortedHelmets = useMemo(() => {
    let result = helmets;

    // Filter by search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(h => 
        h.name.toLowerCase().includes(q) || 
        h.brand.toLowerCase().includes(q)
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(h => h.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'Price: Low to High':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'Featured':
      default:
        result = [...result].sort((a, b) => (b.featured ? 1 : -1) - (a.featured ? 1 : -1));
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <SectionHeading 
          label="THE COLLECTION"
          title="HELMETS"
          description="Protection meets performance."
        />

        {/* Filters and Search Bar */}
        <ScrollReveal delay={0.1} className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            
            {/* Search */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                <Search className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Search helmets..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-surface border border-white/10 rounded-none py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Filter className="w-5 h-5 text-gray-500" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full md:w-48 bg-dark-surface border border-white/10 rounded-none py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
              >
                <option value="Featured">Featured</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
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
        {filteredAndSortedHelmets.length > 0 ? (
          <ScrollReveal delay={0.2}>
            <ProductGrid>
              {filteredAndSortedHelmets.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductGrid>
          </ScrollReveal>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No helmets found matching your criteria.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
