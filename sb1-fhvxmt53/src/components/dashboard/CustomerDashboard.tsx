import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { BookingFormData } from '../../types';
import { mockBookings } from '../../data/mockData';
import StatusBadge from '../ui/StatusBadge';
import DashboardLayout from '../layouts/DashboardLayout';

export default function CustomerDashboard() {
  const customerBookings = mockBookings.filter(booking => booking.id.startsWith('booking-'));

  return (
    <DashboardLayout title="My Bookings">
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">My Service Requests</h2>
            <div className="space-y-4">
              {customerBookings.map((booking: BookingFormData) => (
                <div key={booking.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{booking.service}</h3>
                      <p className="text-sm text-gray-600">{booking.description}</p>
                      <div className="mt-2 space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{booking.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{booking.time}</span>
                        </div>
                        <p><span className="font-medium">Address:</span> {booking.address}</p>
                      </div>
                    </div>
                    <StatusBadge status={booking.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}