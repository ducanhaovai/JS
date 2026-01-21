import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Target,
  Calendar,
  DollarSign,
  FileText,
  Save,
  X,
  Clock,
  TrendingUp,
  Users,
  Briefcase,
} from 'lucide-react';

const AddCampaignPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Basic Information
    campaignId: '',
    name: '',
    description: '',
    status: 'upcoming',
    // Time Period
    startDate: '',
    endDate: '',
    // Budget
    budget: '',
    // Additional Options
    isActive: true,
    autoStart: false,
    autoEnd: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement submit logic
    console.log('Submit form:', formData);
    alert('Chiến dịch đã được tạo thành công!');
    navigate('/admin/campaigns');
  };

  const handleCancel = () => {
    if (window.confirm('Bạn có chắc muốn hủy? Dữ liệu chưa lưu sẽ bị mất.')) {
      navigate('/admin/campaigns');
    }
  };

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/admin/campaigns')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Tạo chiến dịch</h1>
            <p className="text-xs text-gray-500 mt-1">Thêm thông tin chiến dịch tuyển dụng mới vào hệ thống</p>
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
            Lưu chiến dịch
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
              <Target className="w-4 h-4 text-blue-600" />
              Thông tin cơ bản
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Mã chiến dịch <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="campaignId"
                    value={formData.campaignId}
                    onChange={handleInputChange}
                    placeholder="VD: CAMP001"
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
                    <option value="upcoming">Sắp diễn ra</option>
                    <option value="active">Đang hoạt động</option>
                    <option value="ended">Đã kết thúc</option>
                    <option value="inactive">Ngừng hoạt động</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Tên chiến dịch <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="VD: Chiến dịch Tuyển dụng Mùa Xuân 2025"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Mô tả chiến dịch
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Mô tả chi tiết về chiến dịch tuyển dụng, mục tiêu, đối tượng tuyển dụng..."
                  rows="5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Time Period */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <Calendar className="w-4 h-4 text-blue-600" />
              Thời gian chiến dịch
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Ngày bắt đầu <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    Ngày kết thúc <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      required
                      min={formData.startDate}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="autoStart"
                    checked={formData.autoStart}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                  />
                  <label className="text-xs font-semibold text-gray-900">
                    Tự động kích hoạt khi đến ngày bắt đầu
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="autoEnd"
                    checked={formData.autoEnd}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                  />
                  <label className="text-xs font-semibold text-gray-900">
                    Tự động kết thúc khi đến ngày kết thúc
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <DollarSign className="w-4 h-4 text-blue-600" />
              Ngân sách chiến dịch
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Ngân sách (VND) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="VD: 50000000"
                    required
                    min="0"
                    step="1000"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <p className="mt-1 text-[10px] text-gray-500">
                  {formData.budget ? new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 0,
                  }).format(parseInt(formData.budget) || 0) : 'Nhập số tiền ngân sách cho chiến dịch'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          {/* Campaign Statistics Preview */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              Thống kê (Dự kiến)
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-[10px] font-medium text-blue-800">Số job</span>
                  </div>
                  <div className="text-lg font-bold text-blue-900">0</div>
                  <p className="text-[10px] text-blue-700 mt-1">Sẽ được cập nhật sau</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-[10px] font-medium text-green-800">Ứng tuyển</span>
                  </div>
                  <div className="text-lg font-bold text-green-900">0</div>
                  <p className="text-[10px] text-green-700 mt-1">Sẽ được cập nhật sau</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
                    <span className="text-[10px] font-medium text-purple-800">Tiến cử</span>
                  </div>
                  <div className="text-lg font-bold text-purple-900">0</div>
                  <p className="text-[10px] text-purple-700 mt-1">Sẽ được cập nhật sau</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-3.5 h-3.5 text-orange-600" />
                    <span className="text-[10px] font-medium text-orange-800">Lượt xem</span>
                  </div>
                  <div className="text-lg font-bold text-orange-900">0</div>
                  <p className="text-[10px] text-orange-700 mt-1">Sẽ được cập nhật sau</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <FileText className="w-4 h-4 text-blue-600" />
              Thông tin bổ sung
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Ghi chú nội bộ
                </label>
                <textarea
                  name="notes"
                  placeholder="Ghi chú nội bộ về chiến dịch (chỉ admin mới thấy)..."
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleInputChange}
                  className="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                />
                <label className="text-xs font-semibold text-gray-900">
                  Kích hoạt chiến dịch ngay sau khi tạo
                </label>
              </div>
            </div>
          </div>

          {/* Campaign Settings */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
              Cài đặt chiến dịch
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-gray-900 mb-2">Lưu ý:</p>
                <ul className="text-[10px] text-gray-700 space-y-1 list-disc list-inside">
                  <li>Chiến dịch sẽ được hiển thị trên trang công khai sau khi được kích hoạt</li>
                  <li>Bạn có thể thêm job vào chiến dịch sau khi tạo</li>
                  <li>Thống kê sẽ được cập nhật tự động khi có hoạt động</li>
                  <li>Ngân sách có thể được điều chỉnh sau</li>
                </ul>
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
          Lưu chiến dịch
        </button>
      </div>
    </div>
  );
};

export default AddCampaignPage;

