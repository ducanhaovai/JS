import React from 'react';
import { Users, Building2, Briefcase, CheckCircle, XCircle } from 'lucide-react';

const AdminDashboardSession4 = () => {
  // Data for Registration Chart (Lượt đăng ký)
  const registrationData = [
    { month: 'Tháng 1', ctv: 45, company: 12 },
    { month: 'Tháng 2', ctv: 52, company: 15 },
    { month: 'Tháng 3', ctv: 48, company: 18 },
    { month: 'Tháng 4', ctv: 61, company: 20 },
    { month: 'Tháng 5', ctv: 55, company: 22 },
    { month: 'Tháng 6', ctv: 68, company: 25 },
  ];

  // Data for Application Status Chart (Tình hình ứng tuyển)
  const applicationData = [
    { month: 'Tháng 1', withApplications: 220, withoutApplications: 65 },
    { month: 'Tháng 2', withApplications: 235, withoutApplications: 72 },
    { month: 'Tháng 3', withApplications: 240, withoutApplications: 70 },
    { month: 'Tháng 4', withApplications: 245, withoutApplications: 75 },
    { month: 'Tháng 5', withApplications: 250, withoutApplications: 78 },
    { month: 'Tháng 6', withApplications: 245, withoutApplications: 78 },
  ];

  const maxApplicationValue = Math.max(
    ...applicationData.map(d => Math.max(d.withApplications, d.withoutApplications))
  );

  // Calculate max value for registration chart
  const maxRegistrationValue = Math.max(
    ...registrationData.map(d => Math.max(d.ctv, d.company))
  );
  const chartHeight = 200;
  const chartWidth = 600;
  const barWidth = (chartWidth / registrationData.length) * 0.6;
  const barGap = (chartWidth / registrationData.length) * 0.4;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Chart 1: Lượt đăng ký */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Lượt đăng ký</h3>
          <p className="text-sm text-gray-500">Đăng ký CTV và đăng ký doanh nghiệp</p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <span className="text-sm text-gray-700">Đăng ký CTV</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-600 rounded"></div>
            <span className="text-sm text-gray-700">Đăng ký doanh nghiệp</span>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="relative overflow-x-auto" style={{ height: `${chartHeight + 60}px` }}>
          <svg className="w-full min-w-full" viewBox={`0 0 ${chartWidth + 80} ${chartHeight + 60}`} preserveAspectRatio="xMidYMid meet">
            {/* Y-axis */}
            <line
              x1="50"
              y1="10"
              x2="50"
              y2={chartHeight + 10}
              stroke="#e5e7eb"
              strokeWidth="2"
            />

            {/* X-axis */}
            <line
              x1="50"
              y1={chartHeight + 10}
              x2={chartWidth + 50}
              y2={chartHeight + 10}
              stroke="#e5e7eb"
              strokeWidth="2"
            />

            {/* Y-axis labels */}
            {[0, 20, 40, 60, 80].map((value) => {
              const y = chartHeight + 10 - (value / 80) * chartHeight;
              return (
                <g key={value}>
                  <line
                    x1="45"
                    y1={y}
                    x2="50"
                    y2={y}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                  <text
                    x="40"
                    y={y + 4}
                    textAnchor="end"
                    className="text-xs fill-gray-600"
                    fontSize="12"
                  >
                    {value}
                  </text>
                </g>
              );
            })}

            {/* Bars */}
            {registrationData.map((data, index) => {
              const x = 70 + index * (barWidth + barGap);
              const ctvHeight = (data.ctv / maxRegistrationValue) * chartHeight;
              const companyHeight = (data.company / maxRegistrationValue) * chartHeight;
              const ctvY = chartHeight + 10 - ctvHeight;
              const companyY = chartHeight + 10 - companyHeight;

              return (
                <g key={index}>
                  {/* CTV Bar */}
                  <rect
                    x={x}
                    y={ctvY}
                    width={barWidth / 2 - 2}
                    height={ctvHeight}
                    fill="#3b82f6"
                    rx="2"
                  />
                  <text
                    x={x + (barWidth / 2 - 2) / 2}
                    y={ctvY - 5}
                    textAnchor="middle"
                    className="text-xs fill-gray-700 font-semibold"
                    fontSize="11"
                  >
                    {data.ctv}
                  </text>

                  {/* Company Bar */}
                  <rect
                    x={x + barWidth / 2 + 2}
                    y={companyY}
                    width={barWidth / 2 - 2}
                    height={companyHeight}
                    fill="#a855f7"
                    rx="2"
                  />
                  <text
                    x={x + barWidth / 2 + 2 + (barWidth / 2 - 2) / 2}
                    y={companyY - 5}
                    textAnchor="middle"
                    className="text-xs fill-gray-700 font-semibold"
                    fontSize="11"
                  >
                    {data.company}
                  </text>

                  {/* X-axis label */}
                  <text
                    x={x + barWidth / 2}
                    y={chartHeight + 30}
                    textAnchor="middle"
                    className="text-xs fill-gray-600"
                    fontSize="11"
                  >
                    {data.month.split(' ')[1]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Summary */}
        <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-xs text-gray-600">Tổng CTV</p>
              <p className="text-lg font-bold text-gray-900">
                {registrationData.reduce((sum, d) => sum + d.ctv, 0)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-purple-600" />
            <div>
              <p className="text-xs text-gray-600">Tổng doanh nghiệp</p>
              <p className="text-lg font-bold text-gray-900">
                {registrationData.reduce((sum, d) => sum + d.company, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart 2: Tình hình ứng tuyển */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Tình hình ứng tuyển</h3>
          <p className="text-sm text-gray-500">Số job có và chưa có người ứng tuyển</p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-600 rounded"></div>
            <span className="text-sm text-gray-700">Có người ứng tuyển</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-600 rounded"></div>
            <span className="text-sm text-gray-700">Chưa có người ứng tuyển</span>
          </div>
        </div>

        {/* Line Chart */}
        <div className="relative" style={{ height: `${chartHeight + 60}px` }}>
          <svg className="w-full min-w-full" viewBox={`0 0 ${chartWidth + 80} ${chartHeight + 60}`} preserveAspectRatio="xMidYMid meet">
            {/* Y-axis */}
            <line
              x1="50"
              y1="10"
              x2="50"
              y2={chartHeight + 10}
              stroke="#e5e7eb"
              strokeWidth="2"
            />

            {/* X-axis */}
            <line
              x1="50"
              y1={chartHeight + 10}
              x2={chartWidth + 50}
              y2={chartHeight + 10}
              stroke="#e5e7eb"
              strokeWidth="2"
            />

            {/* Grid Lines */}
            {[0, 50, 100, 150, 200, 250].map((value) => {
              const y = chartHeight + 10 - (value / 300) * chartHeight;
              return (
                <g key={value}>
                  <line
                    x1="45"
                    y1={y}
                    x2="50"
                    y2={y}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                  <line
                    x1="50"
                    y1={y}
                    x2={chartWidth + 50}
                    y2={y}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    opacity="0.5"
                  />
                  <text
                    x="40"
                    y={y + 4}
                    textAnchor="end"
                    className="text-xs fill-gray-600"
                    fontSize="11"
                  >
                    {value}
                  </text>
                </g>
              );
            })}

            {/* With Applications Line */}
            <path
              d={(() => {
                const points = applicationData.map((data, index) => {
                  const x = 70 + index * (barWidth + barGap) + barWidth / 2;
                  const y = chartHeight + 10 - (data.withApplications / 300) * chartHeight;
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

            {/* Without Applications Line */}
            <path
              d={(() => {
                const points = applicationData.map((data, index) => {
                  const x = 70 + index * (barWidth + barGap) + barWidth / 2;
                  const y = chartHeight + 10 - (data.withoutApplications / 300) * chartHeight;
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

            {/* Data Points */}
            {applicationData.map((data, index) => {
              const x = 70 + index * (barWidth + barGap) + barWidth / 2;
              const withY = chartHeight + 10 - (data.withApplications / 300) * chartHeight;
              const withoutY = chartHeight + 10 - (data.withoutApplications / 300) * chartHeight;

              return (
                <g key={index}>
                  {/* With Applications Point */}
                  <circle
                    cx={x}
                    cy={withY}
                    r="4"
                    fill="#10b981"
                  />
                  {/* Without Applications Point */}
                  <circle
                    cx={x}
                    cy={withoutY}
                    r="4"
                    fill="#ef4444"
                  />
                  {/* X-axis label */}
                  <text
                    x={x}
                    y={chartHeight + 30}
                    textAnchor="middle"
                    className="text-xs fill-gray-600"
                    fontSize="11"
                  >
                    {data.month.split(' ')[1]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Summary */}
        <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-xs text-gray-600">Có ứng tuyển</p>
              <p className="text-lg font-bold text-gray-900">
                {applicationData[applicationData.length - 1].withApplications}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-600" />
            <div>
              <p className="text-xs text-gray-600">Chưa có ứng tuyển</p>
              <p className="text-lg font-bold text-gray-900">
                {applicationData[applicationData.length - 1].withoutApplications}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardSession4;

