import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Fiction', icon: '📚', count: 1250 },
  { id: '2', name: 'Academic', icon: '🎓', count: 890 },
  { id: '3', name: 'Children', icon: '👶', count: 560 },
  { id: '4', name: 'Science', icon: '🔬', count: 340 },
  { id: '5', name: 'History', icon: '📜', count: 280 },
  { id: '6', name: 'Technology', icon: '💻', count: 220 },
  { id: '7', name: 'Religion', icon: '📖', count: 180 },
  { id: '8', name: 'Biography', icon: '👤', count: 150 }
];

export const products: Product[] = [
  {
    id: '1',
    title: 'Himu Series Collection',
    author: 'Humayun Ahmed',
    price: 850,
    originalPrice: 1200,
    discount: 29,
    rating: 4.8,
    reviewCount: 324,
    image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Fiction',
    inStock: true,
    isBestseller: true
  },
  {
    id: '2',
    title: 'HSC Physics Guide',
    author: 'Dr. Rahman',
    price: 420,
    originalPrice: 500,
    discount: 16,
    rating: 4.6,
    reviewCount: 189,
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Academic',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '3',
    title: 'Bengali Folk Tales',
    author: 'Various Authors',
    price: 320,
    rating: 4.5,
    reviewCount: 76,
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Children',
    inStock: true
  },
  {
    id: '4',
    title: 'Modern Web Development',
    author: 'John Smith',
    price: 1200,
    originalPrice: 1500,
    discount: 20,
    rating: 4.9,
    reviewCount: 245,
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Technology',
    inStock: true,
    isBestseller: true
  },
  {
    id: '5',
    title: 'Bangladesh Liberation War',
    author: 'Major Rafiqul Islam',
    price: 650,
    rating: 4.7,
    reviewCount: 156,
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'History',
    inStock: true
  },
  {
    id: '6',
    title: 'Quantum Physics Simplified',
    author: 'Dr. Sarah Johnson',
    price: 890,
    originalPrice: 1100,
    discount: 19,
    rating: 4.4,
    reviewCount: 98,
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Science',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '7',
    title: 'Islamic Philosophy',
    author: 'Imam Al-Ghazali',
    price: 480,
    rating: 4.6,
    reviewCount: 134,
    image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Religion',
    inStock: true
  },
  {
    id: '8',
    title: 'Steve Jobs Biography',
    author: 'Walter Isaacson',
    price: 750,
    originalPrice: 900,
    discount: 17,
    rating: 4.8,
    reviewCount: 267,
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Biography',
    inStock: true,
    isBestseller: true
  }
];