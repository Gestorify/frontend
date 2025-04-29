"use client";

import { Card } from '../ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: '10/04', receita: 200, despesa: -300, lucro: 100, marketing: 150, impostos: -50 },
  { name: '12/04', receita: 300, despesa: -250, lucro: 150, marketing: 180, impostos: -60 },
  { name: '13/04', receita: 280, despesa: -220, lucro: 160, marketing: 200, impostos: -70 },
  { name: '14/04', receita: 250, despesa: -280, lucro: 130, marketing: 190, impostos: -65 },
  { name: '15/04', receita: 320, despesa: -260, lucro: 170, marketing: 210, impostos: -75 },
  { name: '16/04', receita: 310, despesa: -290, lucro: 140, marketing: 220, impostos: -80 },
  { name: '17/04', receita: 290, despesa: -310, lucro: 120, marketing: 200, impostos: -90 },
];

export function FinancialChart() {
  return (
    <Card className="h-[300px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Resumo Financeiro</h3>
        <div className="flex gap-2">
          <button className="bg-gray-700 p-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="bg-gray-700 p-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '4px' }}
            itemStyle={{ color: '#fff' }}
          />
          <Line type="monotone" dataKey="receita" stroke="#FFD700" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="marketing" stroke="#4169E1" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="lucro" stroke="#FF4500" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="despesa" stroke="#00FF7F" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="impostos" stroke="#9932CC" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
