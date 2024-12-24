export interface ServiceType {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  price: number;
}

export interface BookingFormData {
  id: string;
  service: string;
  date: string;
  time: string;
  address: string;
  description: string;
  name: string;
  phone: string;
  status: 'pending' | 'accepted' | 'completed' | 'rejected';
  workerId?: string;
  createdAt: string;
}

export interface Worker {
  id: string;
  name: string;
  specialization: string[];
  rating: number;
  completedJobs: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
}