import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  User,
  Briefcase,
  Users,
  Calendar,
  DollarSign,
  FileText,
  Save,
  X,
  Search,
  Building2,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from 'lucide-react';

const AdminAddNominationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Basic Information
    candidateId: '',
    candidateName: '',
    jobId: '',
    jobTitle: '',
    collaboratorId: '',
    collaboratorName: '',
    // Dates
    appliedDate: new Date().toISOString().split('T')[0],
    interviewDate: '',
    // Status
    status: 'pending',
    // Financial
    referralFee: '',
    salary: '',
    // Notes
    notes: '',
  });

  const [candidateSearch, setCandidateSearch] = useState('');
  const [jobSearch, setJobSearch] = useState('');
  const [collaboratorSearch, setCollaboratorSearch] = useState('');
  const [showCandidateDropdown, setShowCandidateDropdown] = useState(false);
  const [showJobDropdown, setShowJobDropdown] = useState(false);
  const [showCollaboratorDropdown, setShowCollaboratorDropdown] = useState(false);

  // Mock data
  const candidates = [
    { id: '00044572', name: 'Nguyen Van A', email: 'nguyenvana@example.com' },
    { id: '00044064', name: 'Tran Thi B', email: 'tranthib@example.com' },
    { id: '00043293', name: 'Le Van C', email: 'levanc@example.com' },
    { id: '00043103', name: 'Pham Thi D', email: 'phamthid@example.com' },
    { id: '00042979', name: 'Hoang Van E', email: 'hoangvane@example.com' },
  ];

  const jobs = [
    { id: 'JOB001', title: 'Software Engineer', company: 'Tech Company A' },
    { id: 'JOB002', title: 'Project Manager', company: 'Business Corp' },
    { id: 'JOB003', title: 'Frontend Developer', company: 'Web Solutions' },
    { id: 'JOB004', title: 'Backend Developer', company: 'Tech Startup' },
    { id: 'JOB005', title: 'DevOps Engineer', company: 'Cloud Services' },
  ];

  const collaborators = [
    { id: 'CTV001', name: 'Nguyen Thi X', email: 'nguyenthix@example.com' },
    { id: 'CTV002', name: 'Tran Van Y', email: 'tranvany@example.com' },
    { id: 'CTV003', name: 'Le Thi Z', email: 'lethiz@example.com' },
    { id: 'CTV004', name: 'Pham Van W', email: 'phamvanw@example.com' },
    { id: 'CTV005', name: 'Hoang Thi V', email: 'hoangthiv@example.com' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCandidateSelect = (candidate) => {
    setFormData(prev => ({
      ...prev,
      candidateId: candidate.id,
      candidateName: candidate.name,
    }));
    setCandidateSearch(candidate.name);
    setShowCandidateDropdown(false);
  };

  const handleJobSelect = (job) => {
    setFormData(prev => ({
      ...prev,
      jobId: job.id,
      jobTitle: job.title,
    }));
    setJobSearch(job.title);
    setShowJobDropdown(false);
  };

  const handleCollaboratorSelect = (collaborator) => {
    setFormData(prev => ({
      ...prev,
      collaboratorId: collaborator.id,
      collaboratorName: collaborator.name,
    }));
    setCollaboratorSearch(collaborator.name);
    setShowCollaboratorDropdown(false);
  };

  const filteredCandidates = candidates.filter(c =>
    c.name.toLowerCase().includes(candidateSearch.toLowerCase()) ||
    c.id.includes(candidateSearch)
  );

  const filteredJobs = jobs.filter(j =>
    j.title.toLowerCase().includes(jobSearch.toLowerCase()) ||
    j.id.toLowerCase().includes(jobSearch.toLowerCase()) ||
    j.company.toLowerCase().includes(jobSearch.toLowerCase())
  );

  const filteredCollaborators = collaborators.filter(c =>
    c.name.toLowerCase().includes(collaboratorSearch.toLowerCase()) ||
    c.id.includes(collaboratorSearch)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement submit logic
    console.log('Submit form:', formData);
    alert('Đơn tiến cử đã được tạo thành công!');
    navigate('/admin/nominations');
  };

  const handleCancel = () => {
    if (window.confirm('Bạn có chắc muốn hủy? Dữ liệu chưa lưu sẽ bị mất.')) {
      navigate('/admin/nominations');
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-3.5 h-3.5" />;
      case 'interviewed':
        return <AlertCircle className="w-3.5 h-3.5" />;
      case 'accepted':
        return <CheckCircle className="w-3.5 h-3.5" />;
      case 'rejected':
        return <XCircle className="w-3.5 h-3.5" />;
      default:
        return <Clock className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/admin/nominations')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Tạo đơn tiến cử</h1>
            <p className="text-xs text-gray-500 mt-1">Thêm đơn tiến cử ứng viên vào job mới</p>
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
            Lưu đơn tiến cử
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Left Column */}
        <div className="space-y-3">
          {/* Candidate Selection */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <User className="w-4 h-4 text-blue-600" />
              Ứng viên <span className="text-red-500">*</span>
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Tìm kiếm ứng viên
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Nhập tên hoặc ID ứng viên..."
                    value={candidateSearch}
                    onChange={(e) => {
                      setCandidateSearch(e.target.value);
                      setShowCandidateDropdown(true);
                    }}
                    onFocus={() => setShowCandidateDropdown(true)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  {showCandidateDropdown && filteredCandidates.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {filteredCandidates.map((candidate) => (
                        <button
                          key={candidate.id}
                          type="button"
                          onClick={() => handleCandidateSelect(candidate)}
                          className="w-full px-3 py-2 text-left text-xs hover:bg-gray-100 flex items-center justify-between"
                        >
                          <div>
                            <div className="font-medium text-gray-900">{candidate.name}</div>
                            <div className="text-gray-500">{candidate.id} • {candidate.email}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {formData.candidateId && (
                  <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="text-xs font-medium text-blue-900">Đã chọn: {formData.candidateName}</div>
                    <div className="text-[10px] text-blue-700">ID: {formData.candidateId}</div>
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => navigate('/admin/candidates/new')}
                className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <span>+ Tạo ứng viên mới</span>
              </button>
            </div>
          </div>

          {/* Job Selection */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <Briefcase className="w-4 h-4 text-blue-600" />
              Công việc <span className="text-red-500">*</span>
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Tìm kiếm công việc
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Nhập tên job, ID hoặc công ty..."
                    value={jobSearch}
                    onChange={(e) => {
                      setJobSearch(e.target.value);
                      setShowJobDropdown(true);
                    }}
                    onFocus={() => setShowJobDropdown(true)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  {showJobDropdown && filteredJobs.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {filteredJobs.map((job) => (
                        <button
                          key={job.id}
                          type="button"
                          onClick={() => handleJobSelect(job)}
                          className="w-full px-3 py-2 text-left text-xs hover:bg-gray-100"
                        >
                          <div className="font-medium text-gray-900">{job.title}</div>
                          <div className="text-gray-500">{job.id} • {job.company}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {formData.jobId && (
                  <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="text-xs font-medium text-blue-900">Đã chọn: {formData.jobTitle}</div>
                    <div className="text-[10px] text-blue-700">ID: {formData.jobId}</div>
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => navigate('/admin/jobs/create')}
                className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <span>+ Tạo job mới</span>
              </button>
            </div>
          </div>

          {/* Collaborator Selection */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <Users className="w-4 h-4 text-blue-600" />
              Cộng tác viên
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Tìm kiếm CTV
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Nhập tên hoặc ID CTV..."
                    value={collaboratorSearch}
                    onChange={(e) => {
                      setCollaboratorSearch(e.target.value);
                      setShowCollaboratorDropdown(true);
                    }}
                    onFocus={() => setShowCollaboratorDropdown(true)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  {showCollaboratorDropdown && filteredCollaborators.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {filteredCollaborators.map((collaborator) => (
                        <button
                          key={collaborator.id}
                          type="button"
                          onClick={() => handleCollaboratorSelect(collaborator)}
                          className="w-full px-3 py-2 text-left text-xs hover:bg-gray-100 flex items-center justify-between"
                        >
                          <div>
                            <div className="font-medium text-gray-900">{collaborator.name}</div>
                            <div className="text-gray-500">{collaborator.id} • {collaborator.email}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {formData.collaboratorId && (
                  <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="text-xs font-medium text-blue-900">Đã chọn: {formData.collaboratorName}</div>
                    <div className="text-[10px] text-blue-700">ID: {formData.collaboratorId}</div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="auto-assign-ctv"
                  className="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                />
                <label htmlFor="auto-assign-ctv" className="text-xs text-gray-700">
                  Tự động gán CTV
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          {/* Dates */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <Calendar className="w-4 h-4 text-blue-600" />
              Ngày tháng
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Ngày tiến cử <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="date"
                    name="appliedDate"
                    value={formData.appliedDate}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Ngày phỏng vấn (dự kiến)
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="date"
                    name="interviewDate"
                    value={formData.interviewDate}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <Clock className="w-4 h-4 text-blue-600" />
              Trạng thái
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Trạng thái đơn tiến cử
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="pending">Đang chờ</option>
                  <option value="interviewed">Đã phỏng vấn</option>
                  <option value="accepted">Đã nhận việc</option>
                  <option value="rejected">Đã từ chối</option>
                </select>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 text-xs">
                  {getStatusIcon(formData.status)}
                  <span className="font-medium text-gray-700">
                    {formData.status === 'pending' && 'Đang chờ xử lý'}
                    {formData.status === 'interviewed' && 'Đã được phỏng vấn'}
                    {formData.status === 'accepted' && 'Đã được nhận việc'}
                    {formData.status === 'rejected' && 'Đã bị từ chối'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <DollarSign className="w-4 h-4 text-blue-600" />
              Thông tin tài chính
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Phí giới thiệu (VNĐ)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="number"
                    name="referralFee"
                    value={formData.referralFee}
                    onChange={handleInputChange}
                    placeholder="VD: 500000"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                {formData.referralFee && (
                  <p className="mt-1 text-[10px] text-gray-500">
                    {Number(formData.referralFee).toLocaleString('vi-VN')} VNĐ
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Lương (ước tính)
                </label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  placeholder="VD: 800万円/năm"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
              <FileText className="w-4 h-4 text-blue-600" />
              Ghi chú
            </h2>
            <div>
              <label className="block text-xs font-semibold text-gray-900 mb-2">
                Ghi chú nội bộ
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Nhập ghi chú về đơn tiến cử này..."
                rows="4"
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
          Lưu đơn tiến cử
        </button>
      </div>
    </div>
  );
};

export default AdminAddNominationPage;

