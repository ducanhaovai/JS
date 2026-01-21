import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Filter,
  ExternalLink,
  Eye,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  DollarSign,
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  User,
  Briefcase,
  Building2,
  Download,
} from 'lucide-react';

const PaymentHistoryPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [selectedRows, setSelectedRows] = useState(new Set());

  // Sample data - payment history
  const payments = [
    {
      id: 'PAY001',
      requestId: 'REQ001',
      candidateName: 'Nguyen Van A',
      candidateId: '00044572',
      jobTitle: 'Software Engineer',
      jobId: 'JOB001',
      companyName: 'Tech Company A',
      applicationId: 'APP001',
      amount: 500000,
      status: 'paid',
      statusLabel: 'Đã thanh toán',
      requestDate: '2025-01-10',
      approvedDate: '2025-01-12',
      paidDate: '2025-01-15',
      paymentMethod: 'Chuyển khoản',
    },
    {
      id: 'PAY002',
      requestId: 'REQ002',
      candidateName: 'Tran Thi B',
      candidateId: '00044064',
      jobTitle: 'Project Manager',
      jobId: 'JOB002',
      companyName: 'Business Corp',
      applicationId: 'APP002',
      amount: 800000,
      status: 'paid',
      statusLabel: 'Đã thanh toán',
      requestDate: '2025-01-08',
      approvedDate: '2025-01-10',
      paidDate: '2025-01-13',
      paymentMethod: 'Chuyển khoản',
    },
    {
      id: 'PAY003',
      requestId: 'REQ003',
      candidateName: 'Le Van C',
      candidateId: '00043293',
      jobTitle: 'Frontend Developer',
      jobId: 'JOB003',
      companyName: 'Web Solutions',
      applicationId: 'APP003',
      amount: 600000,
      status: 'approved',
      statusLabel: 'Đã duyệt',
      requestDate: '2025-01-15',
      approvedDate: '2025-01-18',
      paidDate: '—',
      paymentMethod: '—',
    },
    {
      id: 'PAY004',
      requestId: 'REQ004',
      candidateName: 'Pham Thi D',
      candidateId: '00043103',
      jobTitle: 'Backend Developer',
      jobId: 'JOB004',
      companyName: 'Tech Startup',
      applicationId: 'APP004',
      amount: 700000,
      status: 'pending',
      statusLabel: 'Chờ duyệt',
      requestDate: '2025-01-20',
      approvedDate: '—',
      paidDate: '—',
      paymentMethod: '—',
    },
    {
      id: 'PAY005',
      requestId: 'REQ005',
      candidateName: 'Hoang Van E',
      candidateId: '00042979',
      jobTitle: 'DevOps Engineer',
      jobId: 'JOB005',
      companyName: 'Cloud Services',
      applicationId: 'APP005',
      amount: 550000,
      status: 'rejected',
      statusLabel: 'Đã từ chối',
      requestDate: '2025-01-12',
      approvedDate: '—',
      paidDate: '—',
      paymentMethod: '—',
    },
    {
      id: 'PAY006',
      requestId: 'REQ006',
      candidateName: 'Vu Thi F',
      candidateId: '00042966',
      jobTitle: 'UI/UX Designer',
      jobId: 'JOB006',
      companyName: 'Design Studio',
      applicationId: 'APP006',
      amount: 650000,
      status: 'paid',
      statusLabel: 'Đã thanh toán',
      requestDate: '2025-01-05',
      approvedDate: '2025-01-07',
      paidDate: '2025-01-10',
      paymentMethod: 'Chuyển khoản',
    },
    {
      id: 'PAY007',
      requestId: 'REQ007',
      candidateName: 'Dao Van G',
      candidateId: '00042950',
      jobTitle: 'Data Analyst',
      jobId: 'JOB007',
      companyName: 'Data Corp',
      applicationId: 'APP007',
      amount: 750000,
      status: 'paid',
      statusLabel: 'Đã thanh toán',
      requestDate: '2025-01-03',
      approvedDate: '2025-01-05',
      paidDate: '2025-01-08',
      paymentMethod: 'Chuyển khoản',
    },
    {
      id: 'PAY008',
      requestId: 'REQ008',
      candidateName: 'Bui Thi H',
      candidateId: '00042949',
      jobTitle: 'QA Engineer',
      jobId: 'JOB008',
      companyName: 'Quality Assurance Inc',
      applicationId: 'APP008',
      amount: 500000,
      status: 'approved',
      statusLabel: 'Đã duyệt',
      requestDate: '2025-01-18',
      approvedDate: '2025-01-20',
      paidDate: '—',
      paymentMethod: '—',
    },
  ];

  const totalItems = 32;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-blue-100 text-blue-800';
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'approved':
        return <AlertCircle className="w-4 h-4" />;
      case 'paid':
        return <CheckCircle className="w-4 h-4" />;
      case 'rejected':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(new Set(payments.map((_, index) => index)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (index) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedRows(newSelected);
  };

  const handleReset = () => {
    setSearchQuery('');
    setStatusFilter('');
    setDateFrom('');
    setDateTo('');
  };

  const handleSearch = () => {
    // TODO: Implement search logic
    console.log('Search:', { searchQuery, statusFilter, dateFrom, dateTo });
  };

  const filteredPayments = payments.filter((payment) => {
    if (statusFilter && payment.status !== statusFilter) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        payment.candidateName.toLowerCase().includes(query) ||
        payment.jobTitle.toLowerCase().includes(query) ||
        payment.companyName.toLowerCase().includes(query) ||
        payment.id.toLowerCase().includes(query) ||
        payment.requestId.toLowerCase().includes(query)
      );
    }
    return true;
  });

  const totalAmount = payments
    .filter(p => p.status === 'paid')
    .reduce((sum, p) => sum + p.amount, 0);

  const pendingAmount = payments
    .filter(p => p.status === 'approved' || p.status === 'pending')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Filter Section */}
      <div className="bg-white rounded-2xl p-4 border border-gray-200 mb-4 flex-shrink-0">
        {/* Search Bar */}
        <div className="flex items-center gap-3 flex-wrap mb-4">
          <div className="flex-1 min-w-[300px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm theo tên ứng viên, job title, công ty, ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
              />
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            Tìm kiếm
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-200 transition-colors"
          >
            Reset
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Xuất Excel
          </button>
        </div>

        {/* Additional Filters */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <label className="text-sm font-bold text-gray-900">Trạng thái:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Tất cả</option>
              <option value="pending">Chờ duyệt</option>
              <option value="approved">Đã duyệt</option>
              <option value="paid">Đã thanh toán</option>
              <option value="rejected">Đã từ chối</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-bold text-gray-900">Từ ngày:</label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-bold text-gray-900">Đến ngày:</label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-xs text-gray-600">Tổng đã thanh toán</p>
              <p className="text-lg font-bold text-green-600">
                {totalAmount.toLocaleString('vi-VN')}đ
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-yellow-600" />
            <div>
              <p className="text-xs text-gray-600">Chờ thanh toán</p>
              <p className="text-lg font-bold text-yellow-600">
                {pendingAmount.toLocaleString('vi-VN')}đ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mb-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-2 py-1 bg-white border border-gray-300 rounded text-sm font-bold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 bg-white border border-gray-300 rounded text-sm font-bold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {[...Array(Math.min(7, totalPages))].map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-1 rounded text-sm font-bold transition-colors ${
                  currentPage === pageNum
                    ? 'bg-red-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 bg-white border border-gray-300 rounded text-sm font-bold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 bg-white border border-gray-300 rounded text-sm font-bold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="px-3 py-1 border border-gray-300 rounded text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span className="text-sm text-gray-700 font-bold">{totalItems} items</span>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-y-auto bg-white rounded-2xl border border-gray-200 min-h-0 relative">
        <div className="overflow-x-auto h-full">
          <table className="w-full">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-center text-xs font-bold text-gray-900 border-b border-gray-200 w-12">
                  <input
                    type="checkbox"
                    checked={selectedRows.size === filteredPayments.length && filteredPayments.length > 0}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">ID</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Mã yêu cầu</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Ứng viên</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Job</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Công ty</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Số tiền</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Trạng thái</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Ngày yêu cầu</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Ngày duyệt</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Ngày thanh toán</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Phương thức</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-gray-900 border-b border-gray-200">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPayments.map((payment, index) => (
                <tr
                  key={payment.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 text-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(index)}
                      onChange={() => handleSelectRow(index)}
                      className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => navigate(`/agent/payment-history/${payment.id}`)}
                      className="text-blue-600 hover:text-blue-800 font-medium text-xs flex items-center gap-1"
                    >
                      {payment.id}
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => navigate(`/agent/nominations/${payment.applicationId}`)}
                      className="text-blue-600 hover:text-blue-800 font-medium text-xs"
                    >
                      {payment.requestId}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                        {payment.candidateName.charAt(0)}
                      </div>
                      <div>
                        <button
                          onClick={() => navigate(`/agent/candidates/${payment.candidateId}`)}
                          className="text-sm font-semibold text-gray-900 hover:text-blue-600"
                        >
                          {payment.candidateName}
                        </button>
                        <p className="text-xs text-gray-500">{payment.candidateId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => navigate(`/agent/jobs/${payment.jobId}`)}
                      className="text-sm font-medium text-gray-900 hover:text-blue-600 flex items-center gap-1"
                    >
                      <Briefcase className="w-3 h-3" />
                      {payment.jobTitle}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 text-sm text-gray-700">
                      <Building2 className="w-3 h-3 text-gray-400" />
                      {payment.companyName}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 text-sm font-bold text-gray-900">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      {payment.amount.toLocaleString('vi-VN')}đ
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(payment.status)}`}>
                      {getStatusIcon(payment.status)}
                      {payment.statusLabel}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      {new Date(payment.requestDate).toLocaleDateString('vi-VN')}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {payment.approvedDate !== '—' ? (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        {new Date(payment.approvedDate).toLocaleDateString('vi-VN')}
                      </div>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {payment.paidDate !== '—' ? (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        {new Date(payment.paidDate).toLocaleDateString('vi-VN')}
                      </div>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">{payment.paymentMethod}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => navigate(`/agent/payment-history/${payment.id}`)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 transition-colors"
                        title="Xem chi tiết"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 p-1 rounded hover:bg-gray-100 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryPage;
