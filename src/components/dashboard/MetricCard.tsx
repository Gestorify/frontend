import { ReactNode } from 'react';
import { Card } from '../ui/Card';

interface MetricCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
  iconBg?: string;
}

export function MetricCard({ title, value, icon, trend, className = '', iconBg = 'bg-blue-500' }: MetricCardProps) {
  return (
    <Card className={`flex items-start gap-3 ${className}`}>
      <div className={`${iconBg} p-2 rounded-full`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-gray-400 text-sm">{title}</h3>
        <div className="flex items-baseline gap-2">
          <p className="text-xl font-bold">{value}</p>
          {trend && (
            <span className={`text-xs ${trend.positive ? 'text-green-400' : 'text-red-400'}`}>
              {trend.positive ? '↑' : '↓'} {trend.value}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
