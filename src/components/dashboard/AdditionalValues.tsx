"use client";

import { Card } from '../ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Software e Aplicativos', value: 1085.70, color: '#4f46e5' },
  { name: 'Folha de Pagamento', value: 1600.00, color: '#f59e0b' },
];

export function AdditionalValues() {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <Card className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">Valores adicionais do mês</h3>
      
      <div className="flex items-center gap-6">
        <div className="w-24 h-24">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={40}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex-1">
          <div className="text-2xl font-bold">R$ {total.toFixed(2)}</div>
          
          <div className="space-y-2 mt-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <div className="text-sm">{item.name}</div>
                <div className="text-sm font-medium ml-auto">R$ {item.value.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-auto pt-4">
        <a href="#" className="text-xs text-blue-400 hover:underline">Ver detalhes →</a>
      </div>
    </Card>
  );
}
