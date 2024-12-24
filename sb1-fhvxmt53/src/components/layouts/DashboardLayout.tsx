import React from 'react';
import { Home, User, Settings, LogOut } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function DashboardLayout({ children, title }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Home className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">FixMyHome</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-md text-gray-400 hover:text-gray-500">
                <Settings className="h-6 w-6" />
              </button>
              <button className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500">
                <User className="h-6 w-6" />
              </button>
              <button className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500">
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h1>
          {children}
        </div>
      </main>
    </div>
  );
}