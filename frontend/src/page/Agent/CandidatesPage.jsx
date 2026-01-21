import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  Plus,
  Settings,
  Info,
  ExternalLink,
  Send,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

const CandidatesPage = () => {
  const navigate = useNavigate();
  const [searchMode, setSearchMode] = useState('OR'); // OR or AND
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhase, setSelectedPhase] = useState('');
  const [firstInterviewDate, setFirstInterviewDate] = useState('');
  const [onlyMyCandidates, setOnlyMyCandidates] = useState(false);
  const [showArchiveOnly, setShowArchiveOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [selectedRows, setSelectedRows] = useState(new Set());

  // Sample data based on HTML
  const candidates = [
    { id: '00044572', name: 'PHAM NGO BINH ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 1, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00044064', name: 'NGUYEN THI NGA', inflowPath: '—', inHouseResp: 'Nguyen Hai Quang', firstInterview: '2025/12/17', phase: '', recommendations: 1, scouts: '—', scoutStatus: '—', finalScoutRelease: '2025/12/17' },
    { id: '00043293', name: 'TRAN VAN CUONG', inflowPath: '—', inHouseResp: '—', firstInterview: '2025/12/10', phase: '', recommendations: 1, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00043103', name: 'LE THI MAI', inflowPath: '—', inHouseResp: '—', firstInterview: '2025/12/08', phase: '', recommendations: 1, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042979', name: 'HOANG VAN DUC', inflowPath: '—', inHouseResp: '—', firstInterview: '2025/12/05', phase: '', recommendations: 1, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042966', name: 'VU THI HOA', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 3, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042950', name: 'CANDIDATE A ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 1, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042949', name: 'CANDIDATE B ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 0, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042948', name: 'CANDIDATE C ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 0, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042947', name: 'CANDIDATE D ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 1, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042946', name: 'CANDIDATE E ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 0, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042945', name: 'CANDIDATE F ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 0, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042944', name: 'CANDIDATE G ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 1, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042943', name: 'CANDIDATE H ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 0, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042942', name: 'CANDIDATE I ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 0, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042941', name: 'CANDIDATE J ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 1, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042940', name: 'CANDIDATE K ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 0, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042939', name: 'CANDIDATE L ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 0, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042938', name: 'CANDIDATE M ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 1, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
    { id: '00042937', name: 'CANDIDATE N ...', inflowPath: '—', inHouseResp: '—', firstInterview: '—', phase: '', recommendations: 0, scouts: '—', scoutStatus: '—', finalScoutRelease: '-' },
  ];

  const totalItems = 136;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(new Set(candidates.map((_, index) => index)));
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
    setSelectedPhase('');
    setFirstInterviewDate('');
    setOnlyMyCandidates(false);
    setShowArchiveOnly(false);
    setSearchMode('OR');
  };

  const handleSearch = () => {
    // TODO: Implement search logic
    console.log('Search:', { searchQuery, searchMode, selectedPhase, firstInterviewDate, onlyMyCandidates, showArchiveOnly });
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Filter Section */}
      <div className="bg-white rounded-2xl p-4 border border-gray-200 mb-4 flex-shrink-0">
        {/* Search Bar */}
        <div className="flex items-center gap-3 flex-wrap mb-4">
          <div className="flex gap-1">
            <button
              onClick={() => setSearchMode('OR')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                searchMode === 'OR'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              OR
            </button>
            <button
              onClick={() => setSearchMode('AND')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                searchMode === 'AND'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              AND
            </button>
          </div>
          <div className="flex-1 min-w-[300px]">
            <input
              type="text"
              placeholder="ID, candidate name, education, work history, qualification"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
            />
          </div>
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            Q Search
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-200 transition-colors"
          >
            Reset
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-200 transition-colors">
            Open Advanced Search
          </button>
          <button className="text-gray-600 hover:text-gray-800 p-2">
            <Info className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate('/agent/candidates/create')}
            className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg font-bold text-sm hover:bg-yellow-500 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            + Add a candidate
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg font-bold text-sm hover:bg-gray-900 transition-colors flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Display Settings
          </button>
        </div>

        {/* Additional Filters */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-sm font-bold text-gray-900">Select a phase</label>
            <select
              value={selectedPhase}
              onChange={(e) => setSelectedPhase(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Please select</option>
              <option value="phase1">Phase 1</option>
              <option value="phase2">Phase 2</option>
              <option value="phase3">Phase 3</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-bold text-gray-900">Select the date of the first in</label>
            <input
              type="date"
              value={firstInterviewDate}
              onChange={(e) => setFirstInterviewDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={onlyMyCandidates}
              onChange={(e) => setOnlyMyCandidates(e.target.checked)}
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
            />
            <span className="text-sm text-gray-700 font-bold">Only show your candidates</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showArchiveOnly}
              onChange={(e) => setShowArchiveOnly(e.target.checked)}
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
            />
            <span className="text-sm text-gray-700 font-bold">Show archive only</span>
          </label>
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
                    checked={selectedRows.size === candidates.length && candidates.length > 0}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">ID</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Name of candidate</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Inflow path</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">In-house respon...</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">First interview d...</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Phase</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Number of reco...</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Number of Scouts</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Scout Status</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 border-b border-gray-200">Final Scout Rele...</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-gray-900 border-b border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {candidates.map((candidate, index) => (
                <tr
                  key={candidate.id}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
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
                      onClick={() => navigate(`/agent/candidates/${candidate.id}`)}
                      className="text-blue-600 hover:text-blue-800 font-medium text-xs flex items-center gap-1"
                    >
                      {candidate.id}
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-900">{candidate.name}</td>
                  <td className="px-4 py-3 text-xs text-gray-700">{candidate.inflowPath}</td>
                  <td className="px-4 py-3 text-xs text-gray-700">{candidate.inHouseResp}</td>
                  <td className="px-4 py-3 text-xs text-gray-700">{candidate.firstInterview}</td>
                  <td className="px-4 py-3">
                    <select className="px-2 py-1 border border-gray-300 rounded text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 w-full">
                      <option value="">Please select</option>
                      <option value="phase1">Phase 1</option>
                      <option value="phase2">Phase 2</option>
                      <option value="phase3">Phase 3</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-900 font-medium">{candidate.recommendations}</span>
                      <button
                        onClick={() => navigate(`/agent/candidates/${candidate.id}/recommendations`)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-700">{candidate.scouts}</td>
                  <td className="px-4 py-3 text-xs text-gray-700">{candidate.scoutStatus}</td>
                  <td className="px-4 py-3 text-xs text-gray-700">{candidate.finalScoutRelease}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 transition-colors">
                        <Send className="w-4 h-4" />
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

export default CandidatesPage;
