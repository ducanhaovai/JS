import React from 'react';
import { Bell, Flame, Calendar, ExternalLink, Lightbulb, FileText, Briefcase } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';

const AgentHomePageSession3 = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Combined table data with tags
  const tableData = [
    // Notifications
    {
      id: 1,
      tag: t.notification,
      tagColor: 'bg-blue-100 text-blue-700',
      tagIcon: Bell,
      title: 'HƯỚNG DẪN SỬ DỤNG NỀN TẢNG JOBSHARE CHO CTV',
      date: '18/12/2025',
      description: '',
      action: t.viewDetails,
    },
    // News articles
    {
      id: 2,
      tag: t.news,
      tagColor: 'bg-green-100 text-green-700',
      tagIcon: FileText,
      title: '3 KIỂU ỨNG VIÊN "TƯỞNG LÀ TỐT" NHƯNG TIẾN CỬ KHẢ NĂNG CAO SẼ "RUNG"!',
      date: '26/07/2024',
      description: '',
      isNew: true,
      action: t.readMore,
    },
    {
      id: 3,
      tag: t.news,
      tagColor: 'bg-green-100 text-green-700',
      tagIcon: FileText,
      title: 'VÌ SAO BẠN NÊN "CHẠY" JOB KỸ THUẬT - THAY VÌ CHỈ TẬP TRUNG CHẠY JOB BUNKEI?',
      date: '25/07/2024',
      description: '',
      isNew: true,
      action: t.readMore,
    },
    {
      id: 4,
      tag: t.news,
      tagColor: 'bg-green-100 text-green-700',
      tagIcon: FileText,
      title: 'Phí back 30%-40% TUYỂN KỸ SƯ IT TỪ NƯỚC NGOÀI – LÀM VIỆC TẠI NHẬT BẢN JP',
      date: '24/07/2024',
      description: '',
      isNew: true,
      action: t.readMore,
    },
    {
      id: 5,
      tag: t.news,
      tagColor: 'bg-green-100 text-green-700',
      tagIcon: FileText,
      title: 'Cuối năm, ứng viên chùn chuyển việc – Hiểu quy luật để không mất nhịp đầu năm sau',
      date: '20/07/2024',
      description: '',
      action: t.readMore,
    },
    {
      id: 6,
      tag: t.news,
      tagColor: 'bg-green-100 text-green-700',
      tagIcon: FileText,
      title: 'MỘT SỐ THÁCH THỨC CỦA RECRUITER/HR NHẬT VIỆT NGÀY NAY',
      date: '18/07/2024',
      description: '',
      action: t.readMore,
    },
    {
      id: 7,
      tag: t.news,
      tagColor: 'bg-green-100 text-green-700',
      tagIcon: FileText,
      title: 'Câu hỏi phỏng vấn kinh điển và 3 cấp độ trả lời',
      date: '15/07/2024',
      description: '',
      hasIcon: true,
      action: t.readMore,
    },
    // Events
    {
      id: 8,
      tag: t.event,
      tagColor: 'bg-purple-100 text-purple-700',
      tagIcon: Calendar,
      title: 'Chuỗi hoạt động đào tạo nghiệp vụ cho cộng tác viên lần 2',
      date: '28/09/2025',
      description: 'Webinar',
      action: t.viewDetails,
    },
    // Hot Jobs
    {
      id: 9,
      tag: t.hotJobs,
      tagColor: 'bg-orange-100 text-orange-700',
      tagIcon: Briefcase,
      title: 'HOT JOB BẢO TRÌ - BẢO DƯỠNG',
      date: t.recruiting,
      description: '',
      action: t.viewDetails,
    },
    {
      id: 10,
      tag: t.hotJobs,
      tagColor: 'bg-orange-100 text-orange-700',
      tagIcon: Briefcase,
      title: 'TOP 5 JOB THIẾT KẾ CƠ KHÍ CHỐT NAITEI NHANH',
      date: t.recruiting,
      description: '',
      action: 'Xem chi tiết',
    },
    {
      id: 11,
      tag: t.hotJobs,
      tagColor: 'bg-orange-100 text-orange-700',
      tagIcon: Briefcase,
      title: 'JOB N4-N3/ TUYỂN TỪ VIỆT NAM',
      date: t.recruiting,
      description: '',
      action: 'Xem chi tiết',
    },
    {
      id: 12,
      tag: t.hotJobs,
      tagColor: 'bg-orange-100 text-orange-700',
      tagIcon: Briefcase,
      title: 'JOB PHÍ BACK SIÊU CAO',
      date: t.recruiting,
      description: '',
      action: 'Xem chi tiết',
    },
    // Campaigns
    {
      id: 13,
      tag: t.campaign,
      tagColor: 'bg-red-100 text-red-700',
      tagIcon: Flame,
      title: '25%-30% cho tất cả các đơn tiến cử nyusha thành công trong tháng 1&2/2026',
      date: '08/11/2025 - 28/02/2026',
      description: 'TIẾP TỤC DUY TRÌ CHUỖI CHIẾN DỊCH TUYỂN DỤNG MÙA XUÂN 2026, JobShare tiếp sức cho các cộng tác viên với chính sách nâng hạng 30% với tất cả các đơn tiến cử nyusha thành công trong tháng 1 và 2!',
      action: t.viewDetails,
    },
    {
      id: 14,
      tag: t.campaign,
      tagColor: 'bg-red-100 text-red-700',
      tagIcon: Flame,
      title: 'Phí back CTV siêu hot: 150 man TUYỂN QUẢN LÝ KHÁCH SẠN THEO CẶP Cơ hội bứt phá sự nghiệp trong 4 năm',
      date: '13/12/2025 - 31/05/2026',
      description: 'Không nhầm đâu ạ : 0 Phí back CTV siêu hot: 150 man. Giới thiệu thành công, CTV đổi ngay VF3 đi chơi phố Job ngon, cho người không ngại khó :$ Xứng tầm theo đuổi !!!.',
      action: t.viewDetails,
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      {/* Table Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h3 className="text-base font-bold text-gray-900">{t.informationList}</h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                {t.title}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                {t.category}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                {t.publishDate}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                {t.action}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((item) => {
              const Icon = item.tagIcon;
              return (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {/* Title Column */}
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <p className={`text-xs ${item.isNew ? 'font-semibold' : 'font-medium'} text-gray-900 leading-snug`}>
                          {item.title}
                        </p>
                        {item.isNew && (
                          <span className="px-1.5 py-0.5 bg-blue-600 text-white text-xs font-semibold rounded flex-shrink-0">
                            {t.new}
                          </span>
                        )}
                        {item.hasIcon && (
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <Lightbulb className="w-3.5 h-3.5 text-blue-500" />
                            <Lightbulb className="w-3.5 h-3.5 text-blue-500" />
                          </div>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </td>

                  {/* Category Column */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold ${item.tagColor}`}>
                        <Icon className="w-3.5 h-3.5" />
                        {item.tag}
                      </span>
                      {item.description && item.tag === t.event && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Date Column */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-xs text-gray-600">{item.date}</span>
                  </td>

                  {/* Action Column */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    <button className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
                      {item.action}
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentHomePageSession3;

