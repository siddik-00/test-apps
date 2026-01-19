import React from 'react';
import { categories } from '../data/mockData';

interface CategoriesProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

const Categories: React.FC<CategoriesProps> = ({ onCategorySelect, selectedCategory }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover books across various genres and subjects to satisfy every reader's taste
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.name)}
              className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                selectedCategory === category.name
                  ? 'border-teal-500 bg-teal-50 shadow-md'
                  : 'border-gray-200 hover:border-teal-300'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className={`font-semibold mb-2 ${
                  selectedCategory === category.name ? 'text-teal-700' : 'text-gray-900'
                }`}>
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.count} books
                </p>
              </div>
            </button>
          ))}
        </div>
        
        {/* Show All Categories Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => onCategorySelect('')}
            className={`px-8 py-3 rounded-lg border-2 font-medium transition-colors ${
              selectedCategory === ''
                ? 'bg-teal-600 text-white border-teal-600'
                : 'border-teal-600 text-teal-600 hover:bg-teal-50'
            }`}
          >
            Show All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;