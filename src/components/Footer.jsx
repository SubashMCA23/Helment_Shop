import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="font-display font-black text-2xl tracking-tight uppercase flex items-end gap-1">
                {siteConfig.shopName}
                <span className="w-2 h-2 rounded-full bg-primary mb-2"></span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              {siteConfig.tagline}
              <br/>
              Premium helmets and riding gear built for riders who refuse to compromise.
            </p>
            <div className="flex items-center gap-4">
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-primary transition-colors">
                Instagram
              </a>
              <span className="text-white/20">•</span>
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer" className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-primary transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/helmets" className="text-gray-400 hover:text-primary transition-colors">Helmets</Link></li>
              <li><Link to="/accessories" className="text-gray-400 hover:text-primary transition-colors">Accessories</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider mb-6 text-white">Support</h4>
            <ul className="space-y-4">
              <li>
                <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Store */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider mb-6 text-white">Visit Store</h4>
            <div className="flex items-start gap-3 text-gray-400 mb-4">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <p className="whitespace-pre-line">{siteConfig.address}</p>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Mon - Sat: {siteConfig.openingHours.weekdays}
              <br/>
              Sunday: {siteConfig.openingHours.sunday}
            </p>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.shopName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
