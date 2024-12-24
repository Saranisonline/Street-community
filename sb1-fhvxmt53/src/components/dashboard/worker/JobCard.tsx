import React from 'react';
import { Calendar, CheckCircle, XCircle } from 'lucide-react';
import { BookingFormData } from '../../../types';
import StatusBadge from '../../ui/StatusBadge';

interface JobCardProps {
  booking: BookingFormData;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onComplete: (id: string) => void;
}

export default function JobCard({ booking, onAccept, onReject, onComplete }: JobCardProps) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{booking.service}</h3>
          <p className="text-sm text-gray-600">{booking.description}</p>
          <div className="mt-2 space-y-1 text-sm">
            <p><span className="font-medium">Customer:</span> {booking.name}</p>
            <p><span className="font-medium">Phone:</span> {booking.phone}</p>
            <p><span className="font-medium">Address:</span> {booking.address}</p>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{booking.date} at {booking.time}</span>
            </div>
          </div>
        </div>
        <StatusBadge status={booking.status} />
      </div>
      
      {booking.status === 'pending' && (
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onAccept(booking.id)}
            className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200"
          >
            <CheckCircle className="h-4 w-4" />
            Accept
          </button>
          <button
            onClick={() => onReject(booking.id)}
            className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
          >
            <XCircle className="h-4 w-4" />
            Reject
          </button>
        </div>
      )}
      
      {booking.status === 'accepted' && (
        <div className="mt-4">
          <button
            onClick={() => onComplete(booking.id)}
            className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
          >
            <CheckCircle className="h-4 w-4" />
            Mark as Completed
          </button>
        </div>
      )}
    </div>
  );
}