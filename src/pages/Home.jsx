import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Star, ThumbsUp, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { ProductCard } from '../components/ProductCard';
import { ProductGrid } from '../components/ProductGrid';
import { helmets } from '../data/products';
import { siteConfig } from '../config/siteConfig';
import { createGeneralWhatsAppUrl } from '../utils/whatsapp';

export const Home = () => {
  const featuredHelmets = helmets.filter(h => h.featured).slice(0, 4);

  return (
    <div className="w-full">
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Content */}
            <div className="flex flex-col items-start order-2 lg:order-1">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-6"
              >
                PREMIUM MOTORCYCLE GEAR
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95]"
              >
                GEAR UP.<br />RIDE HARD.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-400 text-lg md:text-xl max-w-xl mb-10"
              >
                Premium helmets and riding gear built for riders who refuse to compromise.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Link to="/helmets" className="w-full sm:w-auto">
                  <Button className="w-full">EXPLORE HELMETS</Button>
                </Link>
                <a href={createGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full">WHATSAPP US</Button>
                </a>
              </motion.div>
            </div>

            {/* Right Content - Helmet Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/full_face_carbon_helmet_1786813061790.jpg`}
                  alt="Premium Carbon Helmet"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full max-w-[500px] object-contain drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2 - FEATURED HELMETS */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            label="FEATURED COLLECTION"
            title="BUILT FOR THE RIDE."
            description="Protection, comfort and performance for every kind of rider."
          />

          <ScrollReveal delay={0.2}>
            <ProductGrid>
              {featuredHelmets.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductGrid>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3 - SHOP BY CATEGORY */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            label="BROWSE GEAR"
            title="SHOP BY CATEGORY"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { title: 'FULL FACE', desc: 'Maximum protection for track and street.', img: `${import.meta.env.BASE_URL}images/full_face_carbon_helmet_1786813061790.jpg` },
              { title: 'MODULAR', desc: 'Versatility for touring and commuting.', img: `${import.meta.env.BASE_URL}images/modular_touring_helmet_1786813075868.jpg` },
              { title: 'OPEN FACE', desc: 'Classic freedom for urban rides.', img: `${import.meta.env.BASE_URL}images/open_face_retro_helmet_1786813090289.jpg` },
            ].map((cat, i) => (
              <ScrollReveal key={cat.title} delay={0.1 * i} direction="up">
                <Link to="/helmets" className="group block relative h-96 overflow-hidden bg-dark-surface">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 z-10" />
                  <img
                    src={cat.img}
                    alt={cat.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                    <h3 className="font-display font-bold text-3xl mb-2 text-white">{cat.title}</h3>
                    <p className="text-gray-300 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{cat.desc}</p>
                    <div className="flex items-center text-primary font-bold gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100">
                      EXPLORE <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - TRUSTED BRANDS */}
      <section className="py-20 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl mb-12">
          <h2 className="text-center font-display font-bold text-2xl tracking-widest uppercase">Trusted By Riders</h2>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {['AXON', 'RAVEN', 'VOLT', 'NOVA', 'APEX', 'AXON', 'RAVEN', 'VOLT', 'NOVA', 'APEX'].map((brand, i) => (
              <span key={i} className="mx-16 text-5xl md:text-7xl font-display font-black text-white/30 tracking-wider">
                {brand}
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
            {['AXON', 'RAVEN', 'VOLT', 'NOVA', 'APEX', 'AXON', 'RAVEN', 'VOLT', 'NOVA', 'APEX'].map((brand, i) => (
              <span key={`dup-${i}`} className="mx-16 text-5xl md:text-7xl font-display font-black text-white/30 tracking-wider">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - WHY RIDEFORGE */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading
            title="WHY CHOOSE US"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <ScrollReveal delay={0.1} className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl mb-4">SAFETY FIRST</h3>
              <p className="text-gray-400">Protection comes first in every product we recommend.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl mb-4">PREMIUM QUALITY</h3>
              <p className="text-gray-400">Carefully selected gear for everyday riders and enthusiasts.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <ThumbsUp className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl mb-4">RIDER FOCUSED</h3>
              <p className="text-gray-400">Simple guidance to help you choose the right gear.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 6 - STORE CTA */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark/80 z-10" />
          <img
            src={`${import.meta.env.BASE_URL}images/rider_action_1786815787314.jpg`}
            alt="Riding"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-20 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-5xl md:text-7xl font-black font-display mb-6">READY FOR YOUR NEXT RIDE?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Find the right helmet and gear for your journey.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/helmets" className="w-full sm:w-auto">
                <Button className="w-full">SHOP HELMETS</Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">CONTACT US</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
