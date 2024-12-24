import { BookingFormData } from '../types';

export const mockBookings: BookingFormData[] = [
  {
    id: 'booking-1',
    service: 'Refrigerator Repair',
    date: '2024-03-20',
    time: '10:00',
    address: '123 Main St, Apt 4B',
    description: 'Refrigerator not cooling properly',
    name: 'John Doe',
    phone: '555-0123',
    status: 'pending',
    createdAt: '2024-03-19T10:00:00Z'
  },
  {
    id: 'booking-2',
    service: 'AC Repair',
    date: '2024-03-21',
    time: '14:00',
    address: '456 Oak Ave',
    description: 'AC making strange noise',
    name: 'Jane Smith',
    phone: '555-0124',
    status: 'accepted',
    workerId: 'worker-1',
    createdAt: '2024-03-19T11:00:00Z'
  },
  {
    id: 'booking-3',
    service: 'Washing Machine Repair',
    date: '2024-03-22',
    time: '11:00',
    address: '789 Pine St',
    description: 'Water leaking from machine',
    name: 'Mike Johnson',
    phone: '555-0125',
    status: 'completed',
    workerId: 'worker-1',
    createdAt: '2024-03-19T12:00:00Z'
  }
];