import React, { useState } from 'react';
import {
  FileText,
  Clock,
  Calendar,
  ChevronUp,
  ChevronDown,
  Briefcase,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const JobsDetailSession5 = () => {
  const { language } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Translations
  const translations = {
    vi: {
      employmentStatus: 'Tình trạng việc làm',
      fullTimeIndefinite: 'Nhân viên toàn thời gian (hợp đồng không xác định thời hạn)',
      contractDuration: 'Thời hạn hợp đồng',
      trialPeriod: 'Thời gian dùng thử',
      none: 'Không có',
      trialPeriodDetails: 'Chi tiết thời gian dùng thử',
      trainingForContract: '*Thời gian đào tạo dành cho nhân viên hợp đồng (3 tháng đến nửa năm)',
      transitionToFullTime: '*Chuyển sang nhân viên toàn thời gian sau khi phân công tại chỗ',
      workingHours: 'Giờ làm việc',
      trainingHours: '■Thời gian đào tạo: 8:30~17:30',
      workingHoursDetail: '■Giờ làm việc: 8:00~17:00 hoặc 8:30~17:30 (8 giờ làm việc thực tế)',
      workingHoursNote1: '*Thời gian bắt đầu làm việc và giờ làm việc thay đổi một chút tùy thuộc vào điểm đến của dự án.',
      workingHoursNote2: '(Sau khi phân công, nó sẽ dựa trên lịch công ty của nơi bạn được phân công)',
      workingHoursNote3: '*Cả hai đều là 8 giờ làm việc thực tế và 1 giờ nghỉ ngơi.',
      averageOvertime: 'Số giờ làm thêm trung bình hàng tháng',
      overtimeHours: '40 giờ hoặc ít hơn làm thêm giờ',
      overtimeDetails: 'Chi tiết số giờ làm thêm trung bình hàng tháng',
      estimatedOvertime: 'Ước tính ngoài giờ: khoảng 30h ~ 40h',
      applicationCategory: 'Danh mục ứng dụng',
      midWay: 'Giữa chừng',
      collapse: 'Thu gọn',
      expand: 'Mở rộng',
    },
    en: {
      employmentStatus: 'Employment status',
      fullTimeIndefinite: 'Full-time employee (indefinite-term contract)',
      contractDuration: 'Contract duration',
      trialPeriod: 'Trial period',
      none: 'None',
      trialPeriodDetails: 'Trial period details',
      trainingForContract: '*Training period for contract employees (3 months to half a year)',
      transitionToFullTime: '*Transition to full-time employee after on-site assignment',
      workingHours: 'Working hours',
      trainingHours: '■Training hours: 8:30~17:30',
      workingHoursDetail: '■Working hours: 8:00~17:00 or 8:30~17:30 (8 actual working hours)',
      workingHoursNote1: '*Start time and working hours may vary slightly depending on the project destination.',
      workingHoursNote2: '(After assignment, it will be based on the company schedule of the place you are assigned to)',
      workingHoursNote3: '*Both are 8 actual working hours and 1 hour break.',
      averageOvertime: 'Average monthly overtime hours',
      overtimeHours: '40 hours or less overtime',
      overtimeDetails: 'Details of average monthly overtime hours',
      estimatedOvertime: 'Estimated overtime: approximately 30h ~ 40h',
      applicationCategory: 'Application category',
      midWay: 'Mid-way',
      collapse: 'Collapse',
      expand: 'Expand',
    },
    ja: {
      employmentStatus: '雇用形態',
      fullTimeIndefinite: '正社員（無期雇用契約）',
      contractDuration: '契約期間',
      trialPeriod: '試用期間',
      none: 'なし',
      trialPeriodDetails: '試用期間の詳細',
      trainingForContract: '*契約社員向け研修期間（3ヶ月から半年）',
      transitionToFullTime: '*現場配属後、正社員に移行',
      workingHours: '勤務時間',
      trainingHours: '■研修時間: 8:30~17:30',
      workingHoursDetail: '■勤務時間: 8:00~17:00 または 8:30~17:30（実働8時間）',
      workingHoursNote1: '*開始時間と勤務時間は、プロジェクトの目的地によって若干異なる場合があります。',
      workingHoursNote2: '（配属後は、配属先の会社スケジュールに基づきます）',
      workingHoursNote3: '*どちらも実働8時間、休憩1時間です。',
      averageOvertime: '月平均残業時間',
      overtimeHours: '残業40時間以下',
      overtimeDetails: '月平均残業時間の詳細',
      estimatedOvertime: '推定残業: 約30時間〜40時間',
      applicationCategory: '応募カテゴリー',
      midWay: '中途',
      collapse: '折りたたむ',
      expand: '展開',
    },
  };

  const t = translations[language] || translations.vi;

  return (
    <div className="w-3/4 mt-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">{t.employmentStatus}</h2>
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isCollapsed ? (
              <>
                <ChevronDown className="w-4 h-4" />
                <span>{t.expand}</span>
              </>
            ) : (
              <>
                <ChevronUp className="w-4 h-4" />
                <span>{t.collapse}</span>
              </>
            )}
          </button>
        </div>

        {!isCollapsed && (
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column: Employment Status */}
            <div className="space-y-4">
              <div>
                <div className="text-xs font-medium text-gray-700 mb-1">{t.employmentStatus}</div>
                <div className="text-xs text-gray-900">{t.fullTimeIndefinite}</div>
              </div>

              <div>
                <div className="text-xs font-medium text-gray-700 mb-1">{t.contractDuration}</div>
                <div className="w-full h-px bg-gray-300 border-dashed"></div>
              </div>

              <div>
                <div className="text-xs font-medium text-gray-700 mb-1">{t.trialPeriod}</div>
                <div className="text-xs text-gray-900">{t.none}</div>
              </div>

              <div>
                <div className="text-xs font-medium text-gray-700 mb-1">{t.trialPeriodDetails}</div>
                <div className="space-y-1">
                  <div className="text-xs text-gray-900">{t.trainingForContract}</div>
                  <div className="text-xs text-gray-900">{t.transitionToFullTime}</div>
                </div>
              </div>

              <div>
                <div className="text-xs font-medium text-gray-700 mb-1">{t.workingHours}</div>
                <div className="space-y-1.5">
                  <div className="text-xs text-gray-900">{t.trainingHours}</div>
                  <div className="text-xs text-gray-900">{t.workingHoursDetail}</div>
                  <div className="text-xs text-gray-700 mt-2">{t.workingHoursNote1}</div>
                  <div className="text-xs text-gray-700">{t.workingHoursNote2}</div>
                  <div className="text-xs text-gray-700">{t.workingHoursNote3}</div>
                </div>
              </div>

              <div>
                <div className="text-xs font-medium text-gray-700 mb-1">{t.averageOvertime}</div>
                <div className="text-xs text-gray-900">{t.overtimeHours}</div>
              </div>

              <div>
                <div className="text-xs font-medium text-gray-700 mb-1">{t.overtimeDetails}</div>
                <div className="text-xs text-gray-900">{t.estimatedOvertime}</div>
              </div>
            </div>

            {/* Right Column: Application Category */}
            <div className="space-y-4">
              <div>
                <div className="text-xs font-medium text-gray-700 mb-1">{t.applicationCategory}</div>
                <div className="text-xs text-gray-900">{t.midWay}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsDetailSession5;

