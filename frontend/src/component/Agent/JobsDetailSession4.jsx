import React, { useState } from 'react';
import {
  FileText,
  Target,
  Clock,
  GraduationCap,
  CheckCircle,
  ChevronUp,
  ChevronDown,
  Users,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const JobsDetailSession4 = () => {
  const { language } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Translations
  const translations = {
    vi: {
      jobDescription: 'Mô tả công việc',
      responsibilities: 'Trách nhiệm và hướng dẫn',
      guideWork: 'Hướng dẫn làm việc cho thợ thủ công và kiểm tra tiến độ',
      guideWorkDetail: 'Dẫn dắt đội ngũ tại hiện trường với hướng dẫn chính xác về an toàn, chất lượng và hiệu quả. Đây là môi trường học tập ngay cả khi bạn chưa có kinh nghiệm.',
      checkConstruction: 'Kiểm tra tình trạng thi công và đảm bảo an toàn',
      checkConstructionDetail: 'Xác minh xem việc xây dựng có phù hợp với kế hoạch hay không và đóng vai trò quan trọng trong việc tạo ra một tòa nhà đáng tự hào khi hoàn thành.',
      coordinate: 'Phối hợp và họp với các bên liên quan trong xây dựng • Giám sát và quản lý toàn bộ dự án',
      coordinateDetail: 'Vai trò này hoạt động như một tháp chỉ huy, quản lý toàn bộ dự án một cách suôn sẻ và báo cáo tiến độ và vấn đề cho các bên liên quan.',
      achievements: 'Ví dụ về thành tích',
      newNationalStadium: 'Sân vận động Quốc gia Mới',
      hachibaDam: 'Đập Hachiba',
      ebisuGardenPlace: 'Ebisu Garden Place',
      nagoyaLegoland: 'Nagoya Legoland, v.v.~',
      dailyWorkflow: 'Dòng chảy 1 ngày (ví dụ)',
      morning: '00~09:00 Đến nơi làm việc, họp buổi sáng an toàn, xác nhận lịch trình quy trình',
      photoManagement: '09:00~10:00 Quản lý ảnh',
      officeWork: '10:00~11:00 Làm việc văn phòng tại văn phòng',
      lunch: '12:00~13:00 Ăn trưa',
      checkSituation: '13:00~16:00 Kiểm tra tình hình',
      endOfDay: '17:00~ Kết thúc ngày làm việc',
      trainingSystem: 'Hệ thống đào tạo',
      comprehensiveEducation: 'Hệ thống giáo dục toàn diện và trung tâm đào tạo cho sinh viên chưa có kinh nghiệm',
      trainingLocations: 'Tại các thành phố lớn như Tokyo, Nagoya, Osaka, Hiroshima',
      trainingDuration: 'Thời gian: 10 ngày đến 1 tháng',
      tenDayTraining: 'Nội dung đào tạo 10 ngày',
      trainingContent: 'Người lớn đi làm cơ bản, kiến thức cơ bản về xây dựng, đào tạo thiết bị, đào tạo dây nịt đầy đủ đặc biệt, đào tạo quản đốc.',
      afterTraining: 'Sau 10 ngày đào tạo, tham gia đào tạo trực tuyến tại nhà',
      certificateNote: '*Chứng chỉ hoàn thành sẽ được cấp',
      diverseSkills: 'Bạn sẽ học tại Nikken! Kỹ năng đa dạng',
      communicationSkills: 'Kỹ năng giao tiếp',
      communicationDetail: 'Giao tiếp suôn sẻ với các bên liên quan khác nhau (khách hàng, nhà thiết kế, thợ thủ công, hàng xóm) và thực hiện dự án liền mạch.',
      coordinationSkills: 'Kỹ năng phối hợp, đàm phán, truyền tải hướng dẫn',
      coordinationDetail: 'Phát triển khả năng tổng hợp ý kiến từ những người ở các vị trí khác nhau và truyền đạt chính xác bản vẽ và quy trình làm việc.',
      leadershipSkills: 'Tinh thần trách nhiệm và khả năng lãnh đạo',
      leadershipDetail: 'Phát triển sự tự tin như một nhà lãnh đạo thông qua kinh nghiệm tổ chức một đội ngũ như người cuối cùng chịu trách nhiệm về một công trường xây dựng và hoàn thành dự án.',
      managementSkills: 'Kỹ năng quản lý',
      managementDetail: 'Có được khả năng tiến hành các dự án với cái nhìn toàn cảnh về toàn bộ trang web, chẳng hạn như thiết lập, quản lý quy trình và ứng phó sự cố.',
      scheduleManagement: 'quản lý lịch trình',
      scheduleDetail: 'Bạn sẽ tự nhiên có được các kỹ năng để theo dõi tiến độ và phản hồi linh hoạt ngay cả khi có sự chậm trễ.',
      scopeOfChange: 'Mô tả công việc (Phạm vi thay đổi)',
      numberOfEmployees: 'Số lượng nhân viên',
      collapse: 'Thu gọn',
      expand: 'Mở rộng',
    },
    en: {
      jobDescription: 'Job Description',
      responsibilities: 'Responsibilities and Guidance',
      guideWork: 'Guide work for craftsmen and check progress',
      guideWorkDetail: 'Lead the on-site team with precise guidance on safety, quality, and efficiency. This is a learning environment even if you have no prior experience.',
      checkConstruction: 'Check construction status and ensure safety',
      checkConstructionDetail: 'Verify if construction aligns with the plan and plays a crucial role in creating a building to be proud of upon completion.',
      coordinate: 'Coordinate and meet with construction stakeholders • Supervise and manage the entire project',
      coordinateDetail: 'This role acts as a command tower, smoothly managing the entire project and reporting progress and issues to relevant parties.',
      achievements: 'Examples of achievements',
      newNationalStadium: 'New National Stadium',
      hachibaDam: 'Hachiba Dam',
      ebisuGardenPlace: 'Ebisu Garden Place',
      nagoyaLegoland: 'Nagoya Legoland, etc.~',
      dailyWorkflow: 'Daily workflow (example)',
      morning: '00~09:00 Arrive at work, safety morning meeting, confirm process schedule',
      photoManagement: '09:00~10:00 Manage photos',
      officeWork: '10:00~11:00 Office work at the office',
      lunch: '12:00~13:00 Lunch',
      checkSituation: '13:00~16:00 Check situation',
      endOfDay: '17:00~ End of workday',
      trainingSystem: 'Training System',
      comprehensiveEducation: 'Comprehensive education system and training center for inexperienced students',
      trainingLocations: 'In major cities such as Tokyo, Nagoya, Osaka, Hiroshima',
      trainingDuration: 'Duration: 10 days to 1 month',
      tenDayTraining: '10-day training content',
      trainingContent: 'Basic adult work, basic construction knowledge, equipment training, special full harness training, foreman training.',
      afterTraining: 'After 10 days of training, participate in online training at home',
      certificateNote: '*Completion certificate will be issued',
      diverseSkills: 'You will learn at Nikken! Diverse Skills',
      communicationSkills: 'Communication skills',
      communicationDetail: 'Smooth communication with various stakeholders (clients, designers, craftsmen, neighbors) and seamless project execution.',
      coordinationSkills: 'Coordination, negotiation, instruction delivery skills',
      coordinationDetail: 'Develop the ability to synthesize opinions from people in different positions and accurately convey drawings and work procedures.',
      leadershipSkills: 'Responsibility and leadership skills',
      leadershipDetail: 'Develop self-confidence as a leader through the experience of organizing a team as the final person in charge of a construction site and completing the project.',
      managementSkills: 'Management skills',
      managementDetail: 'Gain the ability to conduct projects with a comprehensive view of the entire site, such as setting up, managing processes, and responding to incidents.',
      scheduleManagement: 'Schedule management',
      scheduleDetail: 'You will naturally acquire the skills to monitor progress and respond flexibly even with delays.',
      scopeOfChange: 'Job description (Scope of change)',
      numberOfEmployees: 'Number of employees',
      collapse: 'Collapse',
      expand: 'Expand',
    },
    ja: {
      jobDescription: '仕事内容',
      responsibilities: '責任とガイダンス',
      guideWork: '職人への作業指導と進捗確認',
      guideWorkDetail: '安全、品質、効率に関する正確なガイダンスで現場チームをリードします。経験がなくても学習環境です。',
      checkConstruction: '施工状況の確認と安全確保',
      checkConstructionDetail: '建設が計画と一致しているか確認し、完成時に誇りに思える建物を作る上で重要な役割を果たします。',
      coordinate: '建設関係者との調整と会議 • プロジェクト全体の監督と管理',
      coordinateDetail: 'この役割は指揮塔として機能し、プロジェクト全体をスムーズに管理し、進捗と問題を関係者に報告します。',
      achievements: '実績例',
      newNationalStadium: '新国立競技場',
      hachibaDam: '鉢場ダム',
      ebisuGardenPlace: '恵比寿ガーデンプレイス',
      nagoyaLegoland: '名古屋レゴランドなど〜',
      dailyWorkflow: '1日の流れ（例）',
      morning: '00〜09:00 出勤、安全朝礼、工程スケジュール確認',
      photoManagement: '09:00〜10:00 写真管理',
      officeWork: '10:00〜11:00 事務所での事務作業',
      lunch: '12:00〜13:00 昼食',
      checkSituation: '13:00〜16:00 状況確認',
      endOfDay: '17:00〜 業務終了',
      trainingSystem: '研修制度',
      comprehensiveEducation: '未経験者向けの包括的教育システムと研修センター',
      trainingLocations: '東京、名古屋、大阪、広島などの主要都市',
      trainingDuration: '期間：10日から1ヶ月',
      tenDayTraining: '10日間の研修内容',
      trainingContent: '大人の基本業務、建設の基本知識、設備研修、特別なフルハーネス研修、現場監督研修。',
      afterTraining: '10日間の研修後、自宅でオンライン研修に参加',
      certificateNote: '*修了証が発行されます',
      diverseSkills: '日建で学ぶ！多様なスキル',
      communicationSkills: 'コミュニケーションスキル',
      communicationDetail: '様々な関係者（クライアント、設計者、職人、近隣住民）とのスムーズなコミュニケーションとシームレスなプロジェクト実行。',
      coordinationSkills: '調整、交渉、指示伝達スキル',
      coordinationDetail: '異なる立場の人々の意見を統合し、図面や作業手順を正確に伝える能力を開発します。',
      leadershipSkills: '責任感とリーダーシップスキル',
      leadershipDetail: '建設現場の最終責任者としてチームを組織し、プロジェクトを完成させる経験を通じて、リーダーとしての自信を育成します。',
      managementSkills: '管理スキル',
      managementDetail: 'セットアップ、プロセス管理、インシデント対応など、サイト全体の包括的な視点でプロジェクトを実施する能力を獲得します。',
      scheduleManagement: 'スケジュール管理',
      scheduleDetail: '遅延があっても進捗を監視し、柔軟に対応するスキルを自然に習得します。',
      scopeOfChange: '仕事内容（変更範囲）',
      numberOfEmployees: '従業員数',
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
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">{t.jobDescription}</h2>
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
            {/* Section 1: Responsibilities and Guidance */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-800">{t.responsibilities}</h3>
              
              <div className="space-y-3 pl-2">
                <div>
                  <div className="text-xs font-medium text-gray-900 mb-1">• {t.guideWork}</div>
                  <p className="text-xs text-gray-700 leading-relaxed">{t.guideWorkDetail}</p>
                </div>
                
                <div>
                  <div className="text-xs font-medium text-gray-900 mb-1">• {t.checkConstruction}</div>
                  <p className="text-xs text-gray-700 leading-relaxed">{t.checkConstructionDetail}</p>
                </div>
                
                <div>
                  <div className="text-xs font-medium text-gray-900 mb-1">• {t.coordinate}</div>
                  <p className="text-xs text-gray-700 leading-relaxed">{t.coordinateDetail}</p>
                </div>
              </div>
            </div>

            {/* Section 2: Achievements */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-800">{t.achievements}</h3>
              <div className="space-y-1.5 pl-2">
                <div className="text-xs text-gray-700">• {t.newNationalStadium}</div>
                <div className="text-xs text-gray-700">• {t.hachibaDam}</div>
                <div className="text-xs text-gray-700">• {t.ebisuGardenPlace}</div>
                <div className="text-xs text-gray-700">• {t.nagoyaLegoland}</div>
              </div>
            </div>

            {/* Section 3: Daily Workflow */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-800">{t.dailyWorkflow}</h3>
              <div className="space-y-1.5 pl-2">
                <div className="text-xs text-gray-700">{t.morning}</div>
                <div className="text-xs text-gray-700">{t.photoManagement}</div>
                <div className="text-xs text-gray-700">{t.officeWork}</div>
                <div className="text-xs text-gray-700">{t.lunch}</div>
                <div className="text-xs text-gray-700">{t.checkSituation}</div>
                <div className="text-xs text-gray-700">{t.endOfDay}</div>
              </div>
            </div>

            {/* Section 4: Training System */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-800">{t.trainingSystem}</h3>
              <div className="space-y-2 pl-2">
                <p className="text-xs text-gray-700 leading-relaxed">
                  {t.comprehensiveEducation} {t.trainingLocations}
                </p>
                <p className="text-xs text-gray-700">{t.trainingDuration}</p>
                <div className="mt-2">
                  <div className="text-xs font-medium text-gray-900 mb-1">{t.tenDayTraining}</div>
                  <p className="text-xs text-gray-700">{t.trainingContent}</p>
                </div>
                <p className="text-xs text-gray-700">{t.afterTraining}</p>
                <p className="text-xs text-gray-600 italic">{t.certificateNote}</p>
              </div>
            </div>

            {/* Section 5: Diverse Skills */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-800">{t.diverseSkills}</h3>
              <div className="space-y-3 pl-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-900">{t.communicationSkills}</span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed pl-6">{t.communicationDetail}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-900">{t.coordinationSkills}</span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed pl-6">{t.coordinationDetail}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-900">{t.leadershipSkills}</span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed pl-6">{t.leadershipDetail}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-900">{t.managementSkills}</span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed pl-6">{t.managementDetail}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-900">{t.scheduleManagement}</span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed pl-6">{t.scheduleDetail}</p>
                </div>
              </div>
            </div>

            {/* Section 6: Scope of Change */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="w-8 h-px bg-gray-300 border-dashed mb-2" />
              <h3 className="text-sm font-semibold text-gray-800">{t.scopeOfChange}</h3>
            </div>

            {/* Section 7: Number of Employees */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-700 mb-1">{t.numberOfEmployees}</div>
                  <div className="text-sm font-semibold text-gray-900">50</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsDetailSession4;

