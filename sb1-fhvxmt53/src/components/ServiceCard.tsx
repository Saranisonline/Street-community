import React from 'react';
import { ServiceType } from '../types';

interface ServiceCardProps {
  service: ServiceType;
  onBookNow: (service: ServiceType) => void;
}

export default function ServiceCard({ service, onBookNow }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="text-blue-600">{service.icon}</div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{service.title}</h3>
      <p className="mt-2 text-gray-600">{service.description}</p>
      <p className="mt-2 text-lg font-semibold text-blue-600">${service.price}</p>
      <button
        onClick={() => onBookNow(service)}
        className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
      >
        Book Now →
      </button>
    </div>
  );
}