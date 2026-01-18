import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';

const AgentHomePageSession2 = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredPointIndex, setHoveredPointIndex] = useState(null);
  // Donut chart data - arc segmented ring
  const donutData = [
    { label: 'UI Designer', value: 14, color: '#3B82F6' }, // bright blue
    { label: 'Marketing', value: 27, color: '#1E40AF' }, // dark blue
    { label: 'Graphic Design', value: 8, color: '#60A5FA' }, // light blue
  ];

  const totalEmployees = 49; // 14 + 27 + 8

  // Calculate arc segments with gaps
  const calculateArcSegments = (data, gapDegrees = 24) => {
    const radius = 70; // Radius of the arc centerline
    const centerX = 100;
    const centerY = 100;
    const strokeWidth = 20; // Thick stroke
    const total = data.reduce((sum, item) => sum + item.value, 0);
    
    // Total degrees available (360 - gaps)
    const totalGaps = gapDegrees * data.length;
    const availableDegrees = 360 - totalGaps;
    
    let currentAngle = -90; // Start from top
    const arcs = [];
    
    data.forEach((item, index) => {
      const percentage = item.value / total;
      const sweepAngle = (percentage * availableDegrees);
      
      // Calculate start and end angles in radians
      const startAngleRad = (currentAngle * Math.PI) / 180;
      const endAngleRad = ((currentAngle + sweepAngle) * Math.PI) / 180;
      
      // Calculate arc path using SVG arc command
      const largeArcFlag = sweepAngle > 180 ? 1 : 0;
      
      // Start point
      const x1 = centerX + radius * Math.cos(startAngleRad);
      const y1 = centerY + radius * Math.sin(startAngleRad);
      
      // End point
      const x2 = centerX + radius * Math.cos(endAngleRad);
      const y2 = centerY + radius * Math.sin(endAngleRad);
      
      arcs.push({
        path: `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        color: item.color,
        label: item.label,
        value: item.value,
        strokeWidth: strokeWidth,
      });
      
      // Move to next segment (add sweep angle + gap)
      currentAngle += sweepAngle + gapDegrees;
    });
    
    return arcs;
  };

  const arcSegments = calculateArcSegments(donutData, 30);

  // Combined chart data
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const lineData = [180, 200, 220, 242, 260, 280, 300];
  const barData = [150, 170, 190, 210, 230, 250, 270];
  const maxValue = Math.max(...lineData, ...barData);
  const chartHeight = 180;
  const chartWidth = 800;
  const barWidth = 60;
  const spacing = (chartWidth - (barWidth * months.length)) / (months.length + 1);

  return (
    <div className="w-full">
      <div className="grid grid-cols-[1fr_2fr] gap-6">
        {/* Card 1: Open Position */}
        <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-100 flex flex-col">
          <h3 className="text-base font-semibold text-gray-900 mb-2">{t.openPosition}</h3>
          
          <div className="flex flex-col items-center flex-1">
            {/* Arc Segmented Ring Chart */}
            <div className="relative mb-3 flex-shrink-0" style={{ padding: '8px', overflow: 'visible' }}>
              <svg width="200" height="200" viewBox="-20 -20 240 240" className="drop-shadow-sm" style={{ overflow: 'visible' }}>
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {arcSegments.map((arc, index) => {
                  const isHovered = hoveredIndex === index;
                  return (
                    <g 
                      key={index}
                      style={{
                        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                        transformOrigin: '100px 100px',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <path
                        d={arc.path}
                        fill="none"
                        stroke={arc.color}
                        strokeWidth={isHovered ? arc.strokeWidth + 4 : arc.strokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          filter: isHovered ? 'url(#glow) drop-shadow(0 6px 12px rgba(0,0,0,0.25))' : 'none',
                          transition: 'stroke-width 0.3s ease, filter 0.3s ease',
                        }}
                      />
                    </g>
                  );
                })}
              </svg>
              
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <p className="text-3xl font-bold text-gray-900">{totalEmployees}</p>
                <p className="text-sm text-gray-500">{t.totalEmp}</p>
              </div>
              
              {/* Tooltip Card */}
              {hoveredIndex !== null && (
                <div 
                  className="absolute bg-white rounded-lg shadow-xl border border-gray-200 p-2.5 z-10 pointer-events-none animate-fadeIn"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -130%)',
                    minWidth: '110px',
                  }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: donutData[hoveredIndex].color }}
                      />
                      <span className="text-xs font-medium text-gray-700">
                        {donutData[hoveredIndex].label}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className="text-xl font-bold text-gray-900">
                        {donutData[hoveredIndex].value}
                      </p>
                      <p className="text-xs text-gray-500">
                        {((donutData[hoveredIndex].value / totalEmployees) * 100).toFixed(1)}%
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Legend - 3 columns grid */}
            <div className="grid grid-cols-3 gap-2 w-full mt-auto">
              {donutData.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs font-medium text-gray-900">{item.value}</span>
                  </div>
                  <span className="text-xs text-gray-600 text-center leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: Overviews */}
        <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-100" style={{ overflow: 'visible' }}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-semibold text-gray-900">{t.overviews}</h3>
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Filter className="w-3.5 h-3.5" />
              {t.filters}
            </button>
          </div>
          
          {/* Main Metric */}
          <div className="mb-2">
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-gray-900">1,121</p>
              <div className="flex items-center gap-1">
                <span className="text-green-600 text-xs font-medium">▲ 30.2%</span>
                <span className="text-xs text-gray-500">{t.lastYear}</span>
              </div>
            </div>
          </div>
          
          {/* Combined Chart */}
          <div className="relative" style={{ overflow: 'visible' }}>
            <svg width="100%" height={chartHeight + 30} viewBox={`-20 -50 ${chartWidth + 40} ${chartHeight + 100}`} preserveAspectRatio="xMidYMid meet" style={{ overflow: 'visible' }}>
            {/* Bars */}
            {months.map((month, index) => {
              const barHeight = (barData[index] / maxValue) * chartHeight;
              const x = spacing + index * (barWidth + spacing);
              const y = chartHeight - barHeight;
              const isHighlighted = month === 'Apr';
              
              return (
                <rect
                  key={`bar-${index}`}
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={isHighlighted ? '#3B82F6' : '#E5E7EB'}
                  rx="4"
                />
              );
            })}
            
            {/* Line */}
            <polyline
              points={months.map((month, index) => {
                const x = spacing + index * (barWidth + spacing) + barWidth / 2;
                const y = chartHeight - (lineData[index] / maxValue) * chartHeight;
                return `${x},${y}`;
              }).join(' ')}
              fill="none"
              stroke="#3B82F6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Line points */}
            {months.map((month, index) => {
              const x = spacing + index * (barWidth + spacing) + barWidth / 2;
              const y = chartHeight - (lineData[index] / maxValue) * chartHeight;
              const isHovered = hoveredPointIndex === index;
              
              return (
                <g key={`point-${index}`}>
                  <circle
                    cx={x}
                    cy={y}
                    r={isHovered ? 8 : 6}
                    fill="#3B82F6"
                    stroke="white"
                    strokeWidth={isHovered ? 3 : 2.5}
                    style={{
                      cursor: 'pointer',
                      transition: 'r 0.2s ease, stroke-width 0.2s ease',
                    }}
                    onMouseEnter={() => setHoveredPointIndex(index)}
                    onMouseLeave={() => setHoveredPointIndex(null)}
                  />
                  {isHovered && (
                    <g>
                      <rect
                        x={x - 50}
                        y={y - 40}
                        width="100"
                        height="28"
                        fill="#1F2937"
                        rx="4"
                      />
                      <text
                        x={x}
                        y={y - 23}
                        fill="white"
                        fontSize="11"
                        fontWeight="500"
                        textAnchor="middle"
                      >
                        {lineData[index]} {t.applicantLabel}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
            
            {/* X-axis labels */}
            {months.map((month, index) => {
              const x = spacing + index * (barWidth + spacing) + barWidth / 2;
              return (
                <text
                  key={`label-${index}`}
                  x={x}
                  y={chartHeight + 20}
                  textAnchor="middle"
                  fill="#6B7280"
                  fontSize="11"
                >
                  {month}
                </text>
              );
            })}
          </svg>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AgentHomePageSession2;

