import React from 'react';
import AgentHomePageSession1 from '../../component/Agent/AgentHomePageSession1';
import AgentHomePageSession2 from '../../component/Agent/AgentHomePageSession2';
import AgentHomePageSession3 from '../../component/Agent/AgentHomePageSession3';
import AgentHomePageSession4 from '../../component/Agent/AgentHomePageSession4';

const HomePage = () => {
  return (
    <div className="flex gap-3 h-full">
      {/* Left Column - Sessions 1, 2, 3 */}
      <div className="flex-1 overflow-y-auto hide-scrollbar space-y-6 pr-2">
        <AgentHomePageSession1 />
        <AgentHomePageSession2 />
        <AgentHomePageSession3 />
      </div>

      {/* Right Column - Session 4 */}
      <div className="w-1/3 overflow-y-auto hide-scrollbar">
        <AgentHomePageSession4 />
      </div>
    </div>
  );
};

export default HomePage;