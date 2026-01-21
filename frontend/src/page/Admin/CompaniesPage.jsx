import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Plus,
  Settings,
  Info,
  ExternalLink,
  Edit,
  Trash2,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Mail,
  Phone,
  Building2,
  Briefcase,
  Globe,
  MapPin,
  Calendar,
  CheckCircle,
  XCircle,
} from 'lucide-react';

const CompaniesPage = () => {
  const navigate = useNavigate();
  const [searchMode, setSearchMode] = useState('OR');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [selectedRows, setSelectedRows] = useState(new Set());

  // Sample data for companies
  const companies = [
    {
      id: 'COMP001',
      name: 'Công ty TNHH Nikken Total Sourcing',
      code: 'NTS',
      type: 'Tuyển dụng',
      email: 'contact@nikken.com',
      phone: '03-1234-5678',
      address: '7-23-3 Nishi-Kamata, Ota-ku, Tokyo',
      website: 'https://nikken.com',
      jobsCount: 25,
      status: 'active',
      createdAt: '2024/01/15',
    },
    {
      id: 'COMP002',
      name: 'Công ty TNHH SECOM',
      code: 'SECOM',
      type: 'Bảo vệ',
      email: 'info@secom.com',
      phone: '03-2345-6789',
      address: 'Tokyo, Japan',
      website: 'https://secom.com',
      jobsCount: 18,
      status: 'active',
      createdAt: '2024/02/20',
    },
    {
      id: 'COMP003',
      name: 'Tech Startup Japan',
      code: 'TSJ',
      type: 'IT',
      email: 'hello@techstartup.jp',
      phone: '03-3456-7890',
      address: 'Shibuya, Tokyo',
      website: 'https://techstartup.jp',
      jobsCount: 12,
      status: 'active',
      createdAt: '2024/03/10',
    },
    {
      id: 'COMP004',
      name: 'Construction Corp Japan',
      code: 'CCJ',
      type: 'Xây dựng',
      email: 'contact@ccj.com',
      phone: '03-4567-8901',
      address: 'Osaka, Japan',
      website: 'https://ccj.com',
      jobsCount: 8,
      status: 'active',
      createdAt: '2024/01/05',
    },
    {
      id: 'COMP005',
      name: 'Fashion Brand Japan',
      code: 'FBJ',
      type: 'Thời trang',
      email: 'info@fashionbrand.jp',
      phone: '03-5678-9012',
      address: 'Tokyo, Japan',
      website: 'https://fashionbrand.jp',
      jobsCount: 5,
      status: 'active',
      createdAt: '2024/04/15',
    },
    {
      id: 'COMP006',
      name: 'Web Solutions Inc',
      code: 'WSI',
      type: 'IT',
      email: 'contact@websolutions.com',
      phone: '03-6789-0123',
      address: 'Tokyo, Japan',
      website: 'https://websolutions.com',
      jobsCount: 15,
      status: 'active',
      createdAt: '2024/02/28',
    },
    {
      id: 'COMP007',
      name: 'Cloud Services Co',
      code: 'CSC',
      type: 'IT',
      email: 'info@cloudservices.com',
      phone: '03-7890-1234',
      address: 'Tokyo, Japan',
      website: 'https://cloudservices.com',
      jobsCount: 10,
      status: 'inactive',
      createdAt: '2024/03/22',
    },
    {
      id: 'COMP008',
      name: 'Design Studio Japan',
      code: 'DSJ',
      type: 'Thiết kế',
      email: 'hello@designstudio.jp',
      phone: '03-8901-2345',
      address: 'Tokyo, Japan',
      website: 'https://designstudio.jp',
      jobsCount: 7,
      status: 'active',
      createdAt: '2024/01/18',
    },
    {
      id: 'COMP009',
      name: 'Data Corp',
      code: 'DC',
      type: 'IT',
      email: 'contact@datacorp.com',
      phone: '03-9012-3456',
      address: 'Tokyo, Japan',
      website: 'https://datacorp.com',
      jobsCount: 9,
      status: 'active',
      createdAt: '2024/05/10',
    },
    {
      id: 'COMP010',
      name: 'Quality Assurance Inc',
      code: 'QAI',
      type: 'QA',
      email: 'info@qai.com',
      phone: '03-0123-4567',
      address: 'Tokyo, Japan',
      website: 'https://qai.com',
      jobsCount: 6,
      status: 'active',
      createdAt: '2023/12/01',
    },
  ];

  const totalItems = 45;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(new Set(companies.map((_, index) => index)));
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
    setSelectedType('');
    setSelectedStatus('');
    setDateFrom('');
    setDateTo('');
    setSearchMode('OR');
  };

  const handleSearch = () => {
    // TODO: Implement search logic
    console.log('Search:', { searchQuery, searchMode, selectedType, selectedStatus, dateFrom, dateTo });
  };

  const handleDelete = (id) => {
    if (window.confirm(`Bạn có chắc muốn xóa doanh nghiệp ${id}?`)) {
      // TODO: Implement delete logic
      console.log('Delete company:', id);
    }
  };

  const filteredCompanies = companies.filter((company) => {
    if (selectedType && company.type !== selectedType) return false;
    if (selectedStatus && company.status !== selectedStatus) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        company.name.toLowerCase().includes(query) ||
        company.code.toLowerCase().includes(query) ||
        company.email.toLowerCase().includes(query) ||
        company.id.toLowerCase().includes(query)
      );
    }
    return true;
  });

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Filter Section */}
      <div className="bg-white rounded-lg p-3 border border-gray-200 mb-3 flex-shrink-0">
        {/* Search Bar */}
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <div className="flex gap-1">
            <button
              onClick={() => setSearchMode('OR')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                searchMode === 'OR'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              OR
            </button>
            <button
              onClick={() => setSearchMode('AND')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                searchMode === 'AND'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              AND
            </button>
          </div>
          <div className="flex-1 min-w-[250px]">
            <input
              type="text"
              placeholder="ID, tên công ty, mã công ty, email"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-1.5 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            onClick={handleSearch}
            className="px-4 py-1.5 bg-blue-600 text-white rounded text-xs font-semibold hover:bg-blue-700 transition-colors flex items-center gap-1.5"
          >
            <Search className="w-3.5 h-3.5" />
            Tìm kiếm
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded text-xs font-semibold hover:bg-gray-200 transition-colors"
          >
            Reset
          </button>
          <button className="text-gray-600 hover:text-gray-800 p-1.5">
            <Info className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigate('/admin/companies/create')}
            className="px-3 py-1.5 bg-yellow-400 text-gray-900 rounded text-xs font-semibold hover:bg-yellow-500 transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            + Thêm doanh nghiệp
          </button>
          <button className="px-3 py-1.5 bg-gray-800 text-white rounded text-xs font-semibold hover:bg-gray-900 transition-colors flex items-center gap-1.5">
            <Settings className="w-3.5 h-3.5" />
            Cài đặt
          </button>
        </div>

        {/* Additional Filters */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5">
            <label className="text-xs font-semibold text-gray-900">Loại:</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Tất cả</option>
              <option value="Tuyển dụng">Tuyển dụng</option>
              <option value="Bảo vệ">Bảo vệ</option>
              <option value="IT">IT</option>
              <option value="Xây dựng">Xây dựng</option>
              <option value="Thời trang">Thời trang</option>
              <option value="Thiết kế">Thiết kế</option>
              <option value="QA">QA</option>
            </select>
          </div>
          <div className="flex items-center gap-1.5">
            <label className="text-xs font-semibold text-gray-900">Trạng thái:</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Tất cả</option>
              <option value="active">Đang hoạt động</option>
              <option value="inactive">Ngừng hoạt động</option>
            </select>
          </div>
          <div className="flex items-center gap-1.5">
            <label className="text-xs font-semibold text-gray-900">Từ ngày:</label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <label className="text-xs font-semibold text-gray-900">Đến ngày:</label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mb-3 flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-1.5 py-1 bg-white border border-gray-300 rounded text-xs font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronsLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-1.5 py-1 bg-white border border-gray-300 rounded text-xs font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          {[...Array(Math.min(7, totalPages))].map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                  currentPage === pageNum
                    ? 'bg-blue-600 text-white'
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
            className="px-1.5 py-1 bg-white border border-gray-300 rounded text-xs font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-1.5 py-1 bg-white border border-gray-300 rounded text-xs font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronsRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="px-2.5 py-1 border border-gray-300 rounded text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span className="text-xs text-gray-700 font-semibold">{totalItems} items</span>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-y-auto bg-white rounded-lg border border-gray-200 min-h-0 relative">
        <div className="overflow-x-auto h-full">
          <table className="w-full">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-3 py-2 text-center text-xs font-semibold text-gray-900 border-b border-gray-200 w-10">
                  <input
                    type="checkbox"
                    checked={selectedRows.size === filteredCompanies.length && filteredCompanies.length > 0}
                    onChange={handleSelectAll}
                    className="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                  />
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-900 border-b border-gray-200">ID</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-900 border-b border-gray-200">Tên công ty</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-900 border-b border-gray-200">Mã công ty</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-900 border-b border-gray-200">Loại</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-900 border-b border-gray-200">Email</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-900 border-b border-gray-200">Số điện thoại</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-900 border-b border-gray-200">Địa chỉ</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-900 border-b border-gray-200">Website</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-900 border-b border-gray-200">Số job</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-900 border-b border-gray-200">Trạng thái</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-900 border-b border-gray-200">Ngày tạo</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-gray-900 border-b border-gray-200">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCompanies.map((company, index) => (
                <tr
                  key={company.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-3 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(index)}
                      onChange={() => handleSelectRow(index)}
                      className="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <button
                      onClick={() => navigate(`/admin/companies/${company.id}`)}
                      className="text-blue-600 hover:text-blue-800 font-medium text-xs flex items-center gap-1"
                    >
                      {company.id}
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-[10px]">
                        {company.name.charAt(0)}
                      </div>
                      <button
                        onClick={() => navigate(`/admin/companies/${company.id}`)}
                        className="text-xs font-semibold text-gray-900 hover:text-blue-600"
                      >
                        {company.name}
                      </button>
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <span className="text-xs font-medium text-gray-700">{company.code}</span>
                  </td>
                  <td className="px-3 py-2">
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-[10px] font-medium">
                      {company.type}
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-1 text-xs text-gray-700">
                      <Mail className="w-3 h-3 text-gray-400" />
                      {company.email}
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-1 text-xs text-gray-700">
                      <Phone className="w-3 h-3 text-gray-400" />
                      {company.phone}
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-1 text-xs text-gray-700 max-w-[200px] truncate">
                      <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      <span className="truncate">{company.address}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    {company.website ? (
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        <Globe className="w-3 h-3" />
                        <span className="truncate max-w-[150px]">Website</span>
                      </a>
                    ) : (
                      <span className="text-xs text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-3 py-2">
                    <button
                      onClick={() => navigate(`/admin/jobs?company=${company.id}`)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <Briefcase className="w-3 h-3" />
                      {company.jobsCount}
                    </button>
                  </td>
                  <td className="px-3 py-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      company.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {company.status === 'active' ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : (
                        <XCircle className="w-3 h-3" />
                      )}
                      {company.status === 'active' ? 'Đang hoạt động' : 'Ngừng hoạt động'}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-xs text-gray-700">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      {company.createdAt}
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => navigate(`/admin/companies/${company.id}`)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 transition-colors"
                        title="Xem chi tiết"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => navigate(`/admin/companies/${company.id}/edit`)}
                        className="text-gray-600 hover:text-gray-800 p-1 rounded hover:bg-gray-100 transition-colors"
                        title="Chỉnh sửa"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(company.id)}
                        className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50 transition-colors"
                        title="Xóa"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
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

export default CompaniesPage;
