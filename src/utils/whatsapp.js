import { siteConfig } from '../config/siteConfig';

export const createWhatsAppUrl = (product, selectedSize = '', selectedColor = '') => {
  const number = siteConfig.whatsappNumber;
  let message = `Hi ${siteConfig.shopName}, I'm interested in the ${product.name}.`;
  
  if (selectedSize) {
    message += ` Size: ${selectedSize}.`;
  }
  
  if (selectedColor) {
    message += ` Colour: ${selectedColor}.`;
  }
  
  message += ` Is it available?`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

export const createGeneralWhatsAppUrl = () => {
  const number = siteConfig.whatsappNumber;
  const message = `Hi ${siteConfig.shopName}, I have an enquiry about your products.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
