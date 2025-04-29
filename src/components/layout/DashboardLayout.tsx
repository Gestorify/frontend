"use client";

import { ReactNode, useState } from 'react';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
  };

  return (
    <div className="flex h-screen bg-[#111827]">
      <Sidebar onToggle={handleSidebarToggle} />
      <div 
        className={`flex-1 overflow-auto transition-all duration-300 ${
          sidebarCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
