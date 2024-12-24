import React from 'react';
import { Home, LogOut, Settings, User } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">FixMyHome</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500">
              <Settings className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500">
              <User className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500">
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}