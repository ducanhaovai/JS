import React from 'react';
import {
  Briefcase,
  Building2,
  Calendar,
  Clock,
  Lock,
  Zap,
  FileCheck,
  HelpCircle,
} from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

// Mock data - sẽ lấy từ API hoặc context sau
const mockJobDetail = {
  id: '00304192-9FCD0',
  tags: [
    { label: 'Lựa chọn JoBins', color: 'blue', icon: Lock },
    { label: 'Việc làm ứng tuyển trực tiếp', color: 'blue' },
    { label: 'Nhân viên toàn thời gian (hợp đồng không xác định thời hạn)', color: 'gray' },
  ],
  title: '[Tuyển dụng toàn quốc! ] Bất cứ nơi nào 🌿 ở Nhật Bản, bạn có thể thay đổi công việc ⭕ và bắt đầu quản lý 🏢 xây dựng từ đầu - những người chưa có kinh nghiệm chào đón ⚫ Đào tạo hào phóng và theo dõi để bắt đầu ✨ với sự an tâm Phụ nữ cũng năng động ☀️ -',
  category: 'Kỹ sư kiến trúc và kỹ thuật dân dụng / Quản lý xây dựng / Giám sát xây dựng [Kiến trúc]',
  company: 'Công ty TNHH Nikken Total Sourcing',
  keywords: [
    'Đóng cửa vào Thứ Bảy và Chủ Nhật',
    'Nghỉ thai sản/nghỉ chăm sóc con cái',
    'Hướng đạo OK (tiết lộ tên công ty OK)',
    'Không có kinh nghiệm trong nghề nghiệp OK',
    'Không có kinh nghiệm trong ngành OK',
    'Ấn phẩm truyền thông OK (tiết lộ tên công ty OK)',
    'Hoàn toàn thiếu kinh nghiệm OK',
  ],
  updatedDate: '2025/12/24',
  publishedDate: '2025/11/14',
  lastViewedDate: '2026/01/07',
  commission: {
    company: 'Luôn luôn 770.000 yên',
    full: 'Luôn luôn 770.000 yên',
    sameDayPayment: true,
  },
  annualIncome: '4 triệu yên đến 5 triệu yên',
  applicationCategory: 'Giữa chừng',
  location: 'Hokkaido, tỉnh Aomori, Anh ấy 46 miếng',
  statistics: {
    screeningSpeed: 'Vào ban ngày Tốc độ sàng lọc tài liệu',
    passRate: '82.4%',
    passRateLabel: 'Tỷ lệ vượt qua sàng lọc tài liệu',
  },
};

const JobsDetailSession1 = () => {
  const { jobId } = useParams();
  const { language } = useLanguage();

  const getTagColorClass = (color) => {
    const colors = {
      green: 'bg-green-100 text-green-800 border-green-300',
      orange: 'bg-orange-100 text-orange-800 border-orange-300',
      blue: 'bg-blue-100 text-blue-800 border-blue-300',
      gray: 'bg-gray-100 text-gray-800 border-gray-300',
    };
    return colors[color] || colors.blue;
  };

  // TODO: Fetch job detail by jobId from API
  const job = mockJobDetail;

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex gap-6">
          {/* Left Column - 3/4 width */}
          <div className="flex-[3] space-y-6">
          {/* Job ID and Tags */}
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="text-xs text-gray-600">
                <span className="font-medium">ID tuyển dụng</span> {job.id}
              </div>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-xs font-medium border border-blue-300">
                <Lock className="w-4 h-4" />
                Lựa chọn JoBins
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {job.tags.slice(1).map((tag, index) => (
                <button
                  key={index}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${getTagColorClass(tag.color)}`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* Job Title */}
          <h1 className="text-lg font-semibold text-gray-900 leading-relaxed">
            {job.title}
          </h1>

          {/* Job Category */}
          <div className="flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-medium text-gray-700 mb-1">Phân loại nghề nghiệp</div>
              <div className="text-xs text-gray-900">{job.category}</div>
            </div>
          </div>

          {/* Recruiter */}
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-medium text-gray-700 mb-1">Nhà tuyển dụng</div>
              <div className="text-xs text-gray-900">{job.company}</div>
            </div>
          </div>

          {/* Keywords/Tags */}
          <div className="flex flex-wrap gap-2">
            {job.keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-xs font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>

          {/* Date Information */}
          <div className="space-y-2 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Cập nhật vào {job.updatedDate}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Xuất bản trên {job.publishedDate}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Xem lần cuối {job.lastViewedDate}</span>
            </div>
          </div>
        </div>

        {/* Right Column - 1/4 width */}
        <div className="flex-1 space-y-4">
          {/* Commission Section */}
          <div className="space-y-3">
            {/* Company Commission - Red Box */}
            <div className="bg-red-500 rounded-lg p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[10px] font-medium opacity-90">Công ty bạn</div>
                <button className="bg-white bg-opacity-20 rounded-full p-1 hover:bg-opacity-30 transition-colors">
                  <HelpCircle className="w-3 h-3" />
                </button>
              </div>
              <div className="text-lg font-bold">{job.commission.company}</div>
            </div>

            {/* Full Amount - Blue Box */}
            <div className="bg-blue-500 rounded-lg p-4 text-white">
              <div className="text-[10px] font-medium opacity-90 mb-2">Toàn bộ</div>
              <div className="text-lg font-bold mb-2">{job.commission.full}</div>
              {job.commission.sameDayPayment && (
                <div className="text-[10px] opacity-90">Gửi tiền trong ngày OK</div>
              )}
            </div>
          </div>

          {/* Job Overview */}
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <div>
              <div className="text-xs font-medium text-gray-600 mb-1">Thu nhập hàng năm</div>
              <div className="text-xs font-semibold text-gray-900">{job.annualIncome}</div>
            </div>

            <div>
              <div className="text-xs font-medium text-gray-600 mb-1">Danh mục ứng dụng</div>
              <div className="text-xs font-semibold text-gray-900">{job.applicationCategory}</div>
            </div>

            <div>
              <div className="text-xs font-medium text-gray-600 mb-1">Địa điểm</div>
              <div className="text-xs font-semibold text-gray-900">{job.location}</div>
            </div>
          </div>

          {/* Application Statistics */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 border border-blue-200 rounded-lg">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-xs text-blue-900">{job.statistics.screeningSpeed}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-green-50 border border-green-200 rounded-lg">
              <FileCheck className="w-4 h-4 text-green-600" />
              <div className="flex-1">
                <div className="text-xs font-bold text-green-900">{job.statistics.passRate}</div>
                <div className="text-xs text-green-700">{job.statistics.passRateLabel}</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetailSession1;

