import { Bike, Car } from 'lucide-react';
import { ServiceCategory } from './types';
import React from 'react';

export const CONTACT_INFO = {
  phone: "(84) 99652-2117",
  whatsapp: "5584996522117",
  owner: "Lucas",
  instagram: "@lucas_detailer",
  instagramUrl: "https://instagram.com/lucas_detailer"
};

export const MOTO_SERVICES: ServiceCategory = {
  id: 'moto',
  title: 'Estética de Motos',
  icon: <Bike className="w-6 h-6" />,
  image: "https://picsum.photos/800/600?grayscale&blur=2", 
  items: [
    { 
      id: 'm1', 
      name: 'Lavagem Básica', 
      price: 20, 
      isPopular: true,
      longDescription: "Manter sua moto limpa não é apenas estética, é conservação. Removemos a sujeira do dia a dia sem agredir a pintura.",
      features: [
        "Lavagem detalhada com shampoo neutro",
        "Limpeza de rodas e relação",
        "Secagem técnica",
        "Aplicação de pretinho nos pneus"
      ]
    },
    { id: 'm2', name: 'Revitalização do Cano', price: 20, features: ["Remoção de oxidação superficial", "Polimento de metais", "Brilho intenso"] },
    { id: 'm3', name: 'Revitalização de Plásticos', price: 40, features: ["Hidratação profunda dos plásticos", "Proteção contra ressecamento", "Acabamento seco (não pega poeira)"] },
    { id: 'm4', name: 'Enceramento Manual', price: 50, features: ["Aplicação de cera premium", "Proteção contra raios UV", "Toque aveludado na pintura"] },
    { id: 'm5', name: 'Clareamento (Pop)', price: 70, features: ["Recuperação da cor original", "Remoção de amarelados", "Proteção plástica"] },
    { 
      id: 'm6', 
      name: 'Vitrificação de Plásticos', 
      price: 100, 
      description: "Proteção de alta durabilidade",
      longDescription: "A proteção definitiva para os plásticos da sua moto. Cria uma camada vitrificada que repele água e sujeira por meses.",
      features: ["Proteção cerâmica de longa duração", "Hidrorrepelência extrema", "Restauração da cor profunda"]
    },
    { 
      id: 'm7', 
      name: 'Polimento Comercial', 
      price: 120, 
      isPopular: true,
      features: ["Correção de microrriscos (teia de aranha)", "Aumento expressivo do brilho", "Proteção selante final"]
    },
  ]
};

export const CAR_SERVICES: ServiceCategory = {
  id: 'car',
  title: 'Estética Automotiva',
  icon: <Car className="w-6 h-6" />,
  image: "https://picsum.photos/800/601?grayscale&blur=2",
  items: [
    { 
      id: 'c1', 
      name: 'Lavagem Básica', 
      price: 40,
      longDescription: "O cuidado essencial que seu carro merece. Utilizamos técnicas seguras para limpar sem criar micro-riscos na sua pintura.",
      features: [
        "Aspiração interna completa",
        "Lavagem externa com shampoo profissional (pH neutro)",
        "Limpeza de caixas de roda",
        "Aplicação de pretinho nos pneus"
      ]
    },
    { 
      id: 'c2', 
      name: 'Clareamento de Farol', 
      price: 60, 
      description: "Valor por unidade",
      longDescription: "Faróis amarelados reduzem a visibilidade noturna e envelhecem seu carro. Recuperamos a transparência e a segurança.",
      features: [
        "Lixamento técnico sequencial",
        "Polimento de refino e lustro",
        "Aplicação de proteção UV"
      ]
    },
    { 
      id: 'c3', 
      name: 'Remoção de Chuva Ácida', 
      price: 50, 
      description: "Com proteção de hidrorrepelência",
      longDescription: "Dirigir com sujeiras e manchas encrustadas nos vidros é um risco para sua família. Aqui realizamos a limpeza profunda e aplicamos uma proteção, fazendo a água deslizar rapidamente em dias de chuva.",
      features: [
        "Descontaminação profunda dos vidros",
        "Remoção total de manchas d'água (chuva ácida)",
        "Cristalização do para-brisa (efeito hidrorrepelente)",
        "Melhora drástica na visibilidade sob chuva"
      ]
    },
    { 
      id: 'c4', 
      name: 'Lavagem de Motor', 
      price: 120, 
      description: "Detalhada e segura",
      longDescription: "Um motor limpo trabalha melhor e valoriza o veículo. Realizamos uma limpeza técnica, isolando componentes sensíveis.",
      features: [
        "Proteção de módulos e partes elétricas",
        "Remoção de graxa e óleo acumulado",
        "Aplicação de verniz de motor (protege borrachas e plásticos)",
        "Aspecto de carro zero km"
      ]
    },
    { 
      id: 'c5', 
      name: 'Higienização Banco de Couro', 
      price: 130,
      longDescription: "O couro acumula suor e bactérias que ressecam o material. Nossa limpeza devolve o aspecto fosco original e a maciez.",
      features: [
        "Limpeza profunda dos poros do couro",
        "Hidratação com condicionador premium",
        "Proteção contra rachaduras"
      ]
    },
    { 
      id: 'c6', 
      name: 'Enceramento Manual', 
      price: 140,
      longDescription: "Proteção e brilho instantâneo. Ideal para quem quer manter a pintura protegida contra o sol e sereno.",
      features: [
        "Descontaminação leve da pintura",
        "Aplicação manual de cera de carnaúba/sintética",
        "Toque extremamente liso",
        "Brilho profundo e proteção por até 3 meses"
      ]
    },
    { 
      id: 'c7', 
      name: 'Higienização Banco de Tecido', 
      price: 180,
      longDescription: "Elimina ácaros, fungos e odores. Utilizamos produtos profissionais para remover a sujeira profunda das fibras do tecido.",
      features: [
        "Aspiração profunda",
        "Aplicação de produto flotador bactericida",
        "Extração da sujeira por sucção",
        "Secagem e neutralização de odores"
      ]
    },
    { 
      id: 'c8', 
      name: 'Polimento Comercial', 
      price: 500, 
      isPopular: true,
      longDescription: "O tratamento de beleza para seu carro. Removemos riscos superficiais e devolvemos o brilho de carro novo.",
      features: [
        "Correção de verniz (remove riscos leves e manchas)",
        "Refino para eliminação de marcas",
        "Lustro para brilho espelhado",
        "Aplicação de selante ou cera de alta proteção"
      ]
    },
  ]
};