import React from 'react';
import { WrenchIcon, Clock, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Expert Appliance Repair</span>
                <span className="block text-blue-600">When You Need It Most</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Just moved to a new city? We connect you with skilled technicians for quick and reliable appliance repairs. Book a service in minutes!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#book-service" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Book a Service
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="flex items-center space-x-3">
                <WrenchIcon className="h-8 w-8 text-blue-600" />
                <span className="text-gray-700">Expert Technicians</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-8 w-8 text-blue-600" />
                <span className="text-gray-700">Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="text-gray-700">Guaranteed Work</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}