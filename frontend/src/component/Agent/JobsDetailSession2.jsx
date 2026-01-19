import React, { useState } from 'react';
import {
  FileText,
  User,
  MessageCircle,
  Calendar,
  GraduationCap,
  Globe,
  Briefcase,
  Building2,
  Car,
  Smile,
  Users,
  AlertTriangle,
  XCircle,
  Heart,
  Star,
  Info,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const JobsDetailSession2 = () => {
  const { language } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Translations
  const translations = {
    vi: {
      requiredConditions: 'Điều Kiện Cần Có',
      technicalSpecs: 'Thông số kỹ thuật',
      age: 'Tuổi tác',
      ageValue: '20 đến 34 tuổi',
      companyExperience: 'Số lượng công ty có kinh nghiệm',
      dontAsk: 'Đừng hỏi',
      trainingDetails: 'Chi tiết đào tạo',
      trainingValue: 'Tốt nghiệp trung học phổ thông trở lên',
      trainingNote: '*Chỉ những người có kinh nghiệm trong ngành xây dựng, kiến trúc và xây dựng mới có thể tham khảo ý kiến của học sinh tốt nghiệp trung học cơ sở.',
      gender: 'Giới tính',
      education: 'Giáo dục',
      nationality: 'Quốc tịch',
      nationalityValue: 'Mang quốc tịch Nhật Bản',
      must: 'Phải',
      requiredExperienceJob: 'Số năm kinh nghiệm cần thiết (loại công việc)',
      noJobExpOk: 'Không có kinh nghiệm trong nghề nghiệp OK',
      requiredExperienceIndustry: 'Số năm kinh nghiệm cần thiết (ngành)',
      noIndustryExpOk: 'Không có kinh nghiệm trong ngành OK',
      otherExperience: 'Kinh nghiệm khác mà bạn đang tìm kiếm',
      noExperience: 'Không có (không có kinh nghiệm nào cả)',
      peopleWithLicense: 'Những người',
      licenseDetail: 'có bằng lái xe thông thường (chỉ AT)',
      potentialRecruits: 'Tuyển dụng tiềm năng / Những người',
      greetingDetail: 'có thể "vui vẻ chào hỏi"',
      communicationSkills: 'Những người có kỹ năng giao tiếp',
      welcomeConditions: 'Điều kiện chào đón',
      ngTargets: 'Mục tiêu NG',
      tattoos: 'Hình xăm',
      asthma: 'hen suyễn (không được phép nếu bạn cần hệ hô hấp),',
      allergicDermatitis: 'viêm da dị ứng (OK nếu được chữa khỏi hoàn toàn),',
      epilepsy: 'động kinh',
      mentalIllness: ', bệnh tâm thần (không được phép nếu bạn có tiền sử bệnh),',
      hernia: 'thoát vị, thiếu màu',
      hearing: ', thính giác',
      criminalRecord: '• Những người có tiền án tiền sự trong quá khứ *Nếu bạn nộp đơn trong năm ngoái và không vượt qua vòng sàng lọc, bạn cũng có thể bị từ chối.',
      peopleWhoCanReceiveOffer: 'Những người có khả năng nhận được lời mời làm việc',
      canBeAssignedAlone: 'có thể được phân công một mình',
      recruitmentCriteria: 'Tiêu chí tuyển dụng của Nikken Construction dựa trên phương châm "lấy con người làm trọng tâm".',
      noExperienceWorry: '"Tôi không có kinh nghiệm và không có kiến thức" Ngay cả khi bạn có những lo lắng như vậy, xin đừng lo lắng.',
      wantToFindJob: '"Tôi không biết phải làm gì nhưng tôi muốn kiếm việc",',
      communicationConfident: '"Tôi hơi tự tin trong giao tiếp với kinh nghiệm trong ngành dịch vụ",',
      likeDoingEverything: '"Mô hình nhựa, minecraft... Thực ra, tôi thích làm mọi thứ."',
      comeToInterview: 'Nếu bạn có cảm giác như vậy, hãy đến phỏng vấn của chúng tôi! !',
      prerequisite: '* Điều kiện tiên quyết là kỹ năng giao tiếp và trách nhiệm (những người có thể tuân theo các quy tắc)!',
    },
    en: {
      requiredConditions: 'Required Conditions',
      technicalSpecs: 'Technical specifications',
      age: 'Age',
      ageValue: '20 to 34 years old',
      companyExperience: 'Number of companies with experience',
      dontAsk: "Don't ask",
      trainingDetails: 'Training details',
      trainingValue: 'High school graduate or higher',
      trainingNote: '*Only those with experience in construction, architecture, and building can refer to the opinions of junior high school graduates.',
      gender: 'Gender',
      education: 'Education',
      nationality: 'Nationality',
      nationalityValue: 'Japanese nationality',
      must: 'Must',
      requiredExperienceJob: 'Required years of experience (job type)',
      noJobExpOk: 'No experience in the profession is OK',
      requiredExperienceIndustry: 'Required years of experience (industry)',
      noIndustryExpOk: 'No experience in the industry is OK',
      otherExperience: 'Other experience you are looking for',
      noExperience: 'None (no experience at all)',
      peopleWithLicense: 'People',
      licenseDetail: 'who have a regular driver\'s license (AT only)',
      potentialRecruits: 'Potential recruits / People',
      greetingDetail: 'who can "greet cheerfully"',
      communicationSkills: 'People with communication skills',
      welcomeConditions: 'Welcome conditions',
      ngTargets: 'Disqualification Targets',
      tattoos: 'Tattoos',
      asthma: 'asthma (not allowed if you need respiratory support),',
      allergicDermatitis: 'allergic dermatitis (OK if completely cured),',
      epilepsy: 'epilepsy',
      mentalIllness: ', mental illness (not allowed if you have a history of illness),',
      hernia: 'hernia, anemia',
      hearing: ', hearing sense',
      criminalRecord: '• People with a criminal record in the past *If you applied last year and did not pass the screening round, you may also be rejected.',
      peopleWhoCanReceiveOffer: 'People who can receive a job offer',
      canBeAssignedAlone: 'who can be assigned alone',
      recruitmentCriteria: 'Nikken Construction\'s recruitment criteria are based on the motto "putting people at the center."',
      noExperienceWorry: '"I have no experience and no knowledge." Even if you have such concerns, please don\'t worry.',
      wantToFindJob: '"I don\'t know what to do but I want to find a job,"',
      communicationConfident: '"I\'m a bit confident in communicating with experience in the service industry,"',
      likeDoingEverything: '"Plastic models, Minecraft... Actually, I like doing everything."',
      comeToInterview: 'If you feel that way, come to our interview! !',
      prerequisite: '* The prerequisite is communication skills and responsibility (people who can follow the rules)!',
    },
    ja: {
      requiredConditions: '必要な条件',
      technicalSpecs: '技術仕様',
      age: '年齢',
      ageValue: '20歳から34歳',
      companyExperience: '経験のある会社数',
      dontAsk: '聞かないで',
      trainingDetails: '研修詳細',
      trainingValue: '高校卒業以上',
      trainingNote: '*建設、建築、建設業界の経験がある方のみ、中学卒業生の意見を参照できます。',
      gender: '性別',
      education: '教育',
      nationality: '国籍',
      nationalityValue: '日本国籍',
      must: '必須',
      requiredExperienceJob: '必要な経験年数（職種）',
      noJobExpOk: '職種の経験なしOK',
      requiredExperienceIndustry: '必要な経験年数（業界）',
      noIndustryExpOk: '業界の経験なしOK',
      otherExperience: '探しているその他の経験',
      noExperience: 'なし（経験全くなし）',
      peopleWithLicense: '人',
      licenseDetail: '普通運転免許（ATのみ）を持っている',
      potentialRecruits: '潜在的な採用候補者 / 人',
      greetingDetail: '「明るく挨拶できる」',
      communicationSkills: 'コミュニケーションスキルを持つ人',
      welcomeConditions: '歓迎条件',
      ngTargets: 'NG対象',
      tattoos: 'タトゥー',
      asthma: '喘息（呼吸器サポートが必要な場合は許可されません）、',
      allergicDermatitis: 'アレルギー性皮膚炎（完全に治癒した場合はOK）、',
      epilepsy: 'てんかん',
      mentalIllness: '、精神疾患（病歴がある場合は許可されません）、',
      hernia: 'ヘルニア、貧血',
      hearing: '、聴覚',
      criminalRecord: '• 過去に犯罪歴がある人 *昨年応募して選考を通過しなかった場合、拒否される可能性もあります。',
      peopleWhoCanReceiveOffer: '採用通知を受け取ることができる人',
      canBeAssignedAlone: '一人で割り当てることができる',
      recruitmentCriteria: '日建建設の採用基準は「人を中心に」というモットーに基づいています。',
      noExperienceWorry: '"経験も知識もありません" そのような懸念があっても、心配しないでください。',
      wantToFindJob: '"何をすべきかわからないが、仕事を見つけたい"、',
      communicationConfident: '"サービス業界での経験でコミュニケーションに少し自信がある"、',
      likeDoingEverything: '"プラモデル、マインクラフト... 実は、何でもするのが好きです。"',
      comeToInterview: 'そのように感じるなら、私たちの面接に来てください！',
      prerequisite: '* 前提条件はコミュニケーションスキルと責任感（ルールに従える人）です！',
    },
  };

  const t = translations[language] || translations.vi;

  return (
    <div className="w-3/4 mt-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        {/* Header with icon and collapse button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">{t.requiredConditions}</h2>
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isCollapsed ? (
              <>
                <ChevronDown className="w-4 h-4" />
                <span>{language === 'vi' ? 'Mở rộng' : language === 'en' ? 'Expand' : '展開'}</span>
              </>
            ) : (
              <>
                <ChevronUp className="w-4 h-4" />
                <span>{language === 'vi' ? 'Thu gọn' : language === 'en' ? 'Collapse' : '折りたたむ'}</span>
              </>
            )}
          </button>
        </div>

        {!isCollapsed && (
          <>
            {/* Section 1: Điều Kiện Cần Có - Thông số kỹ thuật */}
            <div className="space-y-4">

          {/* Technical Specifications */}
          <div className="space-y-3 pl-2">
            <h3 className="text-sm font-semibold text-gray-800">{t.technicalSpecs}</h3>
            
            <div className="space-y-2.5">
              {/* Age */}
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-700">{t.age}:</span>
                  <span className="text-xs text-gray-900 ml-2">{t.ageValue}</span>
                </div>
              </div>

              {/* Company Experience */}
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-700">{t.companyExperience}:</span>
                  <span className="text-xs text-gray-900 ml-2">{t.dontAsk}</span>
                </div>
              </div>

              {/* Training Details */}
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-700">{t.trainingDetails}:</span>
                  <span className="text-xs text-gray-900 ml-2">{t.trainingValue}</span>
                  <p className="text-[10px] text-gray-600 mt-1 italic">{t.trainingNote}</p>
                </div>
              </div>

              {/* Gender */}
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-700">{t.gender}:</span>
                  <span className="text-xs text-gray-900 ml-2">{t.dontAsk}</span>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-700">{t.education}:</span>
                  <span className="text-xs text-gray-900 ml-2">{t.trainingValue}</span>
                </div>
              </div>

              {/* Nationality */}
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-700">{t.nationality}:</span>
                  <span className="text-xs text-gray-900 ml-2">{t.nationalityValue}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Must Section */}
          <div className="space-y-3 pl-2 pt-3 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-800">{t.must}</h3>
            
            <div className="space-y-2.5">
              {/* Required Experience Job */}
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-700">{t.requiredExperienceJob}:</span>
                  <span className="text-xs text-gray-900 ml-2">{t.noJobExpOk}</span>
                </div>
              </div>

              {/* Required Experience Industry */}
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-700">{t.requiredExperienceIndustry}:</span>
                  <span className="text-xs text-gray-900 ml-2">{t.noIndustryExpOk}</span>
                </div>
              </div>

              {/* Other Experience */}
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-700">{t.otherExperience}:</span>
                  <span className="text-xs text-gray-900 ml-2">{t.noExperience}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Điều Kiện Cần Có - Additional Requirements */}
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-800">{t.requiredConditions}</h3>
          
          <div className="space-y-2.5 pl-2">
            {/* License */}
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-xs text-gray-900">{t.peopleWithLicense} </span>
                <span className="text-xs text-gray-700">{t.licenseDetail}</span>
              </div>
            </div>

            {/* Greeting */}
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-xs text-gray-900">{t.potentialRecruits} </span>
                <span className="text-xs text-gray-700">{t.greetingDetail}</span>
              </div>
            </div>

            {/* Communication Skills */}
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-xs text-gray-900">{t.communicationSkills}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Điều kiện chào đón / Mục tiêu NG */}
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-gray-300 border-dashed" />
            <h3 className="text-sm font-semibold text-gray-800">{t.ngTargets}</h3>
          </div>
          
          <div className="space-y-1.5 pl-2">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
              <span className="text-xs text-gray-700">{t.tattoos}</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
              <span className="text-xs text-gray-700">{t.asthma}</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
              <span className="text-xs text-gray-700">{t.allergicDermatitis}</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
              <span className="text-xs text-gray-700">{t.epilepsy}</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
              <span className="text-xs text-gray-700">{t.mentalIllness}</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
              <span className="text-xs text-gray-700">{t.hernia}</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
              <span className="text-xs text-gray-700">{t.hearing}</span>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
              <span className="text-xs text-gray-700">{t.criminalRecord}</span>
            </div>
          </div>
        </div>

        {/* Section 4: Những người có khả năng nhận được lời mời làm việc */}
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-gray-800">{t.peopleWhoCanReceiveOffer}</h3>
          </div>
          
          <div className="space-y-3 pl-2">
            {/* Can be assigned alone */}
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <span className="text-xs text-gray-900">*{t.peopleWithLicense} </span>
                <span className="text-xs text-gray-700">{t.canBeAssignedAlone} </span>
                <span className="text-xs text-gray-700">{t.recruitmentCriteria}</span>
              </div>
            </div>

            {/* No experience worry */}
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-gray-700">"{t.noExperienceWorry}"</p>
              </div>
            </div>

            {/* Want to find job */}
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-gray-700">"{t.wantToFindJob}"</p>
              </div>
            </div>

            {/* Communication confident */}
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-gray-700">"{t.communicationConfident}"</p>
              </div>
            </div>

            {/* Like doing everything */}
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-gray-700">"{t.likeDoingEverything}"</p>
              </div>
            </div>

            {/* Come to interview */}
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-gray-700">{t.comeToInterview}</p>
              </div>
            </div>

            {/* Prerequisite */}
            <div className="flex items-start gap-2 mt-3">
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-900">{t.prerequisite}</p>
              </div>
            </div>
          </div>
        </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JobsDetailSession2;

