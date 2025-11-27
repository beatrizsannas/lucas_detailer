import React from 'react';
import { motion } from 'framer-motion';
import { ServiceItem } from '../types';
import { Star, CheckCircle2, Plus } from 'lucide-react';

interface ServiceCardProps {
  item: ServiceItem;
  index: number;
  onClick: (item: ServiceItem) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      onClick={() => onClick(item)}
      className={`
        relative overflow-hidden group p-5 md:p-6 rounded-2xl
        bg-[#1c1c21] border border-white/10 cursor-pointer
        hover:border-brand-purple/50 transition-all duration-300
        hover:bg-[#25252b] hover:shadow-[0_5px_30px_rgba(168,85,247,0.15)]
        flex flex-col h-full
      `}
    >
      {item.isPopular && (
        <div className="absolute top-0 right-0 bg-brand-purple text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-lg flex items-center gap-1 z-10 uppercase tracking-wider">
          <Star size={10} fill="currentColor" /> Destaque
        </div>
      )}

      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-1 mb-4">
          <h3 className="text-lg md:text-xl font-bold text-white font-display mb-2 group-hover:text-brand-purple transition-colors leading-tight">
            {item.name}
          </h3>
          {item.description && (
            <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
        
        <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-auto">
           <div className="flex items-center gap-1.5 text-brand-purple text-xs font-bold group-hover:text-white transition-colors">
            <Plus size={14} />
            <span>Ver detalhes</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-400 mb-0.5">A partir de</span>
            <span className="text-xl md:text-2xl font-black text-white font-display tracking-wide group-hover:text-brand-accent transition-colors">
              R$ {item.price.toFixed(0)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;