import { GoogleGenAI } from "@google/genai";
import { MOTO_SERVICES, CAR_SERVICES, CONTACT_INFO } from "../constants";

const getSystemInstruction = () => {
  const motoList = MOTO_SERVICES.items.map(i => `- ${i.name}: R$${i.price} ${i.description ? '('+i.description+')' : ''}`).join('\n');
  const carList = CAR_SERVICES.items.map(i => `- ${i.name}: R$${i.price} ${i.description ? '('+i.description+')' : ''}`).join('\n');

  return `
    Você é o Assistente Virtual Inteligente do "Lucas Detailer", uma estética automotiva de alto padrão.
    Seu objetivo é ajudar clientes a entender os serviços e tirar dúvidas sobre cuidados automotivos.
    
    Tabela de Preços e Serviços:
    
    MOTOS:
    ${motoList}
    
    CARROS:
    ${carList}
    
    Contato: ${CONTACT_INFO.phone} (${CONTACT_INFO.owner})
    Instagram: ${CONTACT_INFO.instagram}

    Diretrizes:
    1. Seja curto, educado e use um tom profissional e moderno.
    2. Se o cliente perguntar algo que não está na lista, diga para entrar em contato diretamente com o Lucas pelo WhatsApp para um orçamento personalizado.
    3. Sempre formate os valores em Reais (R$).
    4. Tente vender os benefícios dos serviços (ex: Vitrificação protege contra o sol).
    5. Nunca invente preços que não estão na lista.
    6. Se perguntarem o preço, responda direto, não enrole.
  `;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: getSystemInstruction(),
      }
    });

    return response.text || "Desculpe, não consegui processar sua solicitação no momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ocorreu um erro ao conectar com o assistente. Por favor, tente novamente mais tarde.";
  }
};