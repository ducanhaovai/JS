import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  Building2,
  MapPin,
  DollarSign,
  Clock,
  FileText,
  Tag,
  Calendar,
  Upload,
  Plus,
  Save,
  X,
  DollarSign as Money,
  Award,
  Users,
} from 'lucide-react';

const AdminAddJobPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Basic Information
    jobCode: '',
    title: '',
    description: '',
    requirements: '',
    instruction: '',
    categoryId: '',
    companyId: '',
    // Location
    workLocation: '',
    interviewLocation: '',
    // Salary & Benefits
    estimatedSalary: '',
    allowance: '',
    bonus: '',
    salaryReview: '',
    benefits: '',
    socialInsurance: '',
    transportation: '',
    // Working Time
    workingHours: '',
    breakTime: '',
    overtime: '',
    overtimeAllowance: '',
    holidays: '',
    deadline: '',
    // Recruitment Type
    recruitmentType: '',
    contractPeriod: '',
    smokingPolicy: '',
    // Company Information
    companyName: '',
    companyWebsite: '',
    headOffice: '',
    otherOffices: '',
    businessField: '',
    affiliatedCompanies: '',
    stockListing: '',
    majorShareholders: '',
    // Commission
    referralAmount: '',
    companyCommission: '',
    fullAmount: '',
    sameDayPayment: false,
    // Status
    status: 'draft',
    isPinned: false,
    isHot: false,
    // Tags & Keywords
    tags: [],
    keywords: [],
  });
  const [jdFiles, setJdFiles] = useState([]);
  const [cvFormFile, setCvFormFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleJdFileChange = (e) => {
    const files = Array.from(e.target.files);
    setJdFiles(files);
  };

  const handleCvFormFileChange = (e) => {
    if (e.target.files[0]) {
      setCvFormFile(e.target.files[0]);
    }
  };

  const handleAddTag = () => {
    // TODO: Implement add tag modal/form
    console.log('Add tag');
  };

  const handleAddKeyword = () => {
    // TODO: Implement add keyword modal/form
    console.log('Add keyword');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement submit logic
    console.log('Submit form:', formData);
    alert('Job đã được lưu thành công!');
    navigate('/admin/jobs');
  };

  const handleCancel = () => {
    if (window.confirm('Bạn có chắc muốn hủy? Dữ liệu chưa lưu sẽ bị mất.')) {
      navigate('/admin/jobs');
    }
  };

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/admin/jobs')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Tạo công việc</h1>
            <p className="text-xs text-gray-500 mt-1">Thêm thông tin công việc mới vào hệ thống</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-200 transition-colors flex items-center gap-1.5"
          >
            <X className="w-3.5 h-3.5" />
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors flex items-center gap-1.5"
          >
            <Save className="w-3.5 h-3.5" />
            Lưu công việc
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Left Column */}
        <div className="space-y-3">
          {/* Basic Information */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <Briefcase className="w-4 h-4 text-blue-600" />
              Thông tin cơ bản
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Mã việc làm <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobCode"
                    value={formData.jobCode}
                    onChange={handleInputChange}
                    placeholder="VD: JOB-001"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Trạng thái <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="closed">Closed</option>
                    <option value="expired">Expired</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Tiêu đề công việc <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="VD: Software Engineer - React/Node.js Developer"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Danh mục <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="categoryId"
                    value={formData.categoryId}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Chọn danh mục</option>
                    <option value="1">IT / Phát triển phần mềm</option>
                    <option value="2">Xây dựng / Quản lý dự án</option>
                    <option value="3">Marketing / Quảng cáo</option>
                    <option value="4">Kỹ thuật xây dựng & dân dụng</option>
                    <option value="5">Công nhân kỹ năng, Thiết bị</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Công ty <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="companyId"
                    value={formData.companyId}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Chọn công ty</option>
                    <option value="1">Công ty TNHH Nikken Total Sourcing</option>
                    <option value="2">Công ty TNHH SECOM</option>
                    <option value="3">Tech Startup Japan</option>
                    <option value="4">Construction Corp Japan</option>
                    <option value="5">Fashion Brand Japan</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Mô tả công việc
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Mô tả chi tiết về công việc..."
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Yêu cầu công việc
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="Yêu cầu về kinh nghiệm, kỹ năng, bằng cấp..."
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Hướng dẫn ứng tuyển
                </label>
                <textarea
                  name="instruction"
                  value={formData.instruction}
                  onChange={handleInputChange}
                  placeholder="Hướng dẫn cách ứng tuyển..."
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <MapPin className="w-4 h-4 text-blue-600" />
              Địa điểm
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Nơi làm việc
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="text"
                    name="workLocation"
                    value={formData.workLocation}
                    onChange={handleInputChange}
                    placeholder="VD: Tokyo, Osaka, Remote"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Địa điểm phỏng vấn
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="text"
                    name="interviewLocation"
                    value={formData.interviewLocation}
                    onChange={handleInputChange}
                    placeholder="VD: Tokyo Office hoặc Online"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Salary & Benefits */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <DollarSign className="w-4 h-4 text-blue-600" />
              Lương & Phúc lợi
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Lương ước tính
                  </label>
                  <div className="relative">
                    <Money className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                    <input
                      type="text"
                      name="estimatedSalary"
                      value={formData.estimatedSalary}
                      onChange={handleInputChange}
                      placeholder="VD: 500-700万円/năm"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Phụ cấp
                  </label>
                  <input
                    type="text"
                    name="allowance"
                    value={formData.allowance}
                    onChange={handleInputChange}
                    placeholder="VD: Phụ cấp đi lại, ăn trưa"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Thưởng
                  </label>
                  <input
                    type="text"
                    name="bonus"
                    value={formData.bonus}
                    onChange={handleInputChange}
                    placeholder="VD: 2 lần/năm, tối đa 198万円"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Đánh giá lương
                  </label>
                  <input
                    type="text"
                    name="salaryReview"
                    value={formData.salaryReview}
                    onChange={handleInputChange}
                    placeholder="VD: Hàng năm"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Phúc lợi
                </label>
                <textarea
                  name="benefits"
                  value={formData.benefits}
                  onChange={handleInputChange}
                  placeholder="VD: Bảo hiểm xã hội, nghỉ phép, đào tạo..."
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Bảo hiểm xã hội
                  </label>
                  <input
                    type="text"
                    name="socialInsurance"
                    value={formData.socialInsurance}
                    onChange={handleInputChange}
                    placeholder="VD: Có"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Phụ cấp đi lại
                  </label>
                  <input
                    type="text"
                    name="transportation"
                    value={formData.transportation}
                    onChange={handleInputChange}
                    placeholder="VD: Có, tối đa 15,000円/tháng"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Working Time */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <Clock className="w-4 h-4 text-blue-600" />
              Thời gian làm việc
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Giờ làm việc
                  </label>
                  <input
                    type="text"
                    name="workingHours"
                    value={formData.workingHours}
                    onChange={handleInputChange}
                    placeholder="VD: 9:00 - 18:00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Thời gian nghỉ
                  </label>
                  <input
                    type="text"
                    name="breakTime"
                    value={formData.breakTime}
                    onChange={handleInputChange}
                    placeholder="VD: 60 phút"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Làm thêm giờ
                  </label>
                  <input
                    type="text"
                    name="overtime"
                    value={formData.overtime}
                    onChange={handleInputChange}
                    placeholder="VD: Có, tùy dự án"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Phụ cấp làm thêm
                  </label>
                  <input
                    type="text"
                    name="overtimeAllowance"
                    value={formData.overtimeAllowance}
                    onChange={handleInputChange}
                    placeholder="VD: Theo quy định"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Ngày nghỉ
                  </label>
                  <input
                    type="text"
                    name="holidays"
                    value={formData.holidays}
                    onChange={handleInputChange}
                    placeholder="VD: Thứ 7, Chủ nhật, ngày lễ"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Hạn nộp hồ sơ
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                    <input
                      type="text"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      placeholder="VD: 2025/03/31"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          {/* Recruitment Type */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <Users className="w-4 h-4 text-blue-600" />
              Loại tuyển dụng
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Loại tuyển dụng
                </label>
                <select
                  name="recruitmentType"
                  value={formData.recruitmentType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Chọn</option>
                  <option value="fulltime">Nhân viên chính thức</option>
                  <option value="contract">Hợp đồng</option>
                  <option value="parttime">Bán thời gian</option>
                  <option value="intern">Thực tập</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Thời hạn hợp đồng
                </label>
                  <input
                    type="text"
                    name="contractPeriod"
                    value={formData.contractPeriod}
                    onChange={handleInputChange}
                    placeholder="VD: Không thời hạn, 1 năm, 2 năm"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Chính sách hút thuốc
                </label>
                <select
                  name="smokingPolicy"
                  value={formData.smokingPolicy}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Chọn</option>
                  <option value="no">Không hút thuốc</option>
                  <option value="yes">Cho phép hút thuốc</option>
                  <option value="separate">Khu vực riêng</option>
                </select>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <Building2 className="w-4 h-4 text-blue-600" />
              Thông tin công ty
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Tên công ty
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="VD: Công ty TNHH ABC"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Website công ty
                </label>
                <input
                  type="url"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleInputChange}
                  placeholder="VD: https://example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Trụ sở chính
                </label>
                <input
                  type="text"
                  name="headOffice"
                  value={formData.headOffice}
                  onChange={handleInputChange}
                  placeholder="VD: Tokyo, Japan"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Văn phòng khác
                </label>
                <textarea
                  name="otherOffices"
                  value={formData.otherOffices}
                  onChange={handleInputChange}
                  placeholder="VD: Osaka, Kyoto..."
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Lĩnh vực kinh doanh
                </label>
                <input
                  type="text"
                  name="businessField"
                  value={formData.businessField}
                  onChange={handleInputChange}
                  placeholder="VD: IT, Xây dựng, Marketing"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
          </div>

          {/* Commission */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <Money className="w-4 h-4 text-blue-600" />
              Phí giới thiệu
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Số tiền giới thiệu (Toàn bộ)
                </label>
                <input
                  type="text"
                  name="fullAmount"
                  value={formData.fullAmount}
                  onChange={handleInputChange}
                  placeholder="VD: 77 triệu yên"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Phí công ty bạn
                </label>
                <input
                  type="text"
                  name="companyCommission"
                  value={formData.companyCommission}
                  onChange={handleInputChange}
                  placeholder="VD: 77 triệu yên hoặc 36% lương"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="sameDayPayment"
                  checked={formData.sameDayPayment}
                  onChange={handleInputChange}
                  className="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                />
                <label className="text-xs font-semibold text-gray-900">
                  Có thể thanh toán trong ngày
                </label>
              </div>
            </div>
          </div>

          {/* Tags & Keywords */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <Tag className="w-4 h-4 text-blue-600" />
              Tags & Keywords
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Tags
                </label>
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Thêm tag
                </button>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Keywords
                </label>
                <button
                  type="button"
                  onClick={handleAddKeyword}
                  className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Thêm keyword
                </button>
              </div>
            </div>
          </div>

          {/* Upload Files */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <FileText className="w-4 h-4 text-blue-600" />
              Upload Files
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  JD File (Tiếng Việt & Tiếng Nhật)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-600 transition-colors">
                  <label htmlFor="jd-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <Upload className="w-5 h-5 text-gray-400" />
                      </div>
                      <p className="text-xs font-semibold text-gray-900">Kéo thả file JD vào đây</p>
                      <p className="text-[10px] text-gray-500">hoặc</p>
                      <p className="text-xs text-blue-600 font-medium">Chọn file từ máy tính</p>
                      <p className="text-[10px] text-gray-500">Hỗ trợ PDF</p>
                    </div>
                    <input
                      id="jd-upload"
                      type="file"
                      accept=".pdf"
                      multiple
                      onChange={handleJdFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
                {jdFiles.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {jdFiles.map((file, index) => (
                      <div key={index} className="text-xs text-gray-600">
                        {file.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Form CV bắt buộc
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-600 transition-colors">
                  <label htmlFor="cv-form-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <Upload className="w-5 h-5 text-gray-400" />
                      </div>
                      <p className="text-xs font-semibold text-gray-900">Kéo thả file CV Form vào đây</p>
                      <p className="text-[10px] text-gray-500">hoặc</p>
                      <p className="text-xs text-blue-600 font-medium">Chọn file từ máy tính</p>
                      <p className="text-[10px] text-gray-500">Hỗ trợ PDF, Excel</p>
                    </div>
                    <input
                      id="cv-form-upload"
                      type="file"
                      accept=".pdf,.xlsx,.xls"
                      onChange={handleCvFormFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
                {cvFormFile && (
                  <div className="mt-2 text-xs text-gray-600">
                    {cvFormFile.name}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Status & Options */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">Tùy chọn</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="isPinned"
                  checked={formData.isPinned}
                  onChange={handleInputChange}
                  className="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                />
                <label className="text-xs font-semibold text-gray-900">
                  Ghim lên đầu
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="isHot"
                  checked={formData.isHot}
                  onChange={handleInputChange}
                  className="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                />
                <label className="text-xs font-semibold text-gray-900">
                  Việc làm hot
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Action Buttons */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={handleCancel}
          className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
        >
          <X className="w-3.5 h-3.5" />
          Hủy
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Save className="w-3.5 h-3.5" />
          Lưu công việc
        </button>
      </div>
    </div>
  );
};

export default AdminAddJobPage;

