import React, { useState } from 'react';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import ChatWidget from './components/ChatWidget';
import ServiceModal from './components/ServiceModal';
import { CAR_SERVICES, MOTO_SERVICES, CONTACT_INFO } from './constants';
import { Instagram, Phone, Bike, Car } from 'lucide-react';
import { ServiceItem } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<'car' | 'moto'>('car');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-purple selection:text-white flex flex-col">
      {/* Navbar Fixed */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <div className="font-display font-bold text-xl md:text-2xl tracking-tighter flex items-center gap-2">
            <span className="w-2 h-8 bg-brand-purple rounded-full block"></span>
            <div>
              LUCAS <span className="text-brand-purple">DETAILER</span>
            </div>
          </div>
          
          <a 
             href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
             target="_blank"
             rel="noreferrer"
             className="group flex items-center gap-2 text-sm font-bold bg-white/5 hover:bg-brand-purple active:scale-95 px-4 py-2 rounded-full transition-all border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          >
            <Phone size={16} className="text-brand-purple group-hover:text-white transition-colors duration-300" /> 
            <span className="hidden md:inline text-gray-200 group-hover:text-white transition-colors">(84) 99652-2117</span>
            <span className="md:hidden text-gray-200 group-hover:text-white transition-colors">Contato</span>
          </a>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero />

        {/* Services Section */}
        <section id="servicos" className="py-16 md:py-20 relative overflow-hidden bg-brand-dark scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-12">
              <span className="text-brand-purple tracking-widest text-xs font-bold uppercase mb-2 block">Catálogo Oficial</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">NOSSOS <span className="text-brand-purple">SERVIÇOS</span></h2>
              <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">Excelência técnica e produtos de primeira linha para renovar seu veículo.</p>
            </div>

            {/* Tabs - Mobile Optimized (Full Width) */}
            <div className="flex bg-white/5 p-1 rounded-2xl mb-10 md:mb-12 max-w-md mx-auto border border-white/10 relative">
              <button
                onClick={() => setActiveTab('moto')}
                className={`flex-1 py-3 px-4 rounded-xl font-bold font-display tracking-wide transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base relative z-10 ${
                  activeTab === 'moto' 
                    ? 'bg-brand-purple text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Bike size={18} /> MOTOS
              </button>
              <button
                onClick={() => setActiveTab('car')}
                className={`flex-1 py-3 px-4 rounded-xl font-bold font-display tracking-wide transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base relative z-10 ${
                  activeTab === 'car' 
                    ? 'bg-brand-purple text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Car size={18} /> CARROS
              </button>
            </div>

            {/* Grid - Responsive Gaps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {activeTab === 'moto' && MOTO_SERVICES.items.map((item, index) => (
                <ServiceCard 
                  key={item.id} 
                  item={item} 
                  index={index} 
                  onClick={setSelectedService}
                />
              ))}
              {activeTab === 'car' && CAR_SERVICES.items.map((item, index) => (
                <ServiceCard 
                  key={item.id} 
                  item={item} 
                  index={index} 
                  onClick={setSelectedService}
                />
              ))}
            </div>

            {/* Custom Service CTA - Mobile Friendly */}
            <div className="mt-12 md:mt-16 mx-auto max-w-4xl p-6 md:p-8 rounded-2xl bg-gradient-to-br from-brand-card to-[#0a0a0a] border border-white/10 text-center relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-[50px]"></div>
              
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 relative z-10">Serviço Personalizado?</h3>
              <p className="text-gray-400 mb-6 text-sm md:text-base relative z-10 max-w-xl mx-auto">
                Alguns serviços específicos podem não estar listados. Entre em contato para uma avaliação detalhada.
              </p>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, gostaria de um orçamento personalizado.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-block px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] text-sm md:text-base relative z-10 uppercase tracking-wide"
              >
                Solicitar Orçamento
              </a>
            </div>
            
            {/* Padding bottom extra for mobile scrolling */}
            <div className="pb-8"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="bg-[#020202] pt-10 pb-20 md:pb-10 border-t border-white/10 relative overflow-hidden mt-auto">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-50"></div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10">
            <div className="text-center md:text-left w-full md:w-auto">
              <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-2">LUCAS <span className="text-brand-purple">DETAILER</span></h2>
              <p className="text-gray-500 text-sm">Estética automotiva de alto padrão.</p>
            </div>

            <div className="flex flex-col w-full md:w-auto gap-3 md:gap-4">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-center md:justify-start gap-4 text-lg text-gray-300 hover:text-white transition-all p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-purple hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:-translate-y-1"
              >
                <div className="bg-green-600/20 group-hover:bg-green-600 text-green-500 group-hover:text-white p-2.5 rounded-xl transition-colors">
                  <Phone size={22} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">WhatsApp</span>
                  <span className="font-display font-bold">{CONTACT_INFO.phone}</span>
                </div>
              </a>
              
              <a 
                href={CONTACT_INFO.instagramUrl}
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-center md:justify-start gap-4 text-lg text-gray-300 hover:text-white transition-all p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-purple hover:shadow-[0_0_15px_rgba(217,70,239,0.2)] hover:-translate-y-1"
              >
                <div className="bg-purple-600/20 group-hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 text-purple-400 group-hover:text-white p-2.5 rounded-xl transition-all">
                  <Instagram size={22} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Instagram</span>
                  <span className="font-display font-bold">{CONTACT_INFO.instagram}</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/5 text-center text-gray-600 text-xs">
            <p>&copy; {new Date().getFullYear()} Lucas Detailer. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Service Detail Modal */}
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />

      <ChatWidget />
    </div>
  );
}

export default App;