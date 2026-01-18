import React, { useState, useEffect } from 'react';
import {
  Search,
  MapPin,
  Briefcase,
  Building2,
  Calendar,
  DollarSign,
  FileText,
  Globe,
  Star,
  CheckSquare,
  Plus,
  X,
  ChevronDown,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';

// Type definitions
const KeywordMode = 'OR' | 'AND';
const FilterState = {
  keyword: string;
  keywordMode: KeywordMode;
  locations: string[];
  jobChildIds: string[];
  jobParentIds: string[];
  age: string | null;
  salaryMin: number | '';
  salaryMax: number | '';
  employmentType: string | null;
  visaType: string | null;
  highlights: string[];
  booleans: {
    positionNoExpOk: boolean;
    industryNoExpOk: boolean;
    weekendOff: boolean;
    noExpOk: boolean;
  };
};

// Mock data
const mockLocations = [
  'Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya', 'Fukuoka', 'Sapporo', 'Sendai',
  'Hiroshima', 'Kobe', 'Chiba', 'Saitama', 'Kanagawa', 'Aichi', 'Hyogo'
];

const mockJobParents = [
  { id: '1', name: 'IT・エンジニア' },
  { id: '2', name: '営業・マーケティング' },
  { id: '3', name: '事務・管理' },
  { id: '4', name: '製造・技術' },
  { id: '5', name: 'サービス・接客' },
];

const mockJobChildren = {
  '1': [
    { id: '1-1', name: 'システムエンジニア' },
    { id: '1-2', name: 'プログラマー' },
    { id: '1-3', name: 'Webデザイナー' },
    { id: '1-4', name: 'インフラエンジニア' },
  ],
  '2': [
    { id: '2-1', name: '営業職' },
    { id: '2-2', name: 'マーケティング' },
    { id: '2-3', name: 'セールス' },
  ],
  '3': [
    { id: '3-1', name: '事務職' },
    { id: '3-2', name: '経理' },
    { id: '3-3', name: '人事' },
  ],
  '4': [
    { id: '4-1', name: '製造技術者' },
    { id: '4-2', name: '品質管理' },
  ],
  '5': [
    { id: '5-1', name: '接客サービス' },
    { id: '5-2', name: 'ホテルスタッフ' },
  ],
};

const mockEmploymentTypes = [
  '正社員',
  '契約社員',
  'パート・アルバイト',
  '派遣社員',
  '業務委託',
];

const mockVisaTypes = [
  '技術・人文知識・国際業務',
  '特定技能',
  '技能実習',
  '永住者',
  '日本人の配偶者等',
  '定住者',
];

const mockHighlights = [
  '未経験OK',
  '残業少なめ',
  '土日祝休み',
  'リモートワーク可',
  '転勤なし',
  '昇給あり',
  '賞与あり',
  '社会保険完備',
];

const AgentJobsPageSession1 = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // State
  const [filters, setFilters] = useState({
    keyword: '',
    keywordMode: 'OR',
    locations: [],
    jobChildIds: [],
    jobParentIds: [],
    age: null,
    salaryMin: '',
    salaryMax: '',
    employmentType: null,
    visaType: null,
    highlights: [],
    booleans: {
      positionNoExpOk: false,
      industryNoExpOk: false,
      weekendOff: false,
      noExpOk: false,
    },
  });

  const [showKeywordMode, setShowKeywordMode] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showJobChildModal, setShowJobChildModal] = useState(false);
  const [showJobParentModal, setShowJobParentModal] = useState(false);
  const [showHighlightModal, setShowHighlightModal] = useState(false);
  const [loadingChildren, setLoadingChildren] = useState(false);
   const [availableJobChildren, setAvailableJobChildren] = useState([]);
  const [resultCount, setResultCount] = useState(112321);

  // Fetch children when parent changes
  useEffect(() => {
    if (filters.jobParentIds.length > 0) {
      setLoadingChildren(true);
      fetchChildrenByParents(filters.jobParentIds).then((children) => {
        setAvailableJobChildren(children);
        setLoadingChildren(false);
        // Reset jobChildIds when parent changes
        setFilters(prev => ({ ...prev, jobChildIds: [] }));
      });
    } else {
      setAvailableJobChildren([]);
      setFilters(prev => ({ ...prev, jobChildIds: [] }));
    }
  }, [filters.jobParentIds]);

  // Mock function to fetch children
  const fetchChildrenByParents = async (parentIds) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const allChildren = [];
        parentIds.forEach(parentId => {
          const children = mockJobChildren[parentId] || [];
          allChildren.push(...children);
        });
        resolve(allChildren);
      }, 500);
    });
  };

  const handleSearch = () => {
    console.log('Filter State:', filters);
    // Mock result count update
    setResultCount(Math.floor(Math.random() * 200000) + 50000);
  };

  const handleClearAll = () => {
    setFilters({
      keyword: '',
      keywordMode: 'OR',
      locations: [],
      jobChildIds: [],
      jobParentIds: [],
      age: null,
      salaryMin: '',
      salaryMax: '',
      employmentType: null,
      visaType: null,
      highlights: [],
      booleans: {
        positionNoExpOk: false,
        industryNoExpOk: false,
        weekendOff: false,
        noExpOk: false,
      },
    });
  };

  const toggleLocation = (location) => {
    setFilters(prev => ({
      ...prev,
      locations: prev.locations.includes(location)
        ? prev.locations.filter(l => l !== location)
        : [...prev.locations, location],
    }));
  };

  const toggleJobParent = (parentId) => {
    setFilters(prev => ({
      ...prev,
      jobParentIds: prev.jobParentIds.includes(parentId)
        ? prev.jobParentIds.filter(id => id !== parentId)
        : [...prev.jobParentIds, parentId],
    }));
  };

  const toggleJobChild = (childId) => {
    setFilters(prev => ({
      ...prev,
      jobChildIds: prev.jobChildIds.includes(childId)
        ? prev.jobChildIds.filter(id => id !== childId)
        : [...prev.jobChildIds, childId],
    }));
  };

  const toggleHighlight = (highlight) => {
    setFilters(prev => ({
      ...prev,
      highlights: prev.highlights.includes(highlight)
        ? prev.highlights.filter(h => h !== highlight)
        : [...prev.highlights, highlight],
    }));
  };

  const getSelectedJobParentsNames = () => {
    return filters.jobParentIds
      .map(id => mockJobParents.find(p => p.id === id)?.name)
      .filter(Boolean)
      .join(', ');
  };

  const getSelectedJobChildrenNames = () => {
    return filters.jobChildIds
      .map(id => availableJobChildren.find(c => c.id === id)?.name)
      .filter(Boolean)
      .join(', ');
  };

  const getSelectedHighlightsNames = () => {
    return filters.highlights.join(', ');
  };

  // Modal Component
  const MultiSelectModal = ({ 
    isOpen, 
    onClose, 
    title, 
    options, 
    selected, 
    onToggle,
    loading = false 
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded transition-colors">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="p-4 overflow-y-auto max-h-[60vh]">
            {loading ? (
              <div className="text-center py-8 text-gray-500">Loading...</div>
            ) : (
              <div className="space-y-2">
                {options.map((option) => {
                  const id = typeof option === 'string' ? option : option.id;
                  const name = typeof option === 'string' ? option : option.name;
                  const isSelected = selected.includes(id);
                  return (
                    <label
                      key={id}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => onToggle(id)}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-900">{name}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {language === 'vi' ? 'Xác nhận' : language === 'en' ? 'Confirm' : '確認'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Filter Block Component
  const FilterBlock = ({ 
    icon: Icon, 
    label, 
    children, 
    helperText 
  }) => (
    <div className="flex gap-3">
      <div className="flex-shrink-0 pt-1">
        <Icon className="w-5 h-5 text-gray-600" />
      </div>
      <div className="flex-1 space-y-2">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        {children}
        {helperText && (
          <p className="text-xs text-gray-500">{helperText}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full md:w-[400px]">
      <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
        {/* A. Freeword / Keyword */}
        <FilterBlock icon={Search} label={language === 'vi' ? 'Từ khóa' : language === 'en' ? 'Keyword' : 'フリーワード'}>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <button
                  onClick={() => setShowKeywordMode(!showKeywordMode)}
                  className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                >
                  {filters.keywordMode}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {showKeywordMode && (
                  <div className="absolute top-full mt-1 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[80px]">
                    <button
                      onClick={() => {
                        setFilters(prev => ({ ...prev, keywordMode: 'OR' }));
                        setShowKeywordMode(false);
                      }}
                      className="w-full px-3 py-2 text-left text-xs hover:bg-gray-50"
                    >
                      OR
                    </button>
                    <button
                      onClick={() => {
                        setFilters(prev => ({ ...prev, keywordMode: 'AND' }));
                        setShowKeywordMode(false);
                      }}
                      className="w-full px-3 py-2 text-left text-xs hover:bg-gray-50"
                    >
                      AND
                    </button>
                  </div>
                )}
              </div>
            </div>
            <input
              type="text"
              value={filters.keyword}
              onChange={(e) => setFilters(prev => ({ ...prev, keyword: e.target.value }))}
              placeholder={language === 'vi' ? 'ID, tên job, nội dung công việc…' : language === 'en' ? 'ID, job name, job description…' : 'ID、求人名、業務内容…'}
              className="w-full pl-20 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </FilterBlock>

        {/* B. Địa điểm làm việc */}
        <FilterBlock icon={MapPin} label={language === 'vi' ? 'Địa điểm làm việc' : language === 'en' ? 'Work Location' : '勤務地'}>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={filters.locations.length > 0 ? `${filters.locations.length} ${language === 'vi' ? 'địa điểm' : language === 'en' ? 'locations' : '件'}` : ''}
              placeholder={language === 'vi' ? 'Chọn địa điểm làm việc' : language === 'en' ? 'Select work location' : '勤務地を選択'}
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-sm cursor-pointer"
              onClick={() => setShowLocationModal(true)}
            />
            <button
              onClick={() => setShowLocationModal(true)}
              className="px-3 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </FilterBlock>

        {/* D. Nhóm ngành nghề */}
        <FilterBlock icon={Building2} label={language === 'vi' ? 'Nhóm ngành nghề' : language === 'en' ? 'Industry Group' : '業種'}>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={getSelectedJobParentsNames() || ''}
              placeholder={language === 'vi' ? 'Chọn nhóm ngành' : language === 'en' ? 'Select industry group' : '業種を選択'}
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-sm cursor-pointer"
              onClick={() => setShowJobParentModal(true)}
            />
            <button
              onClick={() => setShowJobParentModal(true)}
              className="px-3 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </FilterBlock>

        {/* C. Nghề nghiệp / Vị trí */}
        <FilterBlock 
          icon={Briefcase} 
          label={language === 'vi' ? 'Nghề nghiệp / Vị trí' : language === 'en' ? 'Occupation / Position' : '職種'}
          helperText={filters.jobParentIds.length === 0 ? (language === 'vi' ? 'Hãy chọn nhóm ngành trước' : language === 'en' ? 'Please select industry group first' : '業種を先に選択してください') : undefined}
        >
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={getSelectedJobChildrenNames() || ''}
              placeholder={language === 'vi' ? 'Chọn nghề nghiệp' : language === 'en' ? 'Select occupation' : '職種を選択'}
              disabled={filters.jobParentIds.length === 0}
              className={`flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm cursor-pointer ${
                filters.jobParentIds.length === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-50'
              }`}
              onClick={() => filters.jobParentIds.length > 0 && setShowJobChildModal(true)}
            />
            <button
              onClick={() => filters.jobParentIds.length > 0 && setShowJobChildModal(true)}
              disabled={filters.jobParentIds.length === 0}
              className={`px-3 py-2.5 border border-gray-300 rounded-lg transition-colors ${
                filters.jobParentIds.length === 0 ? 'bg-gray-100 cursor-not-allowed opacity-50' : 'hover:bg-gray-50'
              }`}
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </FilterBlock>

        {/* E. Tuổi */}
        <FilterBlock icon={Calendar} label={language === 'vi' ? 'Tuổi' : language === 'en' ? 'Age' : '年齢'}>
          <div className="flex items-center gap-2">
            <select
              value={filters.age || ''}
              onChange={(e) => setFilters(prev => ({ ...prev, age: e.target.value || null }))}
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            >
              <option value="">{language === 'vi' ? 'Chọn tuổi' : language === 'en' ? 'Select age' : '選択'}</option>
              <option value="18">18</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
            </select>
            <span className="text-xs text-gray-500 whitespace-nowrap">
              {language === 'vi' ? 'tuổi có thể ứng tuyển' : language === 'en' ? 'years old' : '歳で応募可能'}
            </span>
          </div>
        </FilterBlock>

        {/* F. Lương tối thiểu */}
        <FilterBlock icon={DollarSign} label={language === 'vi' ? 'Lương tối thiểu' : language === 'en' ? 'Minimum Salary' : '最低年収'}>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={filters.salaryMin}
              onChange={(e) => setFilters(prev => ({ ...prev, salaryMin: e.target.value ? Number(e.target.value) : '' }))}
              placeholder="Min"
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <span className="text-gray-500">~</span>
            <input
              type="number"
              value={filters.salaryMax}
              onChange={(e) => setFilters(prev => ({ ...prev, salaryMax: e.target.value ? Number(e.target.value) : '' }))}
              placeholder="Max"
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <span className="text-xs text-gray-500 whitespace-nowrap">
              {language === 'vi' ? 'triệu' : language === 'en' ? 'million' : '万円'}
            </span>
          </div>
        </FilterBlock>

        {/* G. Hình thức tuyển dụng */}
        <FilterBlock icon={FileText} label={language === 'vi' ? 'Hình thức tuyển dụng' : language === 'en' ? 'Employment Type' : '雇用形態'}>
          <select
            value={filters.employmentType || ''}
            onChange={(e) => setFilters(prev => ({ ...prev, employmentType: e.target.value || null }))}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          >
            <option value="">{language === 'vi' ? 'Chọn hình thức' : language === 'en' ? 'Select type' : '選択'}</option>
            {mockEmploymentTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </FilterBlock>

        {/* H. Visa */}
        <FilterBlock icon={Globe} label={language === 'vi' ? 'Visa' : language === 'en' ? 'Visa' : 'ビザ'}>
          <select
            value={filters.visaType || ''}
            onChange={(e) => setFilters(prev => ({ ...prev, visaType: e.target.value || null }))}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          >
            <option value="">{language === 'vi' ? 'Chọn loại visa' : language === 'en' ? 'Select visa type' : '選択'}</option>
            {mockVisaTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </FilterBlock>

        {/* I. Điểm nổi bật */}
        <FilterBlock icon={Star} label={language === 'vi' ? 'Điểm nổi bật của job' : language === 'en' ? 'Job Highlights' : '求人の特徴'}>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={getSelectedHighlightsNames() || ''}
              placeholder={language === 'vi' ? 'Chọn điểm nổi bật' : language === 'en' ? 'Select highlights' : '特徴を選択'}
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-sm cursor-pointer"
              onClick={() => setShowHighlightModal(true)}
            />
            <button
              onClick={() => setShowHighlightModal(true)}
              className="px-3 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </FilterBlock>

        {/* J. Nhóm checkbox Yes/No */}
        <FilterBlock icon={CheckSquare} label={language === 'vi' ? 'Điều kiện' : language === 'en' ? 'Conditions' : '条件'}>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.booleans.positionNoExpOk}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  booleans: { ...prev.booleans, positionNoExpOk: e.target.checked }
                }))}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-xs text-gray-700">
                {language === 'vi' ? 'Chưa kinh nghiệm vị trí OK' : language === 'en' ? 'No position exp OK' : '未経験職種OK'}
              </span>
            </label>
            <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.booleans.industryNoExpOk}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  booleans: { ...prev.booleans, industryNoExpOk: e.target.checked }
                }))}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-xs text-gray-700">
                {language === 'vi' ? 'Chưa kinh nghiệm ngành OK' : language === 'en' ? 'No industry exp OK' : '未経験業種OK'}
              </span>
            </label>
            <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.booleans.weekendOff}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  booleans: { ...prev.booleans, weekendOff: e.target.checked }
                }))}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-xs text-gray-700">
                {language === 'vi' ? 'Nghỉ T7-CN' : language === 'en' ? 'Weekend off' : '土日祝休み'}
              </span>
            </label>
            <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.booleans.noExpOk}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  booleans: { ...prev.booleans, noExpOk: e.target.checked }
                }))}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-xs text-gray-700">
                {language === 'vi' ? 'Hoàn toàn chưa kinh nghiệm OK' : language === 'en' ? 'No experience OK' : '完全未経験OK'}
              </span>
            </label>
          </div>
        </FilterBlock>

        {/* Clear All Button */}
        <button
          onClick={handleClearAll}
          className="w-full py-2.5 px-4 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          {language === 'vi' ? 'Xóa tất cả' : language === 'en' ? 'Clear All' : 'すべてクリア'}
        </button>

        {/* Search/Apply Button */}
        <div className="space-y-2">
          <button
            onClick={handleSearch}
            className="w-full h-14 bg-yellow-400 hover:bg-yellow-500 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <Search className="w-5 h-5 text-gray-900" />
            <span className="text-lg font-semibold text-gray-900">
              {language === 'vi' ? 'Tìm kiếm' : language === 'en' ? 'Search' : '検索'}
            </span>
          </button>
          <p className="text-center text-sm text-gray-600">
            {language === 'vi' 
              ? `Tìm kiếm ${resultCount.toLocaleString('vi-VN')} kết quả`
              : language === 'en'
              ? `Search ${resultCount.toLocaleString()} results`
              : `${resultCount.toLocaleString('ja-JP')} 件を検索`
            }
          </p>
        </div>
      </div>

      {/* Modals */}
      <MultiSelectModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
        title={language === 'vi' ? 'Chọn địa điểm làm việc' : language === 'en' ? 'Select Work Location' : '勤務地を選択'}
        options={mockLocations}
        selected={filters.locations}
        onToggle={toggleLocation}
      />

      <MultiSelectModal
        isOpen={showJobParentModal}
        onClose={() => setShowJobParentModal(false)}
        title={language === 'vi' ? 'Chọn nhóm ngành' : language === 'en' ? 'Select Industry Group' : '業種を選択'}
        options={mockJobParents}
        selected={filters.jobParentIds}
        onToggle={toggleJobParent}
      />

      <MultiSelectModal
        isOpen={showJobChildModal}
        onClose={() => setShowJobChildModal(false)}
        title={language === 'vi' ? 'Chọn nghề nghiệp' : language === 'en' ? 'Select Occupation' : '職種を選択'}
        options={availableJobChildren}
        selected={filters.jobChildIds}
        onToggle={toggleJobChild}
        loading={loadingChildren}
      />

      <MultiSelectModal
        isOpen={showHighlightModal}
        onClose={() => setShowHighlightModal(false)}
        title={language === 'vi' ? 'Chọn điểm nổi bật' : language === 'en' ? 'Select Highlights' : '特徴を選択'}
        options={mockHighlights}
        selected={filters.highlights}
        onToggle={toggleHighlight}
      />
    </div>
  );
};

export default AgentJobsPageSession1;

