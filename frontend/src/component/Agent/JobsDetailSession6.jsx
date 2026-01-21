import React, { useState } from 'react';
import {
  FileText,
  MapPin,
  ChevronUp,
  ChevronDown,
  Navigation,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const JobsDetailSession6 = () => {
  const { language } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // All prefectures list
  const prefectures = [
    'Hokkaido', 'Aomori', 'Iwate', 'Miyagi', 'Akita', 'Yamagata', 'Fukushima',
    'Ibaraki', 'Tochigi', 'Gunma', 'Saitama', 'Chiba', 'Tokyo', 'Kanagawa',
    'Niigata', 'Toyama', 'Ishikawa', 'Fukui', 'Yamanashi', 'Nagano', 'Gifu',
    'Shizuoka', 'Aichi', 'Mie', 'Shiga', 'Kyoto', 'Osaka', 'Hyogo', 'Nara',
    'Wakayama', 'Tottori', 'Shimane', 'Okayama', 'Hiroshima', 'Yamaguchi',
    'Tokushima', 'Kagawa', 'Ehime', 'Kochi', 'Fukuoka', 'Saga', 'Nagasaki',
    'Kumamoto', 'Oita', 'Miyazaki', 'Kagoshima', 'Okinawa', 'Nước ngoài'
  ];

  // Translations
  const translations = {
    vi: {
      location: 'Địa điểm',
      locationInfo: 'Thông tin địa điểm',
      destination: '====Điểm đến =====',
      destinationNote1: 'địa điểm làm việc của Dự án tại 47 tỉnh trên toàn quốc sẽ được quyết định dựa trên mong muốn của bạn!',
      destinationNote2: 'Chào mừng đến lượt U.I!',
      destinationNote3: 'Đào tạo từ xa cũng có sân!',
      tohoku: 'Tohoku <Khu vực mục tiêu>',
      tohokuPrefectures: 'Hokkaido, Aomori, Iwate, Akita, Miyagi, Yamagata, Fukushima, Niigata',
      trainingCenter: 'Trung tâm đào tạo',
      technologyCenter: 'Trung tâm Công nghệ',
      tokyoAddress: 'Tokyo (7-8-3 Nishi-Kamata, Ota-ku, Tokyo, Nikken Second Bldg. 4F)',
      kanto: 'Kanto < khu vực mục tiêu>',
      kantoPrefectures: 'Tokyo, Chiba, Kanagawa, Saitama, Ibaraki, Tochigi, Gunma',
      yamanashi: '<Yamanashi> Trung tâm Công nghệ',
      tokyoAddress2: 'Tokyo (7-8-3 Nishi-Kamata, Ota-ku, Tokyo, Nikken Second Building 4F)',
      specialNote: '[ Ghi chú đặc biệt]',
      specialNoteText: 'Tokyo, Kanagawa, Chiba và Saitama (1 tỉnh Tokyo và 3 tỉnh) có thể đi làm, không cần giấy phép, chỉ có thể làm việc theo ca ngày và "mong muốn hạn chế" chỉ dành cho Ibaraki',
      tokai: 'Tokai Khu vực mục tiêu',
      tokaiPrefectures: 'Aichi, Gifu, Mie, Shizuoka, Tỉnh Ishikawa, Fukui, Tỉnh Toyama',
      gifu: '< Tỉnh Gifu> Trung tâm Công nghệ',
      nagoyaAddress: 'Nagoya (2-5 Ushijima-cho, Nishi-ku, Thành phố Nagoya, Tỉnh Aichi TOMITA. BLD4F)',
      kansai: 'Kansai <Khu vực mục tiêu>',
      kansaiPrefectures: 'Osaka, Kyoto, Hyogo, Nara, Shiga, Wakayama',
      osakaAddress: 'Osaka (5-9-8 Nishin-Nakajima, Yodogawa-ku, Thành phố Osaka, Tỉnh Osaka, Tầng 4 Tòa nhà Shin-Osaka DTK)',
      specialNote2: '[Lưu ý đặc biệt]',
      specialNote2Text: 'Đi làm trong vòng 90 phút đến Trung tâm Công nghệ Osaka',
      chuShikoku: 'Chu-Shikoku < các khu vực mục tiêu>',
      chuShikokuPrefectures: 'Tottori, Shimane, Yamaguchi, Hiroshima, Okayama, Kagawa, Tokushima, Kochi, Ehime',
      shikokuNote: '* Shikoku là một trung tâm đào tạo <> phản ứng linh hoạt như "Chỉ Shikoku", "Shikoku + Okayama", "Shikoku + Hiroshima", v.v., Trung tâm Công nghệ Hiroshima',
      hiroshimaAddress: '(Tòa nhà Asahi Nichitsu Hiroshima Tầng 2, 2-29 Naka-ku, Thành phố Hiroshima, Tỉnh Hiroshima)',
      kyushu: 'Kyushu < khu vực mục tiêu>',
      kyushuPrefectures: 'Fukuoka, Saga, Nagasaki, Oita, Kumamoto, Miyazaki, Kagoshima',
      kyushuNote: '*Fukuoka, Kumamoto và Kagoshima là những khu vực ưu tiên (Tỉnh Fukuoka, Kumamoto, Tỉnh Kagoshima)',
      workLocation: 'Địa điểm làm việc (phạm vi thay đổi)',
      commutingNote: 'Về việc đưa đón: Có khả năng, nhưng chúng tôi sẽ xem xét càng nhiều càng tốt.',
      relocationPossibility: 'Khả năng di dời',
      yes: 'Có',
      collapse: 'Thu gọn',
      expand: 'Mở rộng',
    },
    en: {
      location: 'Location',
      locationInfo: 'Location Information',
      destination: '====Destination =====',
      destinationNote1: 'The project\'s work locations in 47 provinces nationwide will be decided based on your wishes!',
      destinationNote2: 'Welcome to U.I.!',
      destinationNote3: 'Remote training also has a place!',
      tohoku: 'Tohoku <Target area>',
      tohokuPrefectures: 'Hokkaido, Aomori, Iwate, Akita, Miyagi, Yamagata, Fukushima, Niigata',
      trainingCenter: 'Training center',
      technologyCenter: 'Technology Center',
      tokyoAddress: 'Tokyo (7-8-3 Nishi-Kamata, Ota-ku, Tokyo, Nikken Second Bldg. 4F)',
      kanto: 'Kanto <target area>',
      kantoPrefectures: 'Tokyo, Chiba, Kanagawa, Saitama, Ibaraki, Tochigi, Gunma',
      yamanashi: '<Yamanashi> Technology Center',
      tokyoAddress2: 'Tokyo (7-8-3 Nishi-Kamata, Ota-ku, Tokyo, Nikken Second Building 4F)',
      specialNote: '[Special note]',
      specialNoteText: 'Tokyo, Kanagawa, Chiba, and Saitama (1 prefecture Tokyo and 3 prefectures) can commute, no license required, can only work day shifts and "limited desire" only for Ibaraki',
      tokai: 'Tokai Target area',
      tokaiPrefectures: 'Aichi, Gifu, Mie, Shizuoka, Ishikawa Prefecture, Fukui, Toyama Prefecture',
      gifu: '<Gifu Prefecture> Technology Center',
      nagoyaAddress: 'Nagoya (2-5 Ushijima-cho, Nishi-ku, Nagoya City, Aichi Prefecture TOMITA. BLD4F)',
      kansai: 'Kansai <Target area>',
      kansaiPrefectures: 'Osaka, Kyoto, Hyogo, Nara, Shiga, Wakayama',
      osakaAddress: 'Osaka (5-9-8 Nishin-Nakajima, Yodogawa-ku, Osaka City, Osaka Prefecture, 4F Shin-Osaka DTK Building)',
      specialNote2: '[Special note]',
      specialNote2Text: 'Commute within 90 minutes to Osaka Technology Center',
      chuShikoku: 'Chu-Shikoku <target areas>',
      chuShikokuPrefectures: 'Tottori, Shimane, Yamaguchi, Hiroshima, Okayama, Kagawa, Tokushima, Kochi, Ehime',
      shikokuNote: '* Shikoku is a training center <> flexible response such as "Only Shikoku", "Shikoku + Okayama", "Shikoku + Hiroshima", etc., Hiroshima Technology Center',
      hiroshimaAddress: '(Asahi Nichitsu Hiroshima Building 2, 2-29 Naka-ku, Hiroshima City, Hiroshima Prefecture)',
      kyushu: 'Kyushu <target area>',
      kyushuPrefectures: 'Fukuoka, Saga, Nagasaki, Oita, Kumamoto, Miyazaki, Kagoshima',
      kyushuNote: '*Fukuoka, Kumamoto, and Kagoshima are priority areas (Fukuoka Prefecture, Kumamoto Prefecture, Kagoshima Prefecture)',
      workLocation: 'Work location (scope of change)',
      commutingNote: 'Regarding commuting: It is possible, but we will consider as much as possible.',
      relocationPossibility: 'Relocation possibility',
      yes: 'Yes',
      collapse: 'Collapse',
      expand: 'Expand',
    },
    ja: {
      location: '勤務地',
      locationInfo: '勤務地情報',
      destination: '====勤務地 =====',
      destinationNote1: '全国47都道府県のプロジェクトの勤務地は、ご希望に基づいて決定されます！',
      destinationNote2: 'U.I.へようこそ！',
      destinationNote3: 'リモート研修にも場所があります！',
      tohoku: '東北 <対象エリア>',
      tohokuPrefectures: '北海道、青森、岩手、秋田、宮城、山形、福島、新潟',
      trainingCenter: '研修センター',
      technologyCenter: '技術センター',
      tokyoAddress: '東京（東京都大田区西蒲田7-8-3、日建第二ビル4F）',
      kanto: '関東 <対象エリア>',
      kantoPrefectures: '東京、千葉、神奈川、埼玉、茨城、栃木、群馬',
      yamanashi: '<山梨> 技術センター',
      tokyoAddress2: '東京（東京都大田区西蒲田7-8-3、日建第二ビル4F）',
      specialNote: '[特別注意]',
      specialNoteText: '東京、神奈川、千葉、埼玉（1都3県）は通勤可能、免許不要、日勤のみ可能、「希望制限」は茨城のみ',
      tokai: '東海 対象エリア',
      tokaiPrefectures: '愛知、岐阜、三重、静岡、石川県、福井、富山県',
      gifu: '<岐阜県> 技術センター',
      nagoyaAddress: '名古屋（愛知県名古屋市西区牛島町2-5、TOMITA. BLD4F）',
      kansai: '関西 <対象エリア>',
      kansaiPrefectures: '大阪、京都、兵庫、奈良、滋賀、和歌山',
      osakaAddress: '大阪（大阪府大阪市淀川区西中島5-9-8、新大阪DTKビル4F）',
      specialNote2: '[特別注意]',
      specialNote2Text: '大阪技術センターまで90分以内の通勤',
      chuShikoku: '中国・四国 <対象エリア>',
      chuShikokuPrefectures: '鳥取、島根、山口、広島、岡山、香川、徳島、高知、愛媛',
      shikokuNote: '* 四国は研修センター <> 「四国のみ」、「四国+岡山」、「四国+広島」などの柔軟な対応、広島技術センター',
      hiroshimaAddress: '（広島県広島市中区2-29、朝日日通広島ビル2階）',
      kyushu: '九州 <対象エリア>',
      kyushuPrefectures: '福岡、佐賀、長崎、大分、熊本、宮崎、鹿児島',
      kyushuNote: '*福岡、熊本、鹿児島は優先エリア（福岡県、熊本県、鹿児島県）',
      workLocation: '勤務地（変更範囲）',
      commutingNote: '通勤について：可能ですが、できるだけ考慮いたします。',
      relocationPossibility: '転勤の可能性',
      yes: 'あり',
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
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">{t.location}</h2>
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
            {/* Prefectures List */}
            <div>
              <div className="text-xs text-gray-700 leading-relaxed">
                {prefectures.join(', ')}
              </div>
            </div>

            {/* Location Information */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-800">{t.locationInfo}</h3>

              {/* Destination */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-900">{t.destination}</h4>
                <div className="space-y-1 pl-2">
                  <p className="text-xs text-gray-700">{t.destinationNote1}</p>
                  <p className="text-xs text-gray-700">{t.destinationNote2}</p>
                  <p className="text-xs text-gray-700">{t.destinationNote3}</p>
                </div>
              </div>

              {/* Hokkaido/Tohoku Region */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-900">■Hokkaido, khu vực</h4>
                <div className="space-y-2 pl-2">
                  <div>
                    <div className="text-xs font-medium text-gray-800 mb-1">{t.tohoku}</div>
                    <div className="text-xs text-gray-700 mb-2">{t.tohokuPrefectures}</div>
                    <div className="text-xs text-gray-700">
                      <span className="font-medium">{t.trainingCenter}</span> {t.technologyCenter}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{t.tokyoAddress}</div>
                  </div>
                </div>
              </div>

              {/* Kanto Region */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-900">■Khu vực</h4>
                <div className="space-y-2 pl-2">
                  <div>
                    <div className="text-xs font-medium text-gray-800 mb-1">{t.kanto}</div>
                    <div className="text-xs text-gray-700 mb-2">{t.kantoPrefectures}</div>
                    <div className="text-xs text-gray-700">
                      <span className="font-medium">{t.trainingCenter}</span>
                    </div>
                    <div className="text-xs text-gray-700 mb-1">{t.yamanashi}</div>
                    <div className="text-xs text-gray-600">{t.tokyoAddress2}</div>
                  </div>
                  <div className="mt-2">
                    <div className="text-xs font-medium text-gray-800 mb-1">{t.specialNote}</div>
                    <div className="text-xs text-gray-700">• {t.specialNoteText}</div>
                  </div>
                </div>
              </div>

              {/* Tokai Region */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-900">■Khu vực</h4>
                <div className="space-y-2 pl-2">
                  <div>
                    <div className="text-xs font-medium text-gray-800 mb-1">{t.tokai}</div>
                    <div className="text-xs text-gray-700 mb-2">{t.tokaiPrefectures}</div>
                    <div className="text-xs text-gray-700">
                      <span className="font-medium">{t.trainingCenter}</span>
                    </div>
                    <div className="text-xs text-gray-700 mb-1">{t.gifu}</div>
                    <div className="text-xs text-gray-600">{t.nagoyaAddress}</div>
                  </div>
                </div>
              </div>

              {/* Kansai Region */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-900">■Khu vực</h4>
                <div className="space-y-2 pl-2">
                  <div>
                    <div className="text-xs font-medium text-gray-800 mb-1">{t.kansai}</div>
                    <div className="text-xs text-gray-700 mb-2">{t.kansaiPrefectures}</div>
                    <div className="text-xs text-gray-700">
                      <span className="font-medium">{t.trainingCenter}</span>
                    </div>
                    <div className="text-xs text-gray-700 mb-1">- {t.technologyCenter}</div>
                    <div className="text-xs text-gray-600">{t.osakaAddress}</div>
                  </div>
                  <div className="mt-2">
                    <div className="text-xs font-medium text-gray-800 mb-1">{t.specialNote2}</div>
                    <div className="text-xs text-gray-700">• {t.specialNote2Text}</div>
                  </div>
                </div>
              </div>

              {/* Chu-Shikoku Region */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-900">■Khu vực</h4>
                <div className="space-y-2 pl-2">
                  <div>
                    <div className="text-xs font-medium text-gray-800 mb-1">{t.chuShikoku}</div>
                    <div className="text-xs text-gray-700 mb-2">{t.chuShikokuPrefectures}</div>
                    <div className="text-xs text-gray-700 mb-1">
                      * {t.shikokuNote}
                    </div>
                    <div className="text-xs text-gray-600">{t.hiroshimaAddress}</div>
                  </div>
                </div>
              </div>

              {/* Kyushu Region */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-900">■ Khu vực</h4>
                <div className="space-y-2 pl-2">
                  <div>
                    <div className="text-xs font-medium text-gray-800 mb-1">{t.kyushu}</div>
                    <div className="text-xs text-gray-700 mb-2">{t.kyushuPrefectures}</div>
                    <div className="text-xs text-gray-700 mb-2">
                      * {t.kyushuNote}
                    </div>
                    <div className="text-xs text-gray-700">
                      <span className="font-medium">{t.trainingCenter}</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {t.technologyCenter} {t.hiroshimaAddress}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Location Scope */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="w-8 h-px bg-gray-300 border-dashed mb-2" />
              <h3 className="text-sm font-semibold text-gray-800">{t.workLocation}</h3>
              <div className="text-xs text-gray-700 pl-2">
                • {t.commutingNote}
              </div>
            </div>

            {/* Relocation Possibility */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-700 mb-1">{t.relocationPossibility}</div>
                  <div className="text-sm font-semibold text-gray-900">{t.yes}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsDetailSession6;

