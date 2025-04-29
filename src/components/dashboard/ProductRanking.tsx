"use client";

import { Card } from '../ui/Card';

interface ProductRankingProps {
  title?: string;
}

export function ProductRanking({ title = "Ranking de produtos" }: ProductRankingProps) {
  const products = [
    {
      id: 1,
      name: 'Camiseta de Compressão | Modelo X',
      profit: 'R$ 137,11',
      profitCount: '(9)',
      image: '/product1.jpg',
      position: 1
    },
    {
      id: 2,
      name: 'Macaquinho Sexy/Esportivo | Modelo Y',
      profit: 'R$ -68,64',
      profitCount: '(1)',
      image: '/product2.jpg',
      position: 2,
      negative: true
    },
    {
      id: 3,
      name: 'Men Running Pants Zipper Regular',
      profit: 'R$ 0',
      profitCount: '(0)',
      image: '/product3.jpg',
      position: 3,
      neutral: true
    }
  ];

  return (
    <Card className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="relative">
          <select className="bg-gray-700 text-white text-sm rounded-md px-3 py-1 appearance-none pr-8">
            <option>Lucro Líquido</option>
            <option>Receita</option>
            <option>Quantidade</option>
          </select>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-3 bg-gray-700/50 p-3 rounded-lg">
            <div className="w-12 h-12 bg-gray-600 rounded-lg overflow-hidden flex items-center justify-center">
              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <div className="bg-gray-500 w-full h-full flex items-center justify-center text-2xl">
                  {product.position}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                #{product.position} - {product.name}
              </p>
              <p className={`text-sm ${product.negative ? 'text-red-400' : product.neutral ? 'text-gray-400' : 'text-green-400'}`}>
                {product.profit} {product.profitCount}
              </p>
              <p className="text-xs text-gray-400">Lucro Líquido</p>
            </div>
            <button className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}
