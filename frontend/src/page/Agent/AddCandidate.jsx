import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  User,
  GraduationCap,
  Briefcase,
  FileText,
  Award,
  UserCircle,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Upload,
  Plus,
} from 'lucide-react';

const AddCandidate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Personal Information
    nameKanji: '',
    nameKana: '',
    birthDate: '',
    age: '',
    gender: '',
    postalCode: '',
    address: '',
    phone: '',
    email: '',
    // Education
    educations: [],
    // Work Experience
    workExperiences: [],
    // Skills & Certificates
    technicalSkills: '',
    certificates: [],
    // Self Introduction
    careerSummary: '',
    strengths: '',
    motivation: '',
    // Preferences
    currentSalary: '',
    desiredSalary: '',
    desiredPosition: '',
    desiredLocation: '',
    desiredStartDate: '',
  });
  const [cvFiles, setCvFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setCvFiles(files);
  };

  const handleAddEducation = () => {
    // TODO: Implement add education modal/form
    console.log('Add education');
  };

  const handleAddWorkExperience = () => {
    // TODO: Implement add work experience modal/form
    console.log('Add work experience');
  };

  const handleAddCertificate = () => {
    // TODO: Implement add certificate modal/form
    console.log('Add certificate');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement submit logic
    console.log('Submit form:', formData);
    alert('Ứng viên đã được lưu thành công!');
    navigate('/agent/candidates');
  };

  const handleCancel = () => {
    if (window.confirm('Bạn có chắc muốn hủy? Dữ liệu chưa lưu sẽ bị mất.')) {
      navigate('/agent/candidates');
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-white rounded-2xl p-4 border border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/agent/candidates')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Tạo ứng viên</h1>
            <p className="text-sm text-gray-600 mt-1">Thêm thông tin ứng viên mới vào hệ thống</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors"
          >
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700 transition-colors"
          >
            Lưu ứng viên
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-red-600" />
              Thông tin cá nhân (個人情報)
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Họ tên (Kanji) - 氏名 *
                  </label>
                  <input
                    type="text"
                    name="nameKanji"
                    value={formData.nameKanji}
                    onChange={handleInputChange}
                    placeholder="VD: 山田 太郎"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Họ tên (Kana) - ふりがな
                  </label>
                  <input
                    type="text"
                    name="nameKana"
                    value={formData.nameKana}
                    onChange={handleInputChange}
                    placeholder="VD: やまだ たろう"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Ngày sinh - 生年月日
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      placeholder="1990年1月1日"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Tuổi - 満歳
                  </label>
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="30"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Giới tính - 性別
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Chọn</option>
                    <option value="男">Nam (男)</option>
                    <option value="女">Nữ (女)</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t pt-4 mt-4">
                <h3 className="text-sm font-bold text-gray-700 mb-3">
                  Thông tin liên hệ (連絡先)
                </h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-900 mb-1">
                        Mã bưu điện - 〒
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="123-4567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-gray-900 mb-1">
                        Địa chỉ - 現住所
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="東京都渋谷区..."
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-900 mb-1">
                        Điện thoại - 電話
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="090-1234-5678"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-900 mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="email@example.com"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-red-600" />
              Học vấn (学歴)
            </h2>
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleAddEducation}
                className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Thêm học vấn
              </button>
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-red-600" />
              Kinh nghiệm làm việc (職歴)
            </h2>
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleAddWorkExperience}
                className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Thêm kinh nghiệm
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Upload CV */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-red-600" />
              Upload CV
            </h2>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-red-600 transition-colors">
              <label htmlFor="cv-upload" className="cursor-pointer">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <Upload className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">Kéo thả file CV vào đây</p>
                    <p className="text-xs text-gray-500">hoặc</p>
                    <p className="text-sm text-red-600 font-medium mt-1">Chọn file từ máy tính</p>
                  </div>
                  <p className="text-xs text-gray-500">Hỗ trợ nhiều file PDF - Tự động trích xuất dữ liệu</p>
                </div>
                <input
                  id="cv-upload"
                  type="file"
                  accept=".pdf"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
            {cvFiles.length > 0 && (
              <div className="mt-4 space-y-2">
                {cvFiles.map((file, index) => (
                  <div key={index} className="text-sm text-gray-600">
                    {file.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Skills & Certificates */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-red-600" />
              Kỹ năng & Chứng chỉ (資格)
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-1">
                  Kỹ năng kỹ thuật (活かせる経験・知識・技術)
                </label>
                <textarea
                  name="technicalSkills"
                  value={formData.technicalSkills}
                  onChange={handleInputChange}
                  placeholder="VD: Project Management, React, Python..."
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-2">
                  Chứng chỉ (免許・資格)
                </label>
                <button
                  type="button"
                  onClick={handleAddCertificate}
                  className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" />
                  Thêm chứng chỉ
                </button>
              </div>
            </div>
          </div>

          {/* Self Introduction */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <UserCircle className="w-5 h-5 text-red-600" />
              Giới thiệu bản thân (自己PR)
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-1">
                  Tóm tắt nghề nghiệp (職務要約)
                </label>
                <textarea
                  name="careerSummary"
                  value={formData.careerSummary}
                  onChange={handleInputChange}
                  placeholder="Tóm tắt kinh nghiệm làm việc..."
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-1">
                  Điểm mạnh (自己PR)
                </label>
                <textarea
                  name="strengths"
                  value={formData.strengths}
                  onChange={handleInputChange}
                  placeholder="Điểm mạnh của bạn..."
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-1">
                  Động lực ứng tuyển (志望動機)
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder="Lý do muốn ứng tuyển..."
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Mong muốn (希望)</h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Lương hiện tại (現在年収)
                  </label>
                  <input
                    type="text"
                    name="currentSalary"
                    value={formData.currentSalary}
                    onChange={handleInputChange}
                    placeholder="VD: 500万円"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Lương mong muốn (希望年収)
                  </label>
                  <input
                    type="text"
                    name="desiredSalary"
                    value={formData.desiredSalary}
                    onChange={handleInputChange}
                    placeholder="VD: 600万円"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-1">
                  Vị trí mong muốn (希望職種)
                </label>
                <input
                  type="text"
                  name="desiredPosition"
                  value={formData.desiredPosition}
                  onChange={handleInputChange}
                  placeholder="VD: Software Engineer"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Địa điểm (希望勤務地)
                  </label>
                  <input
                    type="text"
                    name="desiredLocation"
                    value={formData.desiredLocation}
                    onChange={handleInputChange}
                    placeholder="VD: Tokyo"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Ngày bắt đầu (希望入社日)
                  </label>
                  <input
                    type="text"
                    name="desiredStartDate"
                    value={formData.desiredStartDate}
                    onChange={handleInputChange}
                    placeholder="VD: 2025年4月"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCandidate;

