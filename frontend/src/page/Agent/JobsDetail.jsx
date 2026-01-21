import React from 'react';
import JobsDetailSession1 from '../../component/Agent/JobsDetailSession1';
import JobsDetailSession2 from '../../component/Agent/JobsDetailSession2';
import JobsDetailSession3 from '../../component/Agent/JobsDetailSession3';
import JobsDetailSession4 from '../../component/Agent/JobsDetailSession4';
import JobsDetailSession5 from '../../component/Agent/JobsDetailSession5';
import JobsDetailSession6 from '../../component/Agent/JobsDetailSession6';
import JobsDetailSession7 from '../../component/Agent/JobsDetailSession7';
import JobsDetailSession8 from '../../component/Agent/JobsDetailSession8';
import JobsDetailSession9 from '../../component/Agent/JobsDetailSession9';

const JobsDetail = () => {
  return (
    <div className="flex gap-3 h-full">
    {/* Left Column - Sessions 1, 2, 3 */}
    <div className="flex-1 overflow-y-auto hide-scrollbar space-y-6 pr-2">
      <JobsDetailSession1 />
      <JobsDetailSession2 />
      <JobsDetailSession3 />
      <JobsDetailSession4 />
      <JobsDetailSession5 />
      <JobsDetailSession6 />
      <JobsDetailSession7 />
      <JobsDetailSession8 />
    </div>

    {/* Right Column - Session 4 */}
    <div className="w-1/4 overflow-y-auto hide-scrollbar">
      <JobsDetailSession9 />
    </div>
  </div>
  );
};

export default JobsDetail;