'use client';

import { motion } from 'framer-motion';
import { CONTACT_INFO } from '@/app/lib/contact-info';
import { Dictionary } from '@/app/lib/dictionary.models';

interface WhatsAppReservationProps {
  dict: Dictionary;
}

export default function WhatsAppReservation({ dict }: WhatsAppReservationProps) {
  // Return null if whatsapp data is not available
  if (!dict.contact?.whatsapp) {
    return null;
  }

  const whatsappMessage = encodeURIComponent("Hola! Me gustaría hacer una reserva en Restaurante Banys La Gavina. ¿Podrían ayudarme?");
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  const { whatsapp } = dict.contact;

  return (
    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">💬</span>
        <div>
          <h3 className="font-semibold text-green-800">{whatsapp.title}</h3>
          <p className="text-green-700 text-sm">{whatsapp.description}</p>
        </div>
      </div>

      {/* Botón CTA solo en mobile */}
      <motion.button
        onClick={handleWhatsAppClick}
        className="w-full md:hidden bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-semibold"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {whatsapp.button}
      </motion.button>
    </div>
  );
}