import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { BookingFormData } from '../../../types';
import StatusBadge from '../../ui/StatusBadge';

interface BookingCardProps {
  booking: BookingFormData;
}

export default function BookingCard({ booking }: BookingCardProps) {
  return (
    <div className="border rounded-lg p-4 bg-white">
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
  );
}