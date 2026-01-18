import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ExternalLink, Download, Star, Bell, User, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';

const Header = () => {
  const location = useLocation();
  const { language, changeLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const t = translations[language];

  // Mapping routes to page titles
  const getPageTitle = () => {
    const routeMap = {
      '/agent': language === 'vi' ? 'Thông tin chung' : language === 'en' ? 'General Information' : '一般情報',
      '/agent/jobs': language === 'vi' ? 'Danh sách việc làm' : language === 'en' ? 'Job List' : '求人リスト',
      '/agent/candidates': language === 'vi' ? 'Hồ sơ ứng viên' : language === 'en' ? 'Candidate Profile' : '候補者プロフィール',
      '/agent/nominations': language === 'vi' ? 'Quản lý tiến cử' : language === 'en' ? 'Nomination Management' : '推薦管理',
      '/agent/payment-history': language === 'vi' ? 'Lịch sử thanh toán' : language === 'en' ? 'Payment History' : '支払い履歴',
      '/agent/contact': language === 'vi' ? 'Liên hệ' : language === 'en' ? 'Contact' : 'お問い合わせ',
      '/agent/faq': language === 'vi' ? 'Các câu hỏi thường gặp' : language === 'en' ? 'FAQ' : 'よくある質問',
      '/agent/terms': language === 'vi' ? 'Điều khoản sử dụng' : language === 'en' ? 'Terms of Use' : '利用規約',
      '/agent/hotline': language === 'vi' ? 'Hotline hỗ trợ 24/7 qua Zalo' : language === 'en' ? '24/7 Hotline Support via Zalo' : 'Zalo経由24時間ホットラインサポート',
    };

    // Check exact match first
    if (routeMap[location.pathname]) {
      return routeMap[location.pathname];
    }

    // Check if path starts with any route (for nested routes)
    for (const [route, title] of Object.entries(routeMap)) {
      if (location.pathname.startsWith(route) && route !== '/agent') {
        return title;
      }
    }

    return routeMap['/agent']; // Default title
  };

  const languages = [
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Left side - Title */}
        <h1 className="text-xl font-semibold text-gray-900">{getPageTitle()}</h1>
        
        {/* Right side - Actions */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-2 transition-colors"
            >
              <Globe className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">
                {languages.find(lang => lang.code === language)?.flag} {languages.find(lang => lang.code === language)?.name}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-700" />
            </button>
            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setShowLanguageMenu(false);
                    }}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                      language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                    {language === lang.code && (
                      <span className="ml-auto text-blue-600">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Help Link */}
          <a 
            href="#" 
            className="flex items-center gap-1 text-gray-700 underline hover:text-blue-600 transition-colors"
          >
            <span className="text-sm">{t.userGuide}</span>
            <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
              <ExternalLink className="w-2.5 h-2.5 text-white" />
            </div>
          </a>

          {/* Download Button */}
          <button className="bg-gray-100 hover:bg-gray-200 rounded-lg p-2.5 transition-colors">
            <div className="w-6 h-6 border-2 border-red-500 rounded-full flex items-center justify-center">
              <Download className="w-3 h-3 text-red-500" />
            </div>
          </button>

          {/* Rating Button */}
          <button className="bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-2 flex items-center gap-2 transition-colors">
            <div className="bg-yellow-400 rounded-full px-2 py-0.5 flex items-center gap-1">
              <span className="text-sm font-semibold text-gray-900">4.7</span>
              <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
            </div>
          </button>

          {/* Notification Bell */}
          <button className="bg-gray-100 hover:bg-gray-200 rounded-lg p-2.5 relative transition-colors">
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <button className="bg-gray-100 hover:bg-gray-200 rounded-lg p-2.5 transition-colors">
            <User className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;