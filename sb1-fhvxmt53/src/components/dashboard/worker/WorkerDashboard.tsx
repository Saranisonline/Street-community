import React, { useState } from 'react';
import { BookingFormData } from '../../../types';
import { mockBookings } from '../../../data/mockData';
import DashboardLayout from '../common/DashboardLayout';
import JobCard from './JobCard';

export default function WorkerDashboard() {
  const [bookings, setBookings] = useState<BookingFormData[]>(mockBookings);

  const handleAcceptBooking = (bookingId: string) => {
    setBookings(bookings.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: 'accepted', workerId: 'worker-1' }
        : booking
    ));
  };

  const handleRejectBooking = (bookingId: string) => {
    setBookings(bookings.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: 'rejected' }
        : booking
    ));
  };

  const handleCompleteBooking = (bookingId: string) => {
    setBookings(bookings.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: 'completed' }
        : booking
    ));
  };

  return (
    <DashboardLayout title="Worker Dashboard">
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Service Requests</h2>
            <div className="space-y-4">
              {bookings.map((booking) => (
                <JobCard
                  key={booking.id}
                  booking={booking}
                  onAccept={handleAcceptBooking}
                  onReject={handleRejectBooking}
                  onComplete={handleCompleteBooking}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}