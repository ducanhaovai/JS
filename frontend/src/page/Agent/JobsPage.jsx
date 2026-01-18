import React from 'react';
import AgentJobsPageSession1 from '../../component/Agent/AgentJobsPageSession1';

const JobsPage = () => {
  return (
    <div className="flex gap-6">
      {/* Filter Panel */}
      <AgentJobsPageSession1 />
      
      {/* Job List Area - Placeholder */}
      <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <p className="text-gray-700">Danh sách việc làm sẽ hiển thị ở đây</p>
      </div>
    </div>
  );
};

export default JobsPage;

