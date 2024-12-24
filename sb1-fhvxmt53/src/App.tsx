import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkerDashboard from './components/dashboard/worker/WorkerDashboard';
import CustomerDashboard from './components/dashboard/customer/CustomerDashboard';

function App() {
  const [view, setView] = useState('home');

  const handleViewChange = (newView: string) => {
    setView(newView);
  };

  if (view === 'worker') {
    return <WorkerDashboard />;
  }

  if (view === 'customer') {
    return <CustomerDashboard />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onViewChange={handleViewChange} />
      <Hero />
      <Services />
    </div>
  );
}

export default App;