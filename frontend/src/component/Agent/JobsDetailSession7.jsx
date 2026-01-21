import React, { useState } from 'react';
import {
  DollarSign,
  TrendingUp,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const JobsDetailSession7 = () => {
  const { language } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Translations
  const translations = {
    vi: {
      salary: 'Lương',
      annualIncome: 'Thu nhập hàng năm',
      annualIncomeValue: '4 triệu yên đến 5 triệu yên',
      salaryDetails: 'Chi tiết mức lương',
      monthlySalary: 'Lương hàng tháng',
      monthlySalaryValue: '230.000 yên ~ + tiền thưởng hai lần một năm',
      overtimeNote: '* Làm thêm giờ được trả riêng',
      salaryDetermination: '* Được xác định theo quy định của chúng tôi sau khi xem xét kinh nghiệm, kỹ năng, khả năng, tuổi tác, v.v.',
      salaryIncrease: 'Tăng lương: Mỗi năm một lần (tháng Tư)',
      incomeExamples: 'Ví dụ về thu nhập',
      monthlyIncomeExample: '■ Ví dụ về thu nhập hàng tháng: 300.000 yên (năm đầu tiên làm việc / Lương hàng tháng 230.000 yên + các khoản phụ cấp khác nhau + tiền làm thêm giờ)',
      annualIncomeExample: '■ Ví dụ về thu nhập hàng năm: 4 triệu yên trở lên (khoảng 3 năm làm việc)',
      incomeExampleNote: '*Ví dụ về thu nhập là gần đúng và thay đổi tùy thuộc vào khả năng và hoạt động [Kế hoạch nghề nghiệp]',
      careerProgression: 'Hệ thống phát triển nghề nghiệp',
      clearSystem: '* Một hệ thống rõ ràng',
      year1to2: '1st to 2nd year',
      year1to2Detail: 'Thu nhập trung bình hàng năm là 4 triệu yên cho trợ lý quản lý xây dựng (chuẩn bị tài liệu, kiểm tra công trường)',
      year3to5: '3rd to 5th year',
      year3to5Detail: 'Thu nhập trung bình hàng năm của kỹ sư quản lý xây dựng có kinh nghiệm (quản lý cuộc họp/quy trình) 4,5 triệu yên',
      year6to9: '6th to 9th year',
      year6to9Detail: 'Kỹ sư quản lý xây dựng trung cấp (phụ trách quy mô lớn và nhiều công trường) Thu nhập trung bình hàng năm là 5,5 triệu yên',
      year10plus: 'From 10th year',
      year10plusDetail: 'Kỹ sư quản lý xây dựng cao cấp (phát triển nguồn nhân lực, điều phối toàn công ty) thu nhập trung bình hàng năm là 6,5 triệu yên',
      monthlySalaryFrom: 'Từ 230.000 yên',
      collapse: 'Thu gọn',
      expand: 'Mở rộng',
    },
    en: {
      salary: 'Salary',
      annualIncome: 'Annual income',
      annualIncomeValue: '4 million yen to 5 million yen',
      salaryDetails: 'Salary details',
      monthlySalary: 'Monthly salary',
      monthlySalaryValue: '230,000 yen ~ + twice-yearly bonus',
      overtimeNote: '* Overtime is paid separately',
      salaryDetermination: '* Determined according to our regulations after considering experience, skills, abilities, age, etc.',
      salaryIncrease: 'Salary increase: Once a year (April)',
      incomeExamples: 'Examples of income',
      monthlyIncomeExample: '■ Example of monthly income: 300,000 yen (first year of work / Monthly salary 230,000 yen + various allowances + overtime pay)',
      annualIncomeExample: '■ Example of annual income: 4 million yen or more (approx. 3 years of work)',
      incomeExampleNote: '*Income examples are approximate and subject to change depending on ability and performance [Career plan]',
      careerProgression: 'Career Progression System',
      clearSystem: '* A clear system',
      year1to2: '1st to 2nd year',
      year1to2Detail: 'Average annual income is 4 million yen for construction management assistant (document preparation, site inspection)',
      year3to5: '3rd to 5th year',
      year3to5Detail: 'Average annual income for experienced construction management engineer (meeting/process management) is 4.5 million yen',
      year6to9: '6th to 9th year',
      year6to9Detail: 'Mid-level construction management engineer (responsible for large scale and multiple sites) Average annual income is 5.5 million yen',
      year10plus: 'From 10th year',
      year10plusDetail: 'Senior construction management engineer (human resource development, company-wide coordination) average annual income is 6.5 million yen',
      monthlySalaryFrom: 'From 230,000 yen',
      collapse: 'Collapse',
      expand: 'Expand',
    },
    ja: {
      salary: '給与',
      annualIncome: '年収',
      annualIncomeValue: '400万円から500万円',
      salaryDetails: '給与詳細',
      monthlySalary: '月給',
      monthlySalaryValue: '23万円〜 + 年2回のボーナス',
      overtimeNote: '* 残業代は別途支払われます',
      salaryDetermination: '* 経験、スキル、能力、年齢などを考慮した上で、当社の規定に従って決定されます',
      salaryIncrease: '昇給: 年1回（4月）',
      incomeExamples: '収入の例',
      monthlyIncomeExample: '■ 月収の例: 30万円（初年度 / 月給23万円 + 各種手当 + 残業代）',
      annualIncomeExample: '■ 年収の例: 400万円以上（約3年勤務）',
      incomeExampleNote: '*収入の例は概算であり、能力と実績に応じて変更される場合があります [キャリアプラン]',
      careerProgression: 'キャリア進歩システム',
      clearSystem: '* 明確なシステム',
      year1to2: '1年目から2年目',
      year1to2Detail: '建設管理アシスタント（書類準備、現場検査）の平均年収は400万円',
      year3to5: '3年目から5年目',
      year3to5Detail: '経験豊富な建設管理エンジニア（会議/工程管理）の平均年収は450万円',
      year6to9: '6年目から9年目',
      year6to9Detail: '中級建設管理エンジニア（大規模および複数現場担当）平均年収は550万円',
      year10plus: '10年目以降',
      year10plusDetail: '上級建設管理エンジニア（人材開発、全社調整）平均年収は650万円',
      monthlySalaryFrom: '23万円から',
      collapse: '折りたたむ',
      expand: '展開',
    },
  };

  const t = translations[language] || translations.vi;

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">{t.salary}</h2>
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
            {/* Left Column */}
            <div className="space-y-4">
              {/* Annual Income */}
              <div>
                <div className="text-xs font-medium text-gray-700 mb-1">{t.annualIncome}</div>
                <div className="text-sm font-semibold text-gray-900">{t.annualIncomeValue}</div>
              </div>

              {/* Salary Details */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <h3 className="text-xs font-semibold text-gray-800">{t.salaryDetails}</h3>
                
                <div>
                  <div className="text-xs font-medium text-gray-700 mb-1">{t.monthlySalary}</div>
                  <div className="text-xs text-gray-900">{t.monthlySalaryValue}</div>
                </div>

                <div className="text-xs text-gray-700">{t.overtimeNote}</div>

                <div className="text-xs text-gray-700">{t.salaryDetermination}</div>

                <div className="text-xs text-gray-900">{t.salaryIncrease}</div>

                {/* Income Examples */}
                <div className="mt-3">
                  <div className="text-xs font-medium text-gray-800 mb-2">{t.incomeExamples}</div>
                  <div className="space-y-1.5">
                    <div className="text-xs text-gray-700">{t.monthlyIncomeExample}</div>
                    <div className="text-xs text-gray-700">{t.annualIncomeExample}</div>
                    <div className="text-xs text-gray-600 italic mt-2">{t.incomeExampleNote}</div>
                  </div>
                </div>

                {/* Career Progression System */}
                <div className="mt-4">
                  <div className="text-xs font-medium text-gray-800 mb-2">{t.careerProgression}</div>
                  <div className="text-xs text-gray-700 mb-3">{t.clearSystem}</div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-medium text-gray-900 mb-1">{t.year1to2}</div>
                      <div className="text-xs text-gray-700">{t.year1to2Detail}</div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-medium text-gray-900 mb-1">{t.year3to5}</div>
                      <div className="text-xs text-gray-700">{t.year3to5Detail}</div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-medium text-gray-900 mb-1">{t.year6to9}</div>
                      <div className="text-xs text-gray-700">{t.year6to9Detail}</div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-medium text-gray-900 mb-1">{t.year10plus}</div>
                      <div className="text-xs text-gray-700">{t.year10plusDetail}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <div className="text-xs font-medium text-gray-700 mb-1">{t.monthlySalary}</div>
                <div className="text-sm font-semibold text-gray-900">{t.monthlySalaryFrom}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsDetailSession7;

