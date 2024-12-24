import React, { useState } from 'react';
import { services } from '../data/services';
import ServiceCard from './ui/ServiceCard/ServiceCard';
import BookingModal from './ui/BookingModal/BookingModal';
import { ServiceType, BookingFormData } from '../types';
import { toast } from './ui/Toast/ToastManager';

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  const handleBookNow = (service: ServiceType) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleBookingSubmit = (data: BookingFormData) => {
    // In a real app, this would make an API call to save the booking
    console.log('Booking submitted:', data);
    toast.success('Booking submitted successfully! We will contact you shortly.');
  };

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Professional repair services for all your home appliances</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBookNow={handleBookNow}
            />
          ))}
        </div>

        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedService={selectedService}
          onSubmit={handleBookingSubmit}
        />
      </div>
    </section>
  );
}