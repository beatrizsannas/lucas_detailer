import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { CONTACT_INFO } from '../constants';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [service]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#121217] border border-white/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col max-h-[90vh]"
        >
          {/* Header Compact */}
          <div className="relative h-24 bg-gradient-to-br from-brand-purple/20 to-brand-dark overflow-hidden shrink-0">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-purple blur-[60px] rounded-full"></div>
             
             <button 
                onClick={onClose}
                className="absolute top-3 right-3 p-1.5 bg-black/40 hover:bg-white/10 rounded-full text-white transition-colors backdrop-blur-md z-10"
             >
               <X size={18} />
             </button>

             <div className="absolute bottom-3 left-6 right-6 flex justify-between items-end">
               <h3 className="text-xl md:text-2xl font-display font-bold text-white leading-tight shadow-black drop-shadow-lg">
                 {service.name}
               </h3>
               <p className="text-brand-purple font-bold text-lg md:text-xl">
                 R$ {service.price.toFixed(0)}
               </p>
             </div>
          </div>

          {/* Content Compact */}
          <div className="p-5 md:p-6 overflow-y-auto custom-scrollbar">
            {service.longDescription && (
              <div className="mb-5">
                <p className="text-gray-300 leading-relaxed text-sm">
                  {service.longDescription}
                </p>
              </div>
            )}

            {service.features && service.features.length > 0 && (
              <div className="space-y-2.5 mb-6">
                <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2 opacity-70">O que está incluso:</h4>
                {service.features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-sm text-gray-400"
                  >
                    <div className="mt-0.5 min-w-[16px] h-[16px] bg-brand-purple/10 rounded-full flex items-center justify-center border border-brand-purple/30">
                      <Check size={9} className="text-brand-purple" />
                    </div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* CTA */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, gostaria de agendar o serviço: *${service.name}*`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 bg-brand-purple hover:bg-brand-accent text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_30px_rgba(168,85,247,0.5)] active:scale-[0.98] text-sm md:text-base"
            >
              Agendar este Serviço <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;