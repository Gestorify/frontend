"use client";

import { Card } from '../ui/Card';

interface PaymentMethodProps {
  title: string;
  approvedAmount: string;
  approvedCount: string;
  pendingAmount: string;
  pendingCount: string;
  completedAmount: string;
  completedCount: string;
  conversionRate: number;
  color: string;
}

function PaymentMethod({ 
  title, 
  approvedAmount, 
  approvedCount, 
  pendingAmount, 
  pendingCount, 
  completedAmount, 
  completedCount, 
  conversionRate, 
  color 
}: PaymentMethodProps) {
  return (
    <Card className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      
      <div className="flex items-center justify-center mb-4">
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#444"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeDasharray={`${conversionRate}, 100`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-lg font-bold">{conversionRate}%</span>
            <span className="text-xs text-gray-400">Conversão</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-2 mt-auto">
        <div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Aprovados</span>
            <span>{approvedCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{approvedAmount}</span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Pendentes</span>
            <span>{pendingCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{pendingAmount}</span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Completados</span>
            <span>{completedCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{completedAmount}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function PaymentMethods() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <PaymentMethod
        title="Cartões"
        approvedAmount="R$ 154,93"
        approvedCount="(1)"
        pendingAmount="R$ 0"
        pendingCount="(0)"
        completedAmount="R$ 0"
        completedCount="(0)"
        conversionRate={40}
        color="#3b82f6"
      />
      
      <PaymentMethod
        title="Boletos"
        approvedAmount="R$ 0"
        approvedCount="(0)"
        pendingAmount="R$ 0"
        pendingCount="(0)"
        completedAmount="R$ 0"
        completedCount="(0)"
        conversionRate={0}
        color="#6b7280"
      />
      
      <PaymentMethod
        title="Pix"
        approvedAmount="R$ 350,70"
        approvedCount="(2)"
        pendingAmount="R$ 0"
        pendingCount="(0)"
        completedAmount="R$ 309,86"
        completedCount="(2)"
        conversionRate={50}
        color="#8b5cf6"
      />
    </div>
  );
}
