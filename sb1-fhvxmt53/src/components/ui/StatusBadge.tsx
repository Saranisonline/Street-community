import React from 'react';

const statusStyles = {
  pending: 'bg-yellow-100 text-yellow-800',
  accepted: 'bg-green-100 text-green-800',
  completed: 'bg-blue-100 text-blue-800',
  rejected: 'bg-red-100 text-red-800',
};

interface StatusBadgeProps {
  status: keyof typeof statusStyles;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`px-2 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}