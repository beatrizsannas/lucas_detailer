export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  isPopular?: boolean;
  longDescription?: string; // Texto persuasivo do modal
  features?: string[];      // Lista de itens (bullet points)
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: ServiceItem[];
  image: string;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
}