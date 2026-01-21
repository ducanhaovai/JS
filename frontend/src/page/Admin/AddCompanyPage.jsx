import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Building2,
  Mail,
  Phone,
  MapPin,
  Globe,
  FileText,
  Upload,
  Plus,
  Save,
  X,
  Image as ImageIcon,
  Users,
} from 'lucide-react';

const AdminAddCompanyPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Basic Information
    name: '',
    companyCode: '',
    type: '',
    // Contact Information
    email: '',
    phone: '',
    address: '',
    website: '',
    // Additional Information
    description: '',
    emailCc: '',
    emailBcc: '',
    // Status
    status: 'active',
    // Logo
    logo: null,
  });
  const [logoPreview, setLogoPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogoChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        logo: file
      }));
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddEmailCc = () => {
    // TODO: Implement add email CC modal/form
    console.log('Add email CC');
  };

  const handleAddEmailBcc = () => {
    // TODO: Implement add email BCC modal/form
    console.log('Add email BCC');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement submit logic
    console.log('Submit form:', formData);
    alert('Doanh nghiệp đã được tạo thành công!');
    navigate('/admin/companies');
  };

  const handleCancel = () => {
    if (window.confirm('Bạn có chắc muốn hủy? Dữ liệu chưa lưu sẽ bị mất.')) {
      navigate('/admin/companies');
    }
  };

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/admin/companies')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Tạo doanh nghiệp</h1>
            <p className="text-xs text-gray-500 mt-1">Thêm thông tin doanh nghiệp mới vào hệ thống</p>
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
            Lưu doanh nghiệp
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
              <Building2 className="w-4 h-4 text-blue-600" />
              Thông tin cơ bản
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Tên công ty <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="VD: Công ty TNHH ABC"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Mã công ty <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyCode"
                    value={formData.companyCode}
                    onChange={handleInputChange}
                    placeholder="VD: ABC, NTS, SECOM"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Loại công ty
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Chọn loại</option>
                    <option value="Tuyển dụng">Tuyển dụng</option>
                    <option value="Bảo vệ">Bảo vệ</option>
                    <option value="IT">IT</option>
                    <option value="Xây dựng">Xây dựng</option>
                    <option value="Thời trang">Thời trang</option>
                    <option value="Thiết kế">Thiết kế</option>
                    <option value="QA">QA</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>
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
                  <option value="active">Đang hoạt động</option>
                  <option value="inactive">Ngừng hoạt động</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <Mail className="w-4 h-4 text-blue-600" />
              Thông tin liên hệ
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="VD: contact@company.com"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Số điện thoại
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="VD: 03-1234-5678"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Địa chỉ
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="VD: 7-23-3 Nishi-Kamata, Ota-ku, Tokyo"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Website
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="VD: https://company.com"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Email Configuration */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <Users className="w-4 h-4 text-blue-600" />
              Cấu hình Email
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Email CC (phân cách bằng dấu phẩy)
                </label>
                <input
                  type="text"
                  name="emailCc"
                  value={formData.emailCc}
                  onChange={handleInputChange}
                  placeholder="VD: cc1@company.com, cc2@company.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <p className="mt-1 text-[10px] text-gray-500">
                  Nhập nhiều email, phân cách bằng dấu phẩy
                </p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Email BCC (phân cách bằng dấu phẩy)
                </label>
                <input
                  type="text"
                  name="emailBcc"
                  value={formData.emailBcc}
                  onChange={handleInputChange}
                  placeholder="VD: bcc1@company.com, bcc2@company.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <p className="mt-1 text-[10px] text-gray-500">
                  Nhập nhiều email, phân cách bằng dấu phẩy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          {/* Logo Upload */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <ImageIcon className="w-4 h-4 text-blue-600" />
              Logo công ty
            </h2>
            <div className="space-y-3">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-600 transition-colors">
                <label htmlFor="logo-upload" className="cursor-pointer">
                  <div className="flex flex-col items-center gap-3">
                    {logoPreview ? (
                      <div className="relative">
                        <img
                          src={logoPreview}
                          alt="Logo preview"
                          className="w-32 h-32 object-contain rounded-lg border border-gray-200"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setLogoPreview(null);
                            setFormData(prev => ({ ...prev, logo: null }));
                          }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center">
                        <ImageIcon className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-semibold text-gray-900 mb-1">
                        {logoPreview ? 'Thay đổi logo' : 'Kéo thả logo vào đây'}
                      </p>
                      <p className="text-[10px] text-gray-500">hoặc</p>
                      <p className="text-xs text-blue-600 font-medium mt-1">Chọn file từ máy tính</p>
                    </div>
                    <p className="text-[10px] text-gray-500">Hỗ trợ PNG, JPG, SVG - Kích thước tối đa 5MB</p>
                  </div>
                  <input
                    id="logo-upload"
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/svg+xml"
                    onChange={handleLogoChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <FileText className="w-4 h-4 text-blue-600" />
              Mô tả công ty
            </h2>
            <div>
              <label className="block text-xs font-semibold text-gray-900 mb-2">
                Giới thiệu về công ty
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Nhập mô tả về công ty, lĩnh vực hoạt động, quy mô, văn hóa công ty..."
                rows="8"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              />
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
          Lưu doanh nghiệp
        </button>
      </div>
    </div>
  );
};

export default AdminAddCompanyPage;

