import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Bot, Phone } from 'lucide-react';
import { ChatMessage, MessageRole } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { CONTACT_INFO } from '../constants';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.MODEL, text: "Olá! Sou o assistente virtual da Lucas Detailer. Como posso ajudar com a estética do seu veículo hoje?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setInputValue("");
    setMessages(prev => [...prev, { role: MessageRole.USER, text: userMessage }]);
    setIsLoading(true);

    const reply = await sendMessageToGemini(userMessage);

    setIsLoading(false);
    setMessages(prev => [...prev, { role: MessageRole.MODEL, text: reply }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  // Função para renderizar texto com negrito (Markdown simples **)
  const renderMessageText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-white">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
              onClick={toggleChat}
              className="bg-brand-purple hover:bg-brand-accent text-white p-3.5 md:p-4 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all group relative"
            >
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform md:w-7 md:h-7" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse"></div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 w-[90vw] md:w-[400px] h-[500px] md:h-[600px] max-h-[80vh] bg-brand-card/95 backdrop-blur-xl border border-brand-purple/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-brand-purple/20 border-b border-brand-purple/20 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-purple rounded-lg">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white">Lucas Detailer AI</h3>
                  <p className="text-xs text-brand-purple font-semibold flex items-center gap-1">
                    <Sparkles size={10} /> Online
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/5 hover:bg-green-600 hover:text-white text-green-400 rounded-lg transition-all"
                  title="Falar no WhatsApp"
                >
                  <Phone size={18} />
                </a>
                <button 
                  onClick={toggleChat} 
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed shadow-sm ${
                      msg.role === MessageRole.USER 
                        ? 'bg-brand-purple text-white rounded-br-none' 
                        : 'bg-[#1E1E24] text-gray-200 rounded-bl-none border border-white/5'
                    }`}
                  >
                    {renderMessageText(msg.text)}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="bg-[#1E1E24] p-3 rounded-xl rounded-bl-none flex gap-2 items-center border border-white/5">
                     <span className="w-1.5 h-1.5 bg-brand-purple rounded-full animate-bounce"></span>
                     <span className="w-1.5 h-1.5 bg-brand-purple rounded-full animate-bounce delay-100"></span>
                     <span className="w-1.5 h-1.5 bg-brand-purple rounded-full animate-bounce delay-200"></span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 md:p-4 bg-black/40 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Digite sua dúvida..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-purple transition-colors placeholder:text-gray-600"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-brand-purple hover:bg-brand-accent text-white p-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;