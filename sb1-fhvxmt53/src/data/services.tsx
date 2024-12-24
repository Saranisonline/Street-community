import React from 'react';
import { Tv, Refrigerator, Wind, WashingMachine } from 'lucide-react';
import { ServiceType } from '../types';

export const services: ServiceType[] = [
  {
    id: 'refrigerator',
    icon: <Refrigerator className="h-8 w-8" />,
    title: 'Refrigerator Repair',
    description: 'Expert repair for all refrigerator brands and models',
    price: 79
  },
  {
    id: 'washing-machine',
    icon: <WashingMachine className="h-8 w-8" />,
    title: 'Washing Machine Repair',
    description: 'Fix any washing machine issues quickly and efficiently',
    price: 69
  },
  {
    id: 'ac',
    icon: <Wind className="h-8 w-8" />,
    title: 'AC Repair',
    description: 'Professional AC repair and maintenance services',
    price: 89
  },
  {
    id: 'tv',
    icon: <Tv className="h-8 w-8" />,
    title: 'TV Repair',
    description: 'Expert TV repair and installation services',
    price: 59
  }
];