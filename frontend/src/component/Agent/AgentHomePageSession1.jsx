import React from 'react';
import { UserPlus, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';

const AgentHomePageSession1 = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const metrics = [
    {
      title: t.applicant,
      value: '158',
      trend: '20.2%',
      trendText: t.lastMonth,
      isPositive: true,
      icon: UserPlus,
      chartData: [30, 45, 35, 50, 40, 55, 70], // Heights for mini bar chart
    },
    {
      title: t.interviewed,
      value: '89',
      trend: '15.7%',
      trendText: t.lastMonth,
      isPositive: true,
      icon: Users,
      chartData: [25, 35, 30, 40, 35, 45, 60],
    },
    {
      title: t.hired,
      value: '24',
      trend: '32.4%',
      trendText: t.lastMonth,
      isPositive: false,
      icon: Briefcase,
      chartData: [50, 45, 40, 35, 30, 25, 20],
    },
  ];

  const MiniBarChart = ({ data, isPositive }) => {
    const maxValue = Math.max(...data);
    
    return (
      <div className="flex items-end gap-2 h-14">
        {data.map((value, index) => {
          const height = (value / maxValue) * 100;
          const isLast = index === data.length - 1;
          
          return (
            <div
              key={index}
              className={`w-3 rounded-t ${
                isLast
                  ? isPositive
                    ? 'bg-green-600'
                    : 'bg-red-600'
                  : isPositive
                  ? 'bg-green-200'
                  : 'bg-red-200'
              }`}
              style={{ height: `${height}%` }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex flex-col gap-4"
            >
              {/* Row 1: Icon + Title */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-sm font-medium text-gray-600">
                  {metric.title}
                </h3>
              </div>
              
              {/* Row 2: Value + Chart */}
              <div className="flex items-center justify-between gap-6">
                <div className="flex flex-col">
                  <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span
                      className={`text-sm font-medium ${
                        metric.isPositive ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {metric.isPositive ? '▲' : '▼'} {metric.trend}
                    </span>
                    <span className="text-sm text-gray-500">
                      {metric.trendText}
                    </span>
                  </div>
                </div>
                
                {/* Chart */}
                <div className="flex-shrink-0">
                  <MiniBarChart data={metric.chartData} isPositive={metric.isPositive} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgentHomePageSession1;

