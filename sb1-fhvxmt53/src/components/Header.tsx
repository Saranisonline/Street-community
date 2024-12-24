import React from 'react';
import { Home, Menu, User } from 'lucide-react';

interface HeaderProps {
  onViewChange: (view: string) => void;
}

export default function Header({ onViewChange }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">FixMyHome</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600">How it Works</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600">
                <User className="h-6 w-6" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                <button
                  onClick={() => onViewChange('customer')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Customer Dashboard
                </button>
                <button
                  onClick={() => onViewChange('worker')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Worker Dashboard
                </button>
                <button
                  onClick={() => onViewChange('home')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Home
                </button>
              </div>
            </div>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}