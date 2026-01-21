import React from 'react';
import { MoreVertical, Eye, TrendingUp, TrendingDown, Minus, Briefcase, Users, Clock } from 'lucide-react';

const AdminDashboardSession3 = () => {
  // Job nhiều lượt xem nhất
  const topViewedJobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Company A',
      views: 1500,
      change: 10,
      changeType: 'up',
    },
    {
      id: 2,
      title: 'Project Manager',
      company: 'Business Corp',
      views: 1310,
      change: -8,
      changeType: 'down',
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Web Solutions',
      views: 1200,
      change: 5,
      changeType: 'up',
    },
    {
      id: 4,
      title: 'Backend Developer',
      company: 'Tech Startup',
      views: 918,
      change: 12,
      changeType: 'up',
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'Cloud Services',
      views: 902,
      change: -12,
      changeType: 'down',
    },
    {
      id: 6,
      title: 'UI/UX Designer',
      company: 'Design Studio',
      views: 801,
      change: 0,
      changeType: 'neutral',
    },
  ];

  // Bảng xếp hạng CTV
  const topCollaborators = [
    {
      id: 1,
      name: 'Nguyen Van A',
      code: 'CTV001',
      nominations: 1240,
      change: 12,
      changeType: 'up',
    },
    {
      id: 2,
      name: 'Tran Thi B',
      code: 'CTV002',
      nominations: 1189,
      change: 0,
      changeType: 'neutral',
    },
    {
      id: 3,
      name: 'Le Van C',
      code: 'CTV003',
      nominations: 1100,
      change: -8,
      changeType: 'down',
    },
    {
      id: 4,
      name: 'Pham Thi D',
      code: 'CTV004',
      nominations: 908,
      change: 10,
      changeType: 'up',
    },
    {
      id: 5,
      name: 'Hoang Van E',
      code: 'CTV005',
      nominations: 900,
      change: 0,
      changeType: 'neutral',
    },
    {
      id: 6,
      name: 'Vu Thi F',
      code: 'CTV006',
      nominations: 870,
      change: 5,
      changeType: 'up',
    },
  ];

  // Hoạt động gần đây
  const recentActivities = [
    {
      id: 1,
      type: 'nomination',
      description: 'Đơn tiến cử mới',
      value: 1509,
      change: 12,
      changeType: 'up',
    },
    {
      id: 2,
      type: 'payment',
      description: 'Thanh toán đã hoàn thành',
      value: 1460,
      change: -5,
      changeType: 'down',
    },
    {
      id: 3,
      type: 'revenue',
      description: 'Doanh thu',
      value: 24500,
      isCurrency: true,
      change: 12,
      changeType: 'up',
    },
    {
      id: 4,
      type: 'candidate',
      description: 'Ứng viên mới',
      value: 982,
      change: 19,
      changeType: 'up',
    },
    {
      id: 5,
      type: 'message',
      description: 'Tin nhắn trực tiếp',
      value: 791,
      change: -25,
      changeType: 'down',
    },
    {
      id: 6,
      type: 'other',
      description: 'Nhiều nguồn khác',
      value: 679,
      change: 11,
      changeType: 'up',
    },
  ];

  const getChangeColor = (changeType) => {
    switch (changeType) {
      case 'up':
        return 'bg-green-100 text-green-700';
      case 'down':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getChangeIcon = (changeType) => {
    switch (changeType) {
      case 'up':
        return <TrendingUp className="w-3 h-3" />;
      case 'down':
        return <TrendingDown className="w-3 h-3" />;
      default:
        return <Minus className="w-3 h-3" />;
    }
  };

  const formatValue = (value, isCurrency = false) => {
    if (isCurrency) {
      return `$${value.toLocaleString('en-US')}`;
    }
    return value.toLocaleString('en-US');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      {/* Widget 1: Job nhiều lượt xem nhất */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Job nhiều lượt xem nhất</h3>
            <p className="text-sm text-gray-500">Việc làm được xem nhiều nhất</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          {topViewedJobs.map((job, index) => (
            <div key={job.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{job.title}</p>
                  <p className="text-xs text-gray-500 truncate">{job.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ml-3">
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">{formatValue(job.views)}</p>
                  <p className="text-xs text-gray-500">lượt xem</p>
                </div>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getChangeColor(job.changeType)}`}>
                  {getChangeIcon(job.changeType)}
                  {job.change > 0 ? '+' : ''}{job.change}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Widget 2: Bảng xếp hạng CTV */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Bảng xếp hạng CTV</h3>
            <p className="text-sm text-gray-500">CTV có nhiều tiến cử nhất</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          {topCollaborators.map((collaborator, index) => (
            <div key={collaborator.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{collaborator.name}</p>
                  <p className="text-xs text-gray-500 truncate">{collaborator.code}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ml-3">
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">{formatValue(collaborator.nominations)}</p>
                  <p className="text-xs text-gray-500">tiến cử</p>
                </div>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getChangeColor(collaborator.changeType)}`}>
                  {getChangeIcon(collaborator.changeType)}
                  {collaborator.change > 0 ? '+' : ''}{collaborator.change}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Widget 3: Hoạt động gần đây */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Hoạt động gần đây</h3>
            <p className="text-sm text-gray-500">Số lượng hoạt động theo danh mục</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          {recentActivities.map((activity) => {
            const getIcon = () => {
              switch (activity.type) {
                case 'nomination':
                  return <Briefcase className="w-5 h-5 text-purple-600" />;
                case 'payment':
                  return <TrendingUp className="w-5 h-5 text-blue-600" />;
                case 'revenue':
                  return <TrendingUp className="w-5 h-5 text-orange-600" />;
                case 'candidate':
                  return <Users className="w-5 h-5 text-blue-600" />;
                case 'message':
                  return <Clock className="w-5 h-5 text-pink-600" />;
                default:
                  return <Clock className="w-5 h-5 text-purple-600" />;
              }
            };

            const getIconBg = () => {
              switch (activity.type) {
                case 'nomination':
                  return 'bg-purple-100';
                case 'payment':
                  return 'bg-blue-100';
                case 'revenue':
                  return 'bg-orange-100';
                case 'candidate':
                  return 'bg-blue-100';
                case 'message':
                  return 'bg-pink-100';
                default:
                  return 'bg-purple-100';
              }
            };

            return (
              <div key={activity.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className={`w-10 h-10 ${getIconBg()} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {getIcon()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{activity.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-3">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">
                      {formatValue(activity.value, activity.isCurrency)}
                    </p>
                  </div>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getChangeColor(activity.changeType)}`}>
                    {getChangeIcon(activity.changeType)}
                    {activity.change > 0 ? '+' : ''}{activity.change}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardSession3;

