import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { Button } from '../components/Button';
import { createGeneralWhatsAppUrl } from '../utils/whatsapp';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <SectionHeading 
          label="GET IN TOUCH"
          title="LET'S TALK."
          description="Need help choosing the right helmet or riding gear? Our team is ready to help."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          
          {/* Left: Contact Info & Form */}
          <div className="flex flex-col gap-16">
            
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                <div>
                  <h3 className="font-display font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Call Us
                  </h3>
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-xl font-bold text-gray-300 hover:text-primary transition-colors block mb-2">
                    {siteConfig.phone}
                  </a>
                  <p className="text-gray-500 text-sm">Mon-Sat, {siteConfig.openingHours.weekdays}</p>
                </div>

                <div>
                  <h3 className="font-display font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Email Us
                  </h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-lg font-bold text-gray-300 hover:text-primary transition-colors block mb-2">
                    {siteConfig.email}
                  </a>
                  <p className="text-gray-500 text-sm">We reply within 24 hours.</p>
                </div>

              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={0.2} className="bg-dark-surface p-8 border border-white/5">
              <h3 className="font-display font-bold text-2xl uppercase tracking-wider mb-6">Send an Enquiry</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-gray-400">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold tracking-wider text-gray-400 uppercase mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-[#111] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold tracking-wider text-gray-400 uppercase mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full bg-[#111] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold tracking-wider text-gray-400 uppercase mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows="4"
                      required
                      className="w-full bg-[#111] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    SEND ENQUIRY
                  </Button>
                </form>
              )}
            </ScrollReveal>

          </div>

          {/* Right: Store Info & Map */}
          <ScrollReveal direction="left" delay={0.3} className="flex flex-col">
            
            <div className="bg-dark-surface border border-white/5 p-8 mb-8 relative overflow-hidden group">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/store_interior_1786815769949.jpg" 
                  alt="Store"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full justify-end">
                <h2 className="font-display font-black text-4xl mb-6">VISIT OUR STORE</h2>
                
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Address</h4>
                    <p className="text-gray-400 whitespace-pre-line leading-relaxed">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-10">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Opening Hours</h4>
                    <p className="text-gray-400">
                      Monday - Saturday: {siteConfig.openingHours.weekdays}
                      <br/>
                      Sunday: {siteConfig.openingHours.sunday}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      GET DIRECTIONS
                    </Button>
                  </a>
                  <a href={createGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 bg-dark/50 backdrop-blur-sm border-white/20">
                      <MessageCircle className="w-4 h-4" />
                      WHATSAPP US
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-[#111] border border-white/5 relative flex items-center justify-center group overflow-hidden">
               <div className="absolute inset-0 bg-[url('/images/rider_action_1786815787314.jpg')] bg-cover bg-center opacity-30 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-50"></div>
               <div className="relative z-10 text-center">
                 <MapPin className="w-8 h-8 text-primary mx-auto mb-3 animate-bounce" />
                 <h4 className="font-display font-bold tracking-widest uppercase">Tiruppur, Tamil Nadu</h4>
               </div>
            </div>

          </ScrollReveal>

        </div>
      </div>
    </div>
  );
};
