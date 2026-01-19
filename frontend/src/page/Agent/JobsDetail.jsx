import React from 'react';
import JobsDetailSession1 from '../../component/Agent/JobsDetailSession1';
import JobsDetailSession2 from '../../component/Agent/JobsDetailSession2';
import JobsDetailSession3 from '../../component/Agent/JobsDetailSession3';
import JobsDetailSession4 from '../../component/Agent/JobsDetailSession4';
import JobsDetailSession5 from '../../component/Agent/JobsDetailSession5';
import JobsDetailSession6 from '../../component/Agent/JobsDetailSession6';
import JobsDetailSession7 from '../../component/Agent/JobsDetailSession7';
import JobsDetailSession8 from '../../component/Agent/JobsDetailSession8';

const JobsDetail = () => {
  return (
    <div className="space-y-6">
      <JobsDetailSession1 />
      <JobsDetailSession2 />
      <JobsDetailSession3 />
      <JobsDetailSession4 />
      <JobsDetailSession5 />
      <JobsDetailSession6 />
      <JobsDetailSession7 />
      <JobsDetailSession8 />
    </div>
  );
};

export default JobsDetail;