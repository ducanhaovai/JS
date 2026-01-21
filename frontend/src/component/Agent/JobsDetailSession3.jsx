import React, { useState } from 'react';
import {
  FileText,
  Users,
  MapPin,
  Calendar,
  TrendingUp,
  DollarSign,
  BarChart3,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  AlertCircle,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const JobsDetailSession3 = () => {
  const { language } = useLanguage();
  const [isCompanyInfoCollapsed, setIsCompanyInfoCollapsed] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 26;

  // Translations
  const translations = {
    vi: {
      companyInfo: 'Thông tin công ty',
      numberOfEmployees: 'Số lượng nhân viên',
      companyProfile: 'Hồ sơ công ty',
      companyProfileText: 'Nikken Total Sourcing có kinh nghiệm phong phú trong việc điều phối, giới thiệu và ký hợp đồng với nhân viên trong nhiều ngành công nghiệp và quy trình khác nhau, bao gồm sản xuất, bảo trì, robot, FA, nghiên cứu, phát triển và thiết kế, IT, hóa học và công nghệ sinh học, dịch vụ hiện trường, xây dựng, y tế, chăm sóc điều dưỡng và phúc lợi. Chúng tôi cũng lắng nghe nhu cầu của trang web và các vấn đề của khách hàng, và cung cấp theo dõi sau bán hàng.',
      otherJobsLink: 'Các công việc khác mà công ty này đang tuyển dụng',
      mainOfficeLocation: 'Vị trí trụ sở chính',
      mainOfficeAddress: '7-23-3 Nishi-Kamata, Ota-ku, Tokyo Tòa nhà Nikken Daiichi',
      establishmentDate: 'Ngày thành lập',
      establishmentDateValue: '1 Tháng Tư, 1981',
      sales: 'Bán hàng',
      capital: 'Vốn',
      capitalValue: '50 triệu yên',
      publicStockIssuance: 'Phát hành cổ phiếu ra công chúng',
      notListed: 'Không có mặt trên sàn',
      agencyResources: 'Tài nguyên đại lý',
      infoForJobSeekers: 'Thông tin dành cho người tìm việc [Nội dung công ty, mô tả công việc, v.v.)',
      download: 'Tải về',
      item: 'cái',
      collapse: 'Thu gọn',
      expand: 'Mở rộng',
    },
    en: {
      companyInfo: 'Company Information',
      numberOfEmployees: 'Number of employees',
      companyProfile: 'Company profile',
      companyProfileText: 'Nikken Total Sourcing has extensive experience in coordinating, introducing, and contracting employees across various industries and processes, including manufacturing, maintenance, robotics, FA, research, development and design, IT, chemistry and biotechnology, field services, construction, medical, nursing care, and welfare. We also listen to website needs and customer issues, and provide after-sales follow-up.',
      otherJobsLink: 'Other jobs this company is recruiting for',
      mainOfficeLocation: 'Main office location',
      mainOfficeAddress: '7-23-3 Nishi-Kamata, Ota-ku, Tokyo Nikken Daiichi Building',
      establishmentDate: 'Establishment date',
      establishmentDateValue: 'April 1, 1981',
      sales: 'Sales',
      capital: 'Capital',
      capitalValue: '50 million yen',
      publicStockIssuance: 'Public stock issuance',
      notListed: 'Not listed on the market',
      agencyResources: 'Agency Resources',
      infoForJobSeekers: 'Information for job seekers [Company content, job description, etc.]',
      download: 'Download',
      item: 'item',
      collapse: 'Collapse',
      expand: 'Expand',
    },
    ja: {
      companyInfo: '会社情報',
      numberOfEmployees: '従業員数',
      companyProfile: '会社プロフィール',
      companyProfileText: '日建トータルソーシングは、製造、メンテナンス、ロボット、FA、研究、開発・設計、IT、化学・バイオテクノロジー、フィールドサービス、建設、医療、介護・福祉など、さまざまな業界やプロセスで従業員の調整、紹介、契約において豊富な経験を持っています。また、ウェブサイトのニーズや顧客の問題に耳を傾け、アフターセールスフォローアップを提供しています。',
      otherJobsLink: 'この会社が募集している他の仕事',
      mainOfficeLocation: '本社所在地',
      mainOfficeAddress: '東京都大田区西蒲田7-23-3 日建第一ビル',
      establishmentDate: '設立日',
      establishmentDateValue: '1981年4月1日',
      sales: '売上',
      capital: '資本金',
      capitalValue: '5000万円',
      publicStockIssuance: '株式公開',
      notListed: '上場なし',
      agencyResources: '代理店リソース',
      infoForJobSeekers: '求職者向け情報 [会社内容、仕事内容など]',
      download: 'ダウンロード',
      item: '件',
      collapse: '折りたたむ',
      expand: '展開',
    },
  };

  const t = translations[language] || translations.vi;

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  };

  return (
    <div className="w-full">
      {/* Company Information Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">{t.companyInfo}</h2>
          </div>
          <button
            onClick={() => setIsCompanyInfoCollapsed(!isCompanyInfoCollapsed)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isCompanyInfoCollapsed ? (
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

        {!isCompanyInfoCollapsed && (
          <div className="space-y-4">
            {/* Number of Employees */}
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-700 mb-1">{t.numberOfEmployees}</div>
                <div className="text-sm font-semibold text-gray-900">5001</div>
              </div>
            </div>

            {/* Company Profile */}
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-700 mb-1">{t.companyProfile}</div>
                <p className="text-xs text-gray-900 mb-2 leading-relaxed">{t.companyProfileText}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 hover:underline"
                >
                  {t.otherJobsLink}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Main Office Location */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-700 mb-1">{t.mainOfficeLocation}</div>
                <div className="text-xs text-gray-900">{t.mainOfficeAddress}</div>
              </div>
            </div>

            {/* Establishment Date */}
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-700 mb-1">{t.establishmentDate}</div>
                <div className="text-xs text-gray-900">{t.establishmentDateValue}</div>
              </div>
            </div>

            {/* Sales */}
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-700 mb-1">{t.sales}</div>
              </div>
            </div>

            {/* Capital */}
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-700 mb-1">{t.capital}</div>
                <div className="text-xs text-gray-900">{t.capitalValue}</div>
              </div>
            </div>

            {/* Public Stock Issuance */}
            <div className="flex items-start gap-3">
              <BarChart3 className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-700 mb-1">{t.publicStockIssuance}</div>
                <div className="text-xs text-gray-900">{t.notListed}</div>
              </div>
            </div>

            {/* Agency Resources Section */}
            <div className="pt-6 mt-6 border-t border-gray-200">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-full">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">{t.agencyResources}</h3>
              </div>

        {/* Tab */}
        <div className="mb-4">
          <div className="text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
            {t.infoForJobSeekers}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center gap-4">
            {/* Left Side - Dark Blue */}
            <div className="flex-1 bg-blue-900 rounded-lg p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">CONSTRUCTION MGMT.</h3>
                  <p className="text-sm opacity-90">
                    {language === 'vi' 
                      ? 'Quản lý xây dựng chuyên nghiệp'
                      : language === 'en'
                      ? 'Professional Construction Management'
                      : 'プロフェッショナルな建設管理'
                    }
                  </p>
                </div>
                <div className="mt-6">
                  <div className="text-lg font-semibold mb-2">NIKKEN TOTAL SOURCING</div>
                </div>
              </div>
              
              {/* Navigation and Download */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePreviousSlide}
                    className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-sm">
                    {currentSlide} / {totalSlides}
                  </span>
                  <button
                    onClick={handleNextSlide}
                    className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-colors text-sm font-medium">
                  <Download className="w-4 h-4" />
                  {t.download}
                </button>
              </div>
            </div>

            {/* Right Side - Light Blue/White */}
            <div className="w-48 bg-blue-50 rounded-lg p-6 flex flex-col items-center justify-center border border-blue-200">
              <div className="text-6xl font-bold text-blue-600 mb-2">{String(currentSlide).padStart(2, '0')}</div>
              <div className="text-sm text-gray-700 text-center">
                {language === 'vi' 
                  ? 'Tổng quan công ty'
                  : language === 'en'
                  ? 'Company Overview'
                  : '会社概要'
                }
              </div>
            </div>

            {/* Item Count */}
            <div className="text-xs text-gray-600 whitespace-nowrap">
              1 {t.item}
            </div>
          </div>
        </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsDetailSession3;

