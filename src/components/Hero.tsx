import React from 'react';
import { ChevronRight, Star, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              #1 Online Bookstore in Bangladesh
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Discover Your Next
              <span className="text-teal-600"> Great Read</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore thousands of books from Bangladesh's largest online bookstore. 
              From bestsellers to academic texts, find everything you need to feed your mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center font-medium">
                Browse Books
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-50 transition-colors font-medium">
                View Categories
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-gray-600">Books Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">2M+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="text-3xl font-bold text-gray-900 mr-2">4.8</div>
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Featured Books */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src="https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=200" 
                    alt="Featured Book"
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <h3 className="font-semibold text-sm">Bestseller Fiction</h3>
                  <p className="text-teal-600 font-bold text-sm">৳850</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow mt-8">
                  <img 
                    src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=200" 
                    alt="Academic Book"
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <h3 className="font-semibold text-sm">Academic Guide</h3>
                  <p className="text-teal-600 font-bold text-sm">৳420</p>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200" 
                    alt="Tech Book"
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <h3 className="font-semibold text-sm">Technology</h3>
                  <p className="text-teal-600 font-bold text-sm">৳1200</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=200" 
                    alt="Children Book"
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <h3 className="font-semibold text-sm">Children's Books</h3>
                  <p className="text-teal-600 font-bold text-sm">৳320</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold transform rotate-12">
              50% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;