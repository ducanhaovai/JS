import React from 'react';
import {
  ArrowRight,
  MapPin,
  Building2,
  Briefcase,
  DollarSign,
  Calendar,
  Users,
  CheckCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

// Mock data for job listings
const mockJobs = [
  {
    id: '00304192-9fcd0',
    tags: [
      { label: 'JoBins Selection', color: 'green' },
      { label: 'Ứng tuyển trực tiếp', color: 'orange' },
      { label: 'Nhân viên chính thức (hợp đồng không thời hạn)', color: 'blue' },
    ],
    title: '【Tuyển dụng toàn quốc!】Chuyển việc OK ở bất kỳ đâu tại Nhật Bản. Bắt đầu từ số không trong quản lý thi công xây dựng ~ Chào đón người chưa có kinh nghiệm ● Đào tạo & hỗ trợ chu đáo để bắt đầu yên tâm. Phụ nữ cũng đang hoạt động tích cực ~',
    category: 'Kỹ thuật xây dựng & dân dụng / Quản lý thi công & Giám sát công trình【Xây dựng】',
    company: 'Công ty TNHH Nikken Total Sourcing',
    keywords: [
      'Chấp nhận chưa có kinh nghiệm nghề',
      'Chấp nhận chưa có kinh nghiệm ngành',
      'Chấp nhận hoàn toàn chưa có kinh nghiệm',
      'Đăng tải trên phương tiện truyền thông OK (công khai tên công ty)',
      'Tuyển dụng qua headhunter OK (công khai tên công ty)',
      'Nghỉ thứ 7 và Chủ nhật',
      'Có thành tích nghỉ thai sản/nuôi con',
    ],
    details: [
      'Hỗ trợ toàn quốc, quản lý thi công xây dựng cho người chưa có kinh nghiệm, phí giới thiệu 77 triệu yên, đào tạo chu đáo, tuyển gấp bắt đầu giữa tháng 1',
      'Mã việc làm: 00318682-b9948 - Đảm bảo phỏng vấn cho tất cả ứng viên',
      'Tỉnh Mie Yokkaichi / Kỹ sư bảo trì thiết bị bán dẫn / Chấp nhận chưa có kinh nghiệm',
      'Tuyển chọn tốc độ',
    ],
    commission: {
      company: 'Cố định 77 triệu yên',
      full: 'Cố định 77 triệu yên',
      sameDayPayment: true,
    },
  },
  {
    id: '00180228-54b9a',
    tags: [
      { label: 'JoBins Selection', color: 'green' },
      { label: 'Ứng tuyển trực tiếp', color: 'orange' },
      { label: 'Nhân viên chính thức (hợp đồng không thời hạn)', color: 'blue' },
    ],
    title: 'Thực hiện tuyển chọn 1 ngày! Tuyển chọn tốc độ cao Nhân viên bảo vệ quen thuộc với "Bạn có đang SECOM không?"! (Beat Engineer) ◆ Lương trung bình 621 triệu yên/năm / Thưởng tối đa 198 triệu yên / Có nhà ở công ty & ký túc xá độc thân / OK nghỉ 10 ngày liên tiếp',
    category: 'Công nhân kỹ năng, Thiết bị, Giao thông & Vận tải / Bảo vệ, Bảo vệ',
    company: 'Công ty TNHH SECOM',
    keywords: [
      'Chấp nhận chưa có kinh nghiệm nghề',
      'Chấp nhận chưa có kinh nghiệm ngành',
      'Chấp nhận hoàn toàn chưa có kinh nghiệm',
      'Đăng tải trên phương tiện truyền thông OK (công khai tên công ty)',
      'Tuyển dụng qua headhunter OK (công khai tên công ty)',
      'Có thể sử dụng tiếng Anh',
      'Có chế độ nhà ở công ty / Hỗ trợ tiền thuê nhà',
    ],
    details: [
      'Giới hạn khu vực',
      'Tổ chức hội tuyển chọn 1 ngày',
      'Tuyển chọn tốc độ cao nhanh hơn cả tuyển chọn thông thường',
      'Lịch trình cũng mở vào tháng 1/2026',
    ],
    commission: {
      company: '36% lương lý thuyết hàng năm',
      full: '36% lương lý thuyết hàng năm',
      sameDayPayment: true,
    },
  },
];

const AgentJobsPageSession2 = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const translations = {
    vi: {
      headerTitle: 'JoBins Selection',
      viewSkilledJobs: 'Xem việc làm kỹ năng quốc tế',
      viewNoExpJobs: 'Xem việc làm chấp nhận chưa có kinh nghiệm',
      companyInfo: 'Hội thảo thông tin công ty tuyển dụng',
      jobId: 'Mã việc làm',
      jobCategory: 'Phân loại nghề nghiệp',
      hiringCompany: 'Công ty tuyển dụng',
      companyCommission: 'Công ty bạn',
      fullAmount: 'Toàn bộ',
      sameDayPayment: 'Có thể thanh toán trong ngày',
      viewMore: 'Xem thêm JoBins Selection khác',
    },
    en: {
      headerTitle: 'JoBins Selection',
      viewSkilledJobs: 'View skilled foreign worker jobs',
      viewNoExpJobs: 'View jobs OK for no experience',
      companyInfo: 'Company information session for hiring companies',
      jobId: 'Job ID',
      jobCategory: 'Job Category',
      hiringCompany: 'Hiring Company',
      companyCommission: 'Your company',
      fullAmount: 'Full amount',
      sameDayPayment: 'Same-day deposit OK',
      viewMore: 'View other JoBins Selections',
    },
    ja: {
      headerTitle: 'JoBinsセレクション',
      viewSkilledJobs: '技人国求人を見る',
      viewNoExpJobs: '未経験OK求人を見る',
      companyInfo: '採用企業会社説明会',
      jobId: '求人ID',
      jobCategory: '職種分類',
      hiringCompany: '採用企業',
      companyCommission: '貴社',
      fullAmount: '全額',
      sameDayPayment: '即日入金OK',
      viewMore: '他のJoBinsセレクションを見る',
    },
  };

  const t = translations[language] || translations.vi;

  const getTagColorClass = (color) => {
    const colors = {
      green: 'bg-green-100 text-green-800 border-green-300',
      orange: 'bg-orange-100 text-orange-800 border-orange-300',
      blue: 'bg-blue-100 text-blue-800 border-blue-300',
    };
    return colors[color] || colors.green;
  };

  return (
    <div className="w-full h-full flex flex-col py-6">
      {/* Header */}
      <div className="mb-6 flex-shrink-0">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{t.headerTitle}</h1>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors text-sm font-medium">
            {t.viewSkilledJobs}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium">
            {t.viewNoExpJobs}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium">
            {t.companyInfo}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Job Listings with Scroll */}
      <div className="flex-1 overflow-y-auto pr-2 min-h-0 relative">
        <div className="space-y-6 pb-20">
          {mockJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => navigate(`/agent/jobs/${job.id}`)}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex gap-4">
                {/* Main Content */}
                <div className="flex-1 space-y-4">
                  {/* Job ID */}
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{t.jobId}</span> {job.id}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getTagColorClass(tag.color)}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  {/* Job Title */}
                  <h2 className="text-lg font-semibold text-gray-900 leading-snug">
                    {job.title}
                  </h2>

                  {/* Job Category */}
                  <div className="flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">{t.jobCategory}</span> {job.category}
                    </div>
                  </div>

                  {/* Hiring Company */}
                  <div className="flex items-start gap-2">
                    <Building2 className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">{t.hiringCompany}</span> {job.company}
                    </div>
                  </div>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2">
                    {job.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-md text-xs font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-1 text-sm text-gray-700">
                    {job.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-gray-400">•</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commission Section */}
                <div className="w-48 flex-shrink-0 space-y-3">
                  {/* Company Commission */}
                  <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                    <div className="text-xs font-medium text-red-800 mb-2">
                      {t.companyCommission}
                    </div>
                    <div className="text-lg font-bold text-red-900">
                      {job.commission.company}
                    </div>
                  </div>

                  {/* Full Amount */}
                  <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                    <div className="text-xs font-medium text-blue-800 mb-2">
                      {t.fullAmount}
                    </div>
                    <div className="text-lg font-bold text-blue-900">
                      {job.commission.full}
                    </div>
                    {job.commission.sameDayPayment && (
                      <div className="mt-2 text-xs text-blue-700 font-medium">
                        {t.sameDayPayment}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Button - Floating inside scroll area */}
        <div className="sticky bottom-4 text-center z-10 mt-4">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-2xl">
            {t.viewMore}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentJobsPageSession2;

