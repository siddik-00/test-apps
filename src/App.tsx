import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { products } from './data/mockData';
import { useCart } from './hooks/useCart';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const cart = useCart();

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = searchQuery === '' || 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.author && product.author.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === '' || 
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product: any) => {
    cart.addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onSearchChange={handleSearchChange}
        onCategorySelect={handleCategorySelect}
        cart={cart}
      />
      
      <main>
        <Hero />
        
        <Categories 
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
        
        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedCategory ? `${selectedCategory} Books` : 'All Books'}
                </h2>
                <p className="text-gray-600">
                  {filteredProducts.length} books found
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>
              
              {/* Sort/Filter Options */}
              <div className="mt-4 md:mt-0">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>
            
            <ProductGrid 
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          </div>
        </section>
      </main>
      
      <Footer />
      <Cart cart={cart} />
    </div>
  );
}

export default App;