import React, { useState } from 'react';
import {
  Gift,
  Award,
  Star,
  Heart,
  ChevronUp,
  ChevronDown,
  Square,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const JobsDetailSession8 = () => {
  const { language } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Translations
  const translations = {
    vi: {
      benefits: 'Lợi ích',
      reward: 'Phần thưởng',
      yes: 'Có',
      bonusDetails: 'Chi tiết tiền thường',
      bonusAfterSecondYear: 'Tiền thường: Sau năm thứ hai',
      incentives: 'Ưu đãi',
      notSpecified: 'Không chỉ định',
      stockOptions: 'Quyền chọn cổ phiếu',
      allowances: 'Phụ cấp',
      travelAllowance: 'Phụ cấp đi lại (toàn bộ)',
      overtimeAllowance: 'Phụ cấp làm thêm giờ (thanh toán thêm tiền lương làm thêm giờ cố định vượt mức)',
      positionAllowance: 'Phụ cấp vị trí',
      travelExpenses: 'Chi phí đi lại được thanh toán',
      skillAllowance: 'Phụ cấp trình độ',
      level1Engineer: 'Kỹ sư quản lý xây dựng cấp 1: 20.000 yên mỗi tháng',
      level1Assistant: 'Trợ lý kỹ sư quản lý xây dựng cấp 1: 10.000 yên mỗi tháng',
      level2Engineer: 'Kỹ sư quản lý xây dựng cấp 2: 5.000 yên mỗi tháng',
      level2Assistant: 'Trợ lý kỹ sư quản lý xây dựng cấp 2: 2.000 yên mỗi tháng',
      benefitDetails: 'Chi tiết quyền lợi',
      esportsClub: 'Tôi hoạt động tích cực trong câu lạc bộ thể thao điện tử, nơi tôi có thể kết nối với những người bạn có cùng sở thích với tất cả khả năng của mình, cả trong công việc và vui chơi!',
      learningSupport: 'Hỗ trợ học tập - Hỗ trợ cuộc sống cá nhân như e-learning, khuôn viên đám mây, nội trú thông minh, v.v.',
      memberBenefits: 'Quyền lợi thành viên (hơn 100.000 bộ phim, du lịch, công viên giải trí, v.v.)',
      healthcareSupport: 'Hỗ trợ y tế - Hiệp hội bảo hiểm y tế, tiêm chủng, Khám sức khỏe, v.v.',
      fullSocialInsurance: 'Bảo hiểm xã hội có đầy đủ',
      healthInsuranceDetail: '* Bảo hiểm y tế (hiệp hội bảo hiểm y tế nội bộ) - Lương hưu của người lao động, bảo hiểm việc làm, bảo hiểm bồi thường cho người lao động',
      companyHousing: 'Nhà ở công ty / ký túc xá đơn lẻ có đầy đủ',
      housingDetail: '- Đã bao gồm đồ nội thất và thiết bị gia dụng / Tiền thuê do công ty chi trả hoàn toàn (* Theo quy định nội bộ)',
      housingSystem: '(Hệ thống nhà ở công ty (ký túc xá))',
      trainingHousing: 'Trong quá trình đào tạo: phí ký túc xá, tiện ích và thiết bị đều miễn phí!',
      afterAssignmentHousing: '- Sau khi phân công: Miễn phí ký túc xá / Chi phí tiện ích / Phí thiết bị khi cần thiết',
      noVehicles: '* Không được phép mang ô tô và xe máy trong quá trình đào tạo',
      healthCheckup: 'Kiểm tra sức khỏe',
      childcareLeave: 'Hệ thống nghỉ phép chăm sóc trẻ em và điều dưỡng (có hồ sơ theo dõi)',
      entertainmentFacility: 'Cơ sở giải trí trong nhà (Katsuura)',
      welfareServices: 'dịch vụ phúc lợi thành viên (trạm phúc lợi)',
      qualificationSystem: '- Hệ thống lấy bằng cấp - Khi bạn đạt được bằng cấp, chúng tôi sẽ thanh toán chi phí thực tế để đạt được nó!',
      qualificationSupport: '[Hỗ trợ đạt được bằng cấp)',
      correspondingQualifications: '< Bằng cấp tương ứng',
      qualificationsList: 'Kiến trúc/Kỹ thuật dân dụng/Công trình điện/Công việc đường ống/Viễn thông/Máy móc xây dựng/Cảnh quan',
      costSubsidy: '< Trợ cấp chi phí>',
      level1EngineerSubsidy: '• Kỹ sư quản lý xây dựng cấp 1: 20.000 yên',
      level1AssistantSubsidy: '• Trợ lý kỹ sư quản lý xây dựng cấp 1: 10.000 yên',
      level2EngineerSubsidy: '• Kỹ sư quản lý xây dựng cấp 2: 5.000 yên',
      newSystem: '<Hệ thống mới (2024-)>',
      newSystemDetail1: '• Đạt được "Trợ lý kỹ sư" bằng cách vượt qua kỳ thi đầu tiên.',
      newSystemDetail2: 'Đạt được "Kỹ sư quản lý xây dựng" bằng cách vượt qua kỳ thi thứ hai',
      newSystemDetail3: 'Với việc nới lòng giới hạn độ tuổi, Việc tham gia kỳ thi đã trở nên dễ dàng hơn',
      maternityLeave: 'Nghỉ thai sản/nghỉ chăm sóc con cái',
      collapse: 'Thu gọn',
      expand: 'Mở rộng',
    },
    en: {
      benefits: 'Benefits',
      reward: 'Reward',
      yes: 'Yes',
      bonusDetails: 'Bonus details',
      bonusAfterSecondYear: 'Bonus: After the second year',
      incentives: 'Incentives',
      notSpecified: 'Not specified',
      stockOptions: 'Stock options',
      allowances: 'Allowances',
      travelAllowance: 'Travel allowance (full)',
      overtimeAllowance: 'Overtime allowance (payment for fixed overtime exceeding the limit)',
      positionAllowance: 'Position allowance',
      travelExpenses: 'Travel expenses reimbursed',
      skillAllowance: 'Skill allowance',
      level1Engineer: 'Construction Management Engineer Level 1: 20,000 yen per month',
      level1Assistant: 'Assistant Construction Management Engineer Level 1: 10,000 yen per month',
      level2Engineer: 'Construction Management Engineer Level 2: 5,000 yen per month',
      level2Assistant: 'Assistant Construction Management Engineer Level 2: 2,000 yen per month',
      benefitDetails: 'Benefit details',
      esportsClub: 'I actively participate in e-sports clubs, where I can connect with friends who share my interests with all my abilities, both at work and at play!',
      learningSupport: 'Learning support - Support for personal life such as e-learning, cloud campus, smart dormitory, etc.',
      memberBenefits: 'Member benefits (over 100,000 movies, travel, entertainment parks, etc.)',
      healthcareSupport: 'Healthcare support - Health insurance association, vaccinations, health check-ups, etc.',
      fullSocialInsurance: 'Full social insurance',
      healthInsuranceDetail: '* Health insurance (internal health insurance association) - Employee pension, unemployment insurance, worker\'s compensation',
      companyHousing: 'Company housing / single dormitory fully equipped',
      housingDetail: '- Includes furniture and appliances / Rent fully paid by the company (* According to internal regulations)',
      housingSystem: '(Company housing system (dormitory))',
      trainingHousing: 'During training: dormitory fees, utilities, and equipment are all free!',
      afterAssignmentHousing: '- After assignment: Free dormitory / Utility costs / Equipment when needed',
      noVehicles: '* Not allowed to bring cars and motorcycles during training',
      healthCheckup: 'Health check-up',
      childcareLeave: 'Childcare and nursing leave system (with tracking records)',
      entertainmentFacility: 'Indoor entertainment facility (Katsuura)',
      welfareServices: 'Member welfare services (welfare station)',
      qualificationSystem: '- Qualification system - When you obtain a qualification, we will pay the actual cost to achieve it!',
      qualificationSupport: '[Support for obtaining qualifications)',
      correspondingQualifications: '< Corresponding qualifications',
      qualificationsList: 'Architecture/Civil Engineering/Electrical Engineering/Piping Work/Telecommunications/Construction Machinery/Landscape',
      costSubsidy: '< Cost subsidy>',
      level1EngineerSubsidy: '• Construction Management Engineer Level 1: 20,000 yen',
      level1AssistantSubsidy: '• Assistant Construction Management Engineer Level 1: 10,000 yen',
      level2EngineerSubsidy: '• Construction Management Engineer Level 2: 5,000 yen',
      newSystem: '<New system (2024-)>',
      newSystemDetail1: '• Achieved "Assistant Engineer" by passing the first exam.',
      newSystemDetail2: 'Achieved "Construction Management Engineer" by passing the second exam',
      newSystemDetail3: 'With relaxed age limits, participating in the exam has become easier',
      maternityLeave: 'Maternity leave/childcare leave',
      collapse: 'Collapse',
      expand: 'Expand',
    },
    ja: {
      benefits: '福利厚生',
      reward: '報酬',
      yes: 'あり',
      bonusDetails: 'ボーナス詳細',
      bonusAfterSecondYear: 'ボーナス: 2年目以降',
      incentives: 'インセンティブ',
      notSpecified: '指定なし',
      stockOptions: 'ストックオプション',
      allowances: '手当',
      travelAllowance: '通勤手当（全額）',
      overtimeAllowance: '残業手当（固定残業代を超える残業代の追加支払い）',
      positionAllowance: '役職手当',
      travelExpenses: '交通費支給',
      skillAllowance: '資格手当',
      level1Engineer: '1級建築施工管理技士: 月額2万円',
      level1Assistant: '1級建築施工管理技士補: 月額1万円',
      level2Engineer: '2級建築施工管理技士: 月額5,000円',
      level2Assistant: '2級建築施工管理技士補: 月額2,000円',
      benefitDetails: '福利厚生の詳細',
      esportsClub: '私はeスポーツクラブに積極的に参加し、仕事でも遊びでも、すべての能力を発揮して同じ興味を持つ友達とつながることができます！',
      learningSupport: '学習支援 - eラーニング、クラウドキャンパス、スマート寮などの個人生活の支援',
      memberBenefits: '会員特典（10万本以上の映画、旅行、テーマパークなど）',
      healthcareSupport: '医療支援 - 健康保険組合、予防接種、健康診断など',
      fullSocialInsurance: '社会保険完備',
      healthInsuranceDetail: '* 健康保険（内部健康保険組合） - 厚生年金、雇用保険、労災保険',
      companyHousing: '社員寮/単身寮完備',
      housingDetail: '- 家具・家電付き / 家賃は会社が全額負担（* 内部規定による）',
      housingSystem: '（社員寮制度（寮））',
      trainingHousing: '研修中: 寮費、光熱費、設備費すべて無料！',
      afterAssignmentHousing: '- 配属後: 寮無料 / 光熱費 / 必要に応じて設備費',
      noVehicles: '* 研修中の自動車・バイクの持ち込み不可',
      healthCheckup: '健康診断',
      childcareLeave: '育児・介護休暇制度（記録追跡付き）',
      entertainmentFacility: '屋内娯楽施設（勝浦）',
      welfareServices: '会員福利サービス（福利ステーション）',
      qualificationSystem: '- 資格取得制度 - 資格を取得した場合、取得に要した実費を支払います！',
      qualificationSupport: '[資格取得支援)',
      correspondingQualifications: '< 対応資格',
      qualificationsList: '建築/土木/電気工事/管工事/通信/建設機械/造園',
      costSubsidy: '< 費用補助>',
      level1EngineerSubsidy: '• 1級建築施工管理技士: 2万円',
      level1AssistantSubsidy: '• 1級建築施工管理技士補: 1万円',
      level2EngineerSubsidy: '• 2級建築施工管理技士: 5,000円',
      newSystem: '<新制度（2024-）>',
      newSystemDetail1: '• 第1次試験に合格して「技士補」を取得。',
      newSystemDetail2: '第2次試験に合格して「建築施工管理技士」を取得',
      newSystemDetail3: '年齢制限の緩和により、試験への参加が容易になりました',
      maternityLeave: '産休・育児休暇',
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
              <Gift className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">{t.benefits}</h2>
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
          <div className="space-y-6">
            {/* Top Section: Reward, Incentives, Stock Options */}
            <div className="grid grid-cols-4 gap-4 pb-4 border-b border-gray-200">
              <div>
                <div className="text-xs font-medium text-gray-700 mb-1">{t.reward}</div>
                <div className="text-xs text-gray-900 mb-2">{t.yes}</div>
                <div className="text-xs font-medium text-gray-700 mb-1">{t.bonusDetails}</div>
                <div className="text-xs text-gray-900">{t.bonusAfterSecondYear}</div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-700 mb-1">{t.incentives}</div>
                <div className="text-xs text-gray-900">{t.notSpecified}</div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-700 mb-1">{t.stockOptions}</div>
                <div className="text-xs text-gray-900">{t.notSpecified}</div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-800">{t.benefits}</h3>
              
              <div className="text-xs text-gray-700 mb-3">{t.maternityLeave}</div>

              {/* Allowances */}
              <div>
                <h4 className="text-xs font-semibold text-gray-800 mb-2">{t.allowances}</h4>
                <div className="space-y-1.5 pl-2">
                  <div className="flex items-start gap-2">
                    <Square className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t.travelAllowance}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Square className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t.overtimeAllowance}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Square className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t.positionAllowance}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Square className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t.travelExpenses}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Square className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-xs text-gray-700">{t.skillAllowance}</span>
                      <div className="mt-1 space-y-0.5 pl-4">
                        <div className="text-xs text-gray-700">- {t.level1Engineer}</div>
                        <div className="text-xs text-gray-700">- {t.level1Assistant}</div>
                        <div className="text-xs text-gray-700">- {t.level2Engineer}</div>
                        <div className="text-xs text-gray-700">- {t.level2Assistant}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit Details Section */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-800">{t.benefitDetails}</h3>
              
              <div className="space-y-2 pl-2">
                <p className="text-xs text-gray-700 leading-relaxed">
                  {t.esportsClub}
                </p>
                
                <div className="text-xs text-gray-700">
                  – {t.learningSupport}
                </div>
                
                <div className="flex items-center gap-1 text-xs text-gray-700">
                  <Heart className="w-3 h-3 text-red-500" />
                  <span>{t.memberBenefits}</span>
                </div>
                
                <div className="text-xs text-gray-700">
                  – {t.healthcareSupport}
                </div>
                
                <div className="flex items-start gap-2">
                  <Square className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-700">{t.fullSocialInsurance}</span>
                </div>
                
                <div className="text-xs text-gray-600 pl-5">{t.healthInsuranceDetail}</div>
                
                <div className="text-xs text-gray-700 mt-2">{t.companyHousing}</div>
                <div className="text-xs text-gray-600 pl-4">{t.housingDetail}</div>
                <div className="text-xs text-gray-600 pl-4">{t.housingSystem}</div>
                
                <div className="text-xs text-gray-700 mt-2">{t.trainingHousing}</div>
                <div className="text-xs text-gray-600 pl-4">{t.afterAssignmentHousing}</div>
                <div className="text-xs text-gray-600 pl-4">{t.noVehicles}</div>
                
                <div className="flex items-start gap-2 mt-2">
                  <Square className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-700">{t.healthCheckup}</span>
                </div>
                
                <div className="flex items-center gap-1 mt-2">
                  <div className="w-3 h-3 bg-red-500 rounded-sm flex-shrink-0" />
                  <span className="text-xs text-gray-700">{t.childcareLeave}</span>
                </div>
                
                <div className="flex items-center gap-1 mt-2">
                  <div className="w-3 h-3 bg-red-500 rounded-sm flex-shrink-0" />
                  <span className="text-xs text-gray-700">{t.entertainmentFacility}</span>
                </div>
                
                <div className="text-xs text-gray-700 mt-2">{t.welfareServices}</div>
                
                <div className="text-xs text-gray-700 mt-2">{t.qualificationSystem}</div>
              </div>
            </div>

            {/* Qualification Support Section */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-800">{t.qualificationSupport}</h3>
              
              <div className="space-y-2 pl-2">
                <div>
                  <h4 className="text-xs font-medium text-gray-800 mb-1">{t.correspondingQualifications}</h4>
                  <div className="text-xs text-gray-700">{t.qualificationsList}</div>
                </div>
                
                <div>
                  <h4 className="text-xs font-medium text-gray-800 mb-1">{t.costSubsidy}</h4>
                  <div className="space-y-1 pl-2">
                    <div className="text-xs text-gray-700">{t.level1EngineerSubsidy}</div>
                    <div className="text-xs text-gray-700">{t.level1AssistantSubsidy}</div>
                    <div className="text-xs text-gray-700">{t.level2EngineerSubsidy}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* New System Section */}
            <div className="space-y-2 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-800">{t.newSystem}</h3>
              <div className="space-y-1.5 pl-2">
                <div className="text-xs text-gray-700">{t.newSystemDetail1}</div>
                <div className="text-xs text-gray-700">{t.newSystemDetail2}</div>
                <div className="text-xs text-gray-700">{t.newSystemDetail3}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsDetailSession8;

