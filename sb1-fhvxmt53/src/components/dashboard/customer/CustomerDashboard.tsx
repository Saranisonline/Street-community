import React from 'react';
import { mockBookings } from '../../../data/mockData';
import DashboardLayout from '../common/DashboardLayout';
import BookingCard from './BookingCard';

export default function CustomerDashboard() {
  const customerBookings = mockBookings.filter(booking => booking.id.startsWith('booking-'));

  return (
    <DashboardLayout title="My Bookings">
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">My Service Requests</h2>
            <div className="space-y-4">
              {customerBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}