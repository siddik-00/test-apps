export interface Product {
  id: string;
  title: string;
  author?: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  inStock: boolean;
  isNewArrival?: boolean;
  isBestseller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface CartItem extends Product {
  quantity: number;
}