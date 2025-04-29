"use client";

import { useState } from 'react';

export function TopBar() {
  const [dateRange, setDateRange] = useState('17/04 - 17/04');
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold text-white font-manrope">Financeiro</h1>
        <div className="relative">
          <button className="bg-[#1F2937] hover:bg-[#2D3748] text-white text-sm rounded-md px-3 py-1.5 flex items-center gap-1">
            <span>Filtrar</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-2">
        <button className="bg-[#1F2937] hover:bg-[#2D3748] text-white text-sm rounded-md px-3 py-1.5 font-manrope">
          Hoje
        </button>
        <button className="bg-[#1F2937] hover:bg-[#2D3748] text-white text-sm rounded-md px-3 py-1.5 font-manrope">
          Ontem
        </button>
        <button className="bg-[#1F2937] hover:bg-[#2D3748] text-white text-sm rounded-md px-3 py-1.5 font-manrope">
          7 Dias
        </button>
        <button className="bg-[#1F2937] hover:bg-[#2D3748] text-white text-sm rounded-md px-3 py-1.5 font-manrope">
          Este mês
        </button>
        <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm rounded-md px-3 py-1.5 flex items-center gap-2 font-manrope">
          <span>{dateRange}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
        <div className="relative">
          <button className="bg-[#1F2937] hover:bg-[#2D3748] text-white text-sm rounded-md px-3 py-1.5 flex items-center gap-1 font-manrope">
            <span>Ações</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
