import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, Bell } from 'lucide-react';
import { useCart } from '../hooks/useCart';

interface HeaderProps {
  onSearchChange: (query: string) => void;
  onCategorySelect: (category: string) => void;
  cart: ReturnType<typeof useCart>;
}

const Header: React.FC<HeaderProps> = ({ onSearchChange, onCategorySelect, cart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  const navItems = [
    { name: 'Books', action: () => onCategorySelect('') },
    { name: 'Fiction', action: () => onCategorySelect('Fiction') },
    { name: 'Academic', action: () => onCategorySelect('Academic') },
    { name: 'Children', action: () => onCategorySelect('Children') },
    { name: 'Technology', action: () => onCategorySelect('Technology') }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-teal-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <span>Free shipping on orders over ৳500</span>
          <div className="hidden md:flex items-center space-x-4">
            <span>Help: +880-1234-567890</span>
            <span>•</span>
            <span>Track Order</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-teal-600">
              BookHaven
            </h1>
            <span className="ml-2 text-sm text-gray-500 hidden md:block">
              Bangladesh's Largest Online Bookstore
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for books, authors, publishers..."
                className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* User Account */}
            <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition-colors">
              <User className="w-6 h-6" />
              <span className="text-sm">Account</span>
            </button>

            {/* Wishlist */}
            <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition-colors">
              <Heart className="w-6 h-6" />
              <span className="text-sm">Wishlist</span>
            </button>

            {/* Notifications */}
            <button className="hidden md:flex items-center text-gray-700 hover:text-teal-600 transition-colors">
              <Bell className="w-6 h-6" />
            </button>

            {/* Cart */}
            <button
              onClick={() => cart.setIsOpen(true)}
              className="relative flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:block">Cart</span>
              {cart.getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex space-x-8 py-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={item.action}
                  className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.action();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-teal-600 font-medium py-2"
              >
                {item.name}
              </button>
            ))}
            <hr />
            <button className="flex items-center space-x-2 text-gray-700 w-full py-2">
              <User className="w-5 h-5" />
              <span>Account</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700 w-full py-2">
              <Heart className="w-5 h-5" />
              <span>Wishlist</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;