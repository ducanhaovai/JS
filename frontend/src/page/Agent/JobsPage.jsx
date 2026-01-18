import React from 'react';
import AgentJobsPageSession1 from '../../component/Agent/AgentJobsPageSession1';
import AgentJobsPageSession2 from '../../component/Agent/AgentJobsPageSession2';

const JobsPage = () => {
  return (
    <div className="flex gap-6 h-[calc(100vh-120px)]">
      {/* Filter Panel */}
      <AgentJobsPageSession1 />
      
      {/* Job List Area */}
      <div className="flex-1 min-w-0">
        <AgentJobsPageSession2 />
      </div>
    </div>
  );
};

export default JobsPage;

