export interface IPizzaItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  types: string[];
  sizes: number[];
  category: number;
  rating: number;
  description: string;
}

export interface ICartItem {
  id: string;
  name: string;
  imageUrl?: string;
  type: string;
  size: number;
  price?: number;
  count?: number;
}
export interface IOptions {
  currentPage: number | string;
  limit?: number;
  category: string;
  sort: string;
}
