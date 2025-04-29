"use client";

import { Card } from '../ui/Card';

export function SalesGoal() {
  const percentage = 57;
  
  return (
    <Card className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Minha meta</h3>
        <span className="text-xs text-red-400 bg-red-400/20 px-2 py-1 rounded">Prazo da meta vencida</span>
      </div>
      
      <div className="flex items-center justify-center my-4">
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="transparent"
              stroke="#333"
              strokeWidth="2"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="transparent"
              stroke="#06b6d4"
              strokeWidth="3"
              strokeDasharray={`${percentage} 100`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-lg font-bold">{percentage}%</span>
            <span className="text-xs text-gray-400">Completa</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <div className="text-xs text-gray-400">Atual</div>
          <div className="text-lg font-medium text-teal-400">R$28.303,07</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Meta</div>
          <div className="text-lg font-medium">R$50.000,00</div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mt-6">
        <div className="flex flex-col items-center">
          <div className="text-sm font-medium">20,0%</div>
          <div className="text-xs text-gray-400">Cartão</div>
          <div className="w-full h-1 bg-teal-500 rounded-full mt-1"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-sm font-medium">0%</div>
          <div className="text-xs text-gray-400">Boleto</div>
          <div className="w-full h-1 bg-gray-700 rounded-full mt-1"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-sm font-medium">80,0%</div>
          <div className="text-xs text-gray-400">Pix</div>
          <div className="w-full h-1 bg-purple-500 rounded-full mt-1"></div>
        </div>
      </div>
      
      <div className="mt-4 text-right">
        <button className="text-xs text-gray-300 hover:text-white">Editar meta</button>
      </div>
    </Card>
  );
}
