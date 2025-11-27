import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ShieldCheck, Zap } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('servicos');
    if (section) {
      // Cálculo manual para garantir precisão, compensando o header
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark z-20" />
        <img 
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Car Detail" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Decorative Neon Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 md:w-96 md:h-96 bg-brand-purple/20 rounded-full blur-[100px] z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 md:w-96 md:h-96 bg-brand-accent/20 rounded-full blur-[100px] z-10 animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 backdrop-blur-md border border-brand-purple/30 text-brand-purple font-medium text-xs md:text-sm mb-6 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
        >
          <ShieldCheck size={14} className="md:w-4 md:h-4" /> 
          <span className="uppercase tracking-wider">Estética Automotiva Premium</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-7xl lg:text-9xl font-display font-black text-white leading-[0.9] tracking-tighter mb-6 md:mb-8"
        >
          LUCAS
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-fuchsia-400 to-brand-accent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            DETAILER
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base md:text-2xl text-gray-300 max-w-xl md:max-w-2xl mx-auto font-light mb-8 md:mb-12 leading-relaxed px-4"
        >
          Elevamos o padrão do seu veículo com detalhamento técnico, proteção avançada e acabamento impecável.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative z-50 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none"
        >
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, vim pelo site e gostaria de agendar um serviço.`}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer w-full sm:w-auto px-8 py-4 bg-brand-purple text-white rounded-xl font-bold font-display tracking-wide hover:bg-brand-accent transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Zap size={20} fill="currentColor" /> AGENDAR AGORA
          </a>
          <a 
            href="#servicos" 
            onClick={scrollToServices}
            className="cursor-pointer w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold font-display tracking-wide hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            VER PREÇOS
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToServices}
        className="absolute bottom-6 md:bottom-10 z-30 text-white/30 hover:text-white cursor-pointer transition-colors pb-4"
      >
        <ChevronDown size={28} className="md:w-8 md:h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;