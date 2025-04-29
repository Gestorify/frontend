"use client";

import { Card } from '../ui/Card';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: '1', value: 40 },
  { name: '2', value: -30 },
  { name: '3', value: -45 },
  { name: '4', value: -60 },
  { name: '5', value: -20 },
  { name: '6', value: -50 },
  { name: '7', value: -40 },
  { name: '8', value: -55 },
  { name: '9', value: -35 },
  { name: '10', value: -25 },
];

export function ProfitLossChart() {
  return (
    <Card className="flex flex-col h-full">
      <div className="mb-2">
        <h3 className="text-gray-400 text-sm">Lucro Líquido</h3>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold text-red-500">R$ -265,74</p>
          <span className="text-xs text-red-400">↓ 10,9%</span>
        </div>
        <p className="text-xs text-gray-400">a menos neste período</p>
      </div>
      
      <div className="mt-2 flex items-center gap-2">
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={data}>
              <Bar dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.value >= 0 ? "#22c55e" : "#ef4444"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-gray-600"></div>
          <span className="text-xs text-gray-400">Incluir valores adicionais</span>
        </div>
        <a href="#" className="text-xs text-blue-400 hover:underline">Ver detalhes →</a>
      </div>
    </Card>
  );
}
