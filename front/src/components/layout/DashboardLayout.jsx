import React, { useState } from 'react';
import Sidebar from '../common/Sidebar';

const DashboardLayout = ({ user, onLogout, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        user={user}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={onLogout}
      />
      
      <main className="flex-1 overflow-auto">
        {children(currentPage)}
      </main>
    </div>
  );
};

export default DashboardLayout;