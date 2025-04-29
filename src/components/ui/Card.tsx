"use client";

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-[#1F2937] rounded-lg p-4 text-white ${className}`}>
      {children}
    </div>
  );
}
