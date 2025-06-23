import { Experience } from "@/types";
import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import ExpandedCard from "./ExpandedCard";
import ProgramPanel from "./ProgramPanel";
import MobileExperienceCard from "./MobileExperienceCard";

const tabs = [
  "All",
  "Performance",
  "Training",
  "Accolades",
  "Education",
  "Job Titles",
  "Commissions",
  "Masterclass",
];
const ExperienceTabs = ({ experiences }: { experiences: Experience[] }) => {
  const [activeTab, setActiveTab] = useState("Training");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const filteredExperiences =
    activeTab === "All"
      ? experiences
      : experiences.filter((e) =>
          e.tags.some((tag) =>
            tag.toLowerCase().includes(activeTab.toLowerCase())
          )
        );

  const expandedExperience = filteredExperiences.find(
    (e) => e.id === expandedId
  );

  return (
    <div>
      <h2 className="font-semibold text-xl text-[var(--color-dark)] mb-6">
        Experience
      </h2>
      <div className="mb-6 overflow-x-auto">
        <div className="flex gap-6  pb-2 text-sm font-medium whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 ${
                activeTab === tab
                  ? "text-[var(--color-primary)] border-b-4 border-[var(--color-primary)]"
                  : "text-[var(--color-muted)]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:hidden space-y-4">
        {filteredExperiences.length > 0 ? (
          filteredExperiences.map((exp) => (
            <MobileExperienceCard key={exp.id} exp={exp} />
          ))
        ) : (
          <p className="text-[var(--color-muted)] text-sm">
            No experiences under this category yet.
          </p>
        )}
      </div>
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          {filteredExperiences.length > 0 ? (
            filteredExperiences.map((exp) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                isActive={expandedId === exp.id}
                onClick={() => setExpandedId(exp.id)}
              />
            ))
          ) : (
            <p className="text-[var(--color-muted)] text-sm">
              No experiences under this category yet.
            </p>
          )}
        </div>

        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          {expandedExperience && (
            <>
              <ExpandedCard exp={expandedExperience} />
              <ProgramPanel exp={expandedExperience} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTabs;
