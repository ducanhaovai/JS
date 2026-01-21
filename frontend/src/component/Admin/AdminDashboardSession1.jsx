import React from 'react';
import { TrendingDown, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';

const AdminDashboardSession1 = () => {
  const cards = [
    {
      title: 'Income',
      value: '31,300',
      icon: TrendingDown,
      iconColor: 'bg-purple-100',
      iconBg: 'text-purple-600',
      progressLabel: 'Target',
      progressValue: 40,
      progressColor: 'bg-purple-600',
      progressTextColor: 'text-purple-600',
      changePercent: 5,
      changeValue: '+156',
      changeColor: 'text-teal-600',
    },
    {
      title: 'Orders',
      value: '31,300',
      icon: ShoppingCart,
      iconColor: 'bg-teal-100',
      iconBg: 'text-teal-600',
      progressLabel: 'Target',
      progressValue: 100,
      progressColor: 'bg-teal-600',
      progressTextColor: 'text-teal-600',
      changePercent: 5,
      changeValue: '+156',
      changeColor: 'text-teal-600',
    },
    {
      title: 'Profit',
      value: '31,300',
      icon: DollarSign,
      iconColor: 'bg-blue-100',
      iconBg: 'text-blue-600',
      progressLabel: 'Target',
      progressValue: 75,
      progressColor: 'bg-blue-600',
      progressTextColor: 'text-blue-600',
      changePercent: 5,
      changeValue: '+156',
      changeColor: 'text-teal-600',
    },
    {
      title: 'Expenses',
      value: '14,210',
      icon: TrendingUp,
      iconColor: 'bg-orange-100',
      iconBg: 'text-orange-600',
      progressLabel: 'Limit',
      progressValue: 25,
      progressColor: 'bg-orange-600',
      progressTextColor: 'text-orange-600',
      changePercent: 10,
      changeValue: '+$142',
      changeColor: 'text-teal-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-700">{card.title}</h3>
              <div className={`${card.iconColor} p-2 rounded-lg`}>
                <Icon className={`w-5 h-5 ${card.iconBg}`} />
              </div>
            </div>

            {/* Value */}
            <div className="mb-4">
              <p className="text-3xl font-bold text-gray-900">{card.value}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-gray-600">{card.progressLabel}</span>
                <span className={`text-xs font-semibold ${card.progressTextColor}`}>
                  {card.progressValue}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${card.progressColor} h-2 rounded-full transition-all duration-300`}
                  style={{ width: `${card.progressValue}%` }}
                ></div>
              </div>
            </div>

            {/* Change Indicator */}
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${card.changeColor}`}>
                {card.changePercent}% ▲
              </span>
              <span className="text-sm text-gray-500">{card.changeValue}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminDashboardSession1;

