import React, { useState } from 'react';
import { ShoppingCart, Hand, Calendar, Headphones, Flag, MoreVertical, TrendingUp, TrendingDown, Eye, DollarSign, Users } from 'lucide-react';

const AdminDashboardSession2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Sample data for the line chart
  const chartData = [
    { label: 'Lbl', click: 680, checkout: 280, views: 450, conversions: 180, revenue: 320 },
    { label: 'Lbl', click: 520, checkout: 320, views: 380, conversions: 220, revenue: 380 },
    { label: 'Lbl', click: 650, checkout: 250, views: 420, conversions: 160, revenue: 290 },
    { label: 'Lbl', click: 580, checkout: 380, views: 400, conversions: 240, revenue: 420 },
    { label: 'Lbl', click: 720, checkout: 420, views: 480, conversions: 280, revenue: 480 },
    { label: 'Lbl', click: 600, checkout: 300, views: 410, conversions: 200, revenue: 350 },
    { label: 'Lbl', click: 680, checkout: 280, views: 450, conversions: 180, revenue: 320 },
    { label: 'Lbl', click: 550, checkout: 350, views: 390, conversions: 230, revenue: 400 },
    { label: 'Lbl', click: 700, checkout: 400, views: 470, conversions: 270, revenue: 460 },
    { label: 'Lbl', click: 620, checkout: 320, views: 430, conversions: 210, revenue: 370 },
    { label: 'Lbl', click: 650, checkout: 280, views: 440, conversions: 190, revenue: 330 },
    { label: 'Lbl', click: 580, checkout: 340, views: 400, conversions: 220, revenue: 390 },
  ];

  const maxValue = 1200;
  const yAxisLabels = [0, 200, 400, 600, 800, 1000, 1200];

  const campaigns = [
    {
      id: 1,
      name: 'Black Friday',
      icon: Calendar,
      iconColor: 'bg-purple-100',
      iconBg: 'text-purple-600',
      dateRange: '22 Nov - 29 Nov 2024',
      budget: '$40,000',
      progress: 50,
      progressColor: 'bg-purple-600',
      progressTextColor: 'text-purple-600',
    },
    {
      id: 2,
      name: 'Audio 30% Off',
      icon: Headphones,
      iconColor: 'bg-green-100',
      iconBg: 'text-green-600',
      dateRange: '01 Aug - 31 Nov 2024',
      budget: '$12,000',
      progress: 100,
      progressColor: 'bg-green-600',
      progressTextColor: 'text-green-600',
    },
    {
      id: 3,
      name: 'Independence Day',
      icon: Flag,
      iconColor: 'bg-orange-100',
      iconBg: 'text-orange-600',
      dateRange: '01 Jul - 15 Jul 2024',
      budget: '$25,000',
      progress: 75,
      progressColor: 'bg-orange-600',
      progressTextColor: 'text-orange-600',
    },
  ];

  const getYPosition = (value) => {
    return 100 - (value / maxValue) * 100;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      {/* Left Section: Statistic */}
      <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Statistic</h3>
          <p className="text-sm text-gray-500">Click vs Checkout</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Checkout Card */}
          <div className="bg-teal-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-teal-600" />
              </div>
            </div>
            <p className="text-xl font-bold text-gray-900 mb-0.5">10,908</p>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <span className="text-xs font-semibold text-green-600">10%</span>
            </div>
          </div>

          {/* Click Card */}
          <div className="bg-red-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <Hand className="w-4 h-4 text-red-600" />
              </div>
            </div>
            <p className="text-xl font-bold text-gray-900 mb-0.5">18,120</p>
            <div className="flex items-center gap-1">
              <TrendingDown className="w-3 h-3 text-red-600" />
              <span className="text-xs font-semibold text-red-600">10%</span>
            </div>
          </div>
        </div>

        {/* Line Graph */}
        <div className="relative">
          {/* Y-axis Labels */}
          <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 pr-2">
            {yAxisLabels.map((label) => (
              <span key={label} className="text-right">
                {label === 0 ? '' : label}
              </span>
            ))}
          </div>

          {/* Chart Area */}
          <div className="ml-8 relative" style={{ height: '350px' }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 350" preserveAspectRatio="none">
              {/* Grid Lines */}
              {yAxisLabels.slice(1).map((label) => {
                const y = (getYPosition(label) / 100) * 350;
                return (
                  <line
                    key={label}
                    x1="0"
                    y1={y}
                    x2="1000"
                    y2={y}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Data Lines */}
              {/* Click Line (Red) - Smooth Curve */}
              <path
                d={(() => {
                  const points = chartData.map((data, index) => {
                    const x = (index / (chartData.length - 1)) * 1000;
                    const y = (getYPosition(data.click) / 100) * 350;
                    return { x, y };
                  });
                  let path = `M ${points[0].x},${points[0].y}`;
                  for (let i = 1; i < points.length; i++) {
                    const cp1x = points[i - 1].x + (points[i].x - points[i - 1].x) / 3;
                    const cp1y = points[i - 1].y;
                    const cp2x = points[i - 1].x + (points[i].x - points[i - 1].x) * 2 / 3;
                    const cp2y = points[i].y;
                    path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${points[i].x},${points[i].y}`;
                  }
                  return path;
                })()}
                fill="none"
                stroke="#ef4444"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Checkout Line (Teal) - Smooth Curve */}
              <path
                d={(() => {
                  const points = chartData.map((data, index) => {
                    const x = (index / (chartData.length - 1)) * 1000;
                    const y = (getYPosition(data.checkout) / 100) * 350;
                    return { x, y };
                  });
                  let path = `M ${points[0].x},${points[0].y}`;
                  for (let i = 1; i < points.length; i++) {
                    const cp1x = points[i - 1].x + (points[i].x - points[i - 1].x) / 3;
                    const cp1y = points[i - 1].y;
                    const cp2x = points[i - 1].x + (points[i].x - points[i - 1].x) * 2 / 3;
                    const cp2y = points[i].y;
                    path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${points[i].x},${points[i].y}`;
                  }
                  return path;
                })()}
                fill="none"
                stroke="#14b8a6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Views Line (Blue) - Smooth Curve */}
              <path
                d={(() => {
                  const points = chartData.map((data, index) => {
                    const x = (index / (chartData.length - 1)) * 1000;
                    const y = (getYPosition(data.views) / 100) * 350;
                    return { x, y };
                  });
                  let path = `M ${points[0].x},${points[0].y}`;
                  for (let i = 1; i < points.length; i++) {
                    const cp1x = points[i - 1].x + (points[i].x - points[i - 1].x) / 3;
                    const cp1y = points[i - 1].y;
                    const cp2x = points[i - 1].x + (points[i].x - points[i - 1].x) * 2 / 3;
                    const cp2y = points[i].y;
                    path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${points[i].x},${points[i].y}`;
                  }
                  return path;
                })()}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Conversions Line (Purple) - Smooth Curve */}
              <path
                d={(() => {
                  const points = chartData.map((data, index) => {
                    const x = (index / (chartData.length - 1)) * 1000;
                    const y = (getYPosition(data.conversions) / 100) * 350;
                    return { x, y };
                  });
                  let path = `M ${points[0].x},${points[0].y}`;
                  for (let i = 1; i < points.length; i++) {
                    const cp1x = points[i - 1].x + (points[i].x - points[i - 1].x) / 3;
                    const cp1y = points[i - 1].y;
                    const cp2x = points[i - 1].x + (points[i].x - points[i - 1].x) * 2 / 3;
                    const cp2y = points[i].y;
                    path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${points[i].x},${points[i].y}`;
                  }
                  return path;
                })()}
                fill="none"
                stroke="#a855f7"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Revenue Line (Green) - Smooth Curve */}
              <path
                d={(() => {
                  const points = chartData.map((data, index) => {
                    const x = (index / (chartData.length - 1)) * 1000;
                    const y = (getYPosition(data.revenue) / 100) * 350;
                    return { x, y };
                  });
                  let path = `M ${points[0].x},${points[0].y}`;
                  for (let i = 1; i < points.length; i++) {
                    const cp1x = points[i - 1].x + (points[i].x - points[i - 1].x) / 3;
                    const cp1y = points[i - 1].y;
                    const cp2x = points[i - 1].x + (points[i].x - points[i - 1].x) * 2 / 3;
                    const cp2y = points[i].y;
                    path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${points[i].x},${points[i].y}`;
                  }
                  return path;
                })()}
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data Points and Hover Effects */}
              {chartData.map((data, index) => {
                const x = (index / (chartData.length - 1)) * 1000;
                const clickY = (getYPosition(data.click) / 100) * 350;
                const checkoutY = (getYPosition(data.checkout) / 100) * 350;
                const viewsY = (getYPosition(data.views) / 100) * 350;
                const conversionsY = (getYPosition(data.conversions) / 100) * 350;
                const revenueY = (getYPosition(data.revenue) / 100) * 350;
                const isHovered = hoveredIndex === index;

                return (
                  <g key={index}>
                    {/* Hover Line */}
                    {isHovered && (
                      <line
                        x1={x}
                        y1="0"
                        x2={x}
                        y2="350"
                        stroke="#ef4444"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        opacity="0.5"
                      />
                    )}

                    {/* Click Point */}
                    <circle
                      cx={x}
                      cy={clickY}
                      r="5"
                      fill="#ef4444"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />

                    {/* Checkout Point */}
                    <circle
                      cx={x}
                      cy={checkoutY}
                      r="5"
                      fill="#14b8a6"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />

                    {/* Views Point */}
                    <circle
                      cx={x}
                      cy={viewsY}
                      r="5"
                      fill="#3b82f6"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />

                    {/* Conversions Point */}
                    <circle
                      cx={x}
                      cy={conversionsY}
                      r="5"
                      fill="#a855f7"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />

                    {/* Revenue Point */}
                    <circle
                      cx={x}
                      cy={revenueY}
                      r="5"
                      fill="#10b981"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />

                  </g>
                );
              })}
            </svg>

            {/* Tooltip */}
            {hoveredIndex !== null && (
              <div
                className="absolute bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-10"
                style={{
                  left: `${(hoveredIndex / (chartData.length - 1)) * 100}%`,
                  top: '10px',
                  transform: `translateX(${(hoveredIndex / (chartData.length - 1)) * 100 > 50 ? '-100%' : '0'})`,
                  minWidth: '160px',
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-red-600">
                    Click : {chartData[hoveredIndex].click}
                  </span>
                  <TrendingUp className="w-3 h-3 text-green-600" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-teal-600">
                    Checkout : {chartData[hoveredIndex].checkout}
                  </span>
                  <TrendingUp className="w-3 h-3 text-green-600" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-blue-600">
                    Views : {chartData[hoveredIndex].views}
                  </span>
                  <TrendingUp className="w-3 h-3 text-green-600" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-purple-600">
                    Conversions : {chartData[hoveredIndex].conversions}
                  </span>
                  <TrendingUp className="w-3 h-3 text-green-600" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-green-600">
                    Revenue : ${chartData[hoveredIndex].revenue}
                  </span>
                  <TrendingUp className="w-3 h-3 text-green-600" />
                </div>
              </div>
            )}
          </div>

          {/* X-axis Labels */}
          <div className="ml-8 mt-2 flex justify-between text-xs text-gray-500">
            {chartData.map((data, index) => (
              <span key={index}>{data.label}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section: Campaign */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Campaign</h3>
          <p className="text-sm text-gray-500">Active Campaign</p>
        </div>

        {/* Campaign Cards */}
        <div className="space-y-4">
          {campaigns.map((campaign) => {
            const Icon = campaign.icon;
            return (
              <div
                key={campaign.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`${campaign.iconColor} p-2 rounded-lg`}>
                      <Icon className={`w-5 h-5 ${campaign.iconBg}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{campaign.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{campaign.dateRange}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gray-600">{campaign.budget}</span>
                    <span className={`text-xs font-semibold ${campaign.progressTextColor}`}>
                      {campaign.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${campaign.progressColor} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardSession2;

