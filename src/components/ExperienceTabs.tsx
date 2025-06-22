import { Experience } from '@/types';
import React, { useState } from 'react'
import ExperienceCard from './ExperienceCard';
import ExpandedCard from './ExpandedCard';
import ProgramPanel from './ProgramPanel';

const tabs = [
  'All',
  'Performance',
  'Training',
  'Accolades',
  'Education',
  'Job Titles',
  'Commissions',
  'Masterclass',
];
const ExperienceTabs = ({ experiences }: { experiences: Experience[] }) => {
console.log(experiences,"xprrrrrere")
const [activeTab, setActiveTab] = useState('Training');
const [expandedId, setExpandedId] = useState<number | null>(null);
const filteredExperiences = activeTab === 'All'
? experiences
: experiences.filter((e) =>
    e.tags.some((tag) => tag.toLowerCase().includes(activeTab.toLowerCase()))
  );

  
const expandedExperience = filteredExperiences.find((e) => e.id === expandedId);
console.log(filteredExperiences,"idfiltereddeex")
console.log(expandedExperience,"iddeex")

return (
  <div>

  <div className="mb-6 overflow-x-auto">
    <div className="flex gap-6  pb-2 text-sm font-medium">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-1 ${
            activeTab === tab
              ? 'text-[var(--color-primary)] border-b-4 border-[var(--color-primary)]'
              : 'text-[var(--color-muted)]'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>


  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="space-y-4">
      {filteredExperiences.map((exp) => (
        <ExperienceCard
          key={exp.id}
          exp={exp}
          isActive={expandedId === exp.id}
          onClick={() => setExpandedId(exp.id)}
        />
      ))}
    </div>

  <div  className='space-y-4'>

  {expandedExperience && (
      <div>
        <ExpandedCard exp={expandedExperience} />
      </div>
    )}

   
    {expandedExperience && (
      <div>
        <ProgramPanel exp={expandedExperience} />
      </div>
    )}
  </div>
  </div>
</div>


)
}

export default ExperienceTabs
