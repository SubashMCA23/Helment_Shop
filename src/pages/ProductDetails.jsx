import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Star, MessageCircle, Phone } from 'lucide-react';
import { helmets, accessories } from '../data/products';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { ProductGrid } from '../components/ProductGrid';
import { ProductCard } from '../components/ProductCard';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { siteConfig } from '../config/siteConfig';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find product in either helmets or accessories
    const foundHelmet = helmets.find(h => h.id === id);
    const foundAccessory = accessories.find(a => a.id === id);
    const foundProduct = foundHelmet || foundAccessory;

    if (!foundProduct) {
      navigate('/helmets'); // Redirect if not found
      return;
    }

    setProduct(foundProduct);
    
    // Set default selections
    if (foundProduct.sizes && foundProduct.sizes.length > 0) {
      setSelectedSize(foundProduct.sizes[0]);
    } else {
      setSelectedSize('');
    }
    
    if (foundProduct.colors && foundProduct.colors.length > 0) {
      setSelectedColor(foundProduct.colors[0]);
    } else {
      setSelectedColor('');
    }
    
    setQuantity(1);

    // Get related products
    let related = [];
    if (foundHelmet) {
      related = helmets.filter(h => h.id !== id && h.category === foundHelmet.category).slice(0, 4);
      if (related.length < 4) {
        const more = helmets.filter(h => h.id !== id && !related.find(r => r.id === h.id)).slice(0, 4 - related.length);
        related = [...related, ...more];
      }
    } else {
      related = accessories.filter(a => a.id !== id).slice(0, 4);
    }
    setRelatedProducts(related);

  }, [id, navigate]);

  if (!product) return null;

  return (
    <div className="pt-24 pb-24 min-h-screen bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-bold tracking-widest uppercase">BACK</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          
          {/* Left: Image */}
          <ScrollReveal direction="right" className="bg-dark-surface border border-white/5 p-8 flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full max-w-md object-contain filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 relative z-10"
            />
          </ScrollReveal>

          {/* Right: Details */}
          <ScrollReveal direction="left" delay={0.2} className="flex flex-col">
            {product.brand && (
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">
                {product.brand}
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl font-black font-display mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
              <span className="text-3xl font-bold text-white">₹{product.price.toLocaleString('en-IN')}</span>
              {product.rating && (
                <div className="flex items-center gap-1 bg-dark-surface px-3 py-1 rounded-full border border-white/10">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-sm font-bold">{product.rating}</span>
                </div>
              )}
            </div>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Selectors */}
            <div className="space-y-6 mb-10">
              
              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Size</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-14 h-14 flex items-center justify-center font-bold transition-all border ${
                          selectedSize === size 
                            ? 'border-primary bg-primary text-white' 
                            : 'border-white/10 bg-dark-surface text-gray-300 hover:border-white/30'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <span className="block text-sm font-bold tracking-widest uppercase text-gray-400 mb-3">Colour</span>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-6 py-3 font-medium transition-all border ${
                          selectedColor === color 
                            ? 'border-primary text-primary bg-primary/10' 
                            : 'border-white/10 bg-dark-surface text-gray-300 hover:border-white/30'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <span className="block text-sm font-bold tracking-widest uppercase text-gray-400 mb-3">Quantity</span>
                <div className="flex items-center border border-white/10 bg-dark-surface w-fit">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-xl text-gray-400 hover:text-white transition-colors"
                  >-</button>
                  <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-xl text-gray-400 hover:text-white transition-colors"
                  >+</button>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href={createWhatsAppUrl(product, selectedSize, selectedColor)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full flex items-center justify-center gap-2 py-4 text-lg">
                  <MessageCircle className="w-5 h-5" />
                  ENQUIRE ON WHATSAPP
                </Button>
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="flex-1">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2 py-4 text-lg bg-dark-surface">
                  <Phone className="w-5 h-5" />
                  CALL STORE
                </Button>
              </a>
            </div>

            {/* Features List */}
            {product.features && product.features.length > 0 && (
              <div className="pt-8 border-t border-white/5">
                <h3 className="font-display font-bold uppercase tracking-wider mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </ScrollReveal>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <ScrollReveal direction="up">
            <div className="border-t border-white/5 pt-20">
              <h2 className="font-display font-bold text-2xl uppercase tracking-widest text-center mb-12">
                YOU MAY ALSO LIKE
              </h2>
              <ProductGrid>
                {relatedProducts.map(prod => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </ProductGrid>
            </div>
          </ScrollReveal>
        )}

      </div>
    </div>
  );
};
