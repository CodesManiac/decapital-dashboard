import { Experience } from "@/types";
import { CalendarDays, ChevronDown, MapPin } from "lucide-react";
import React, { useState } from "react";
import ProgramPanel from "./ProgramPanel";

const MobileExperienceCard = ({ exp }: { exp: Experience }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`flex flex-col p-4 rounded-xl border ${
        expanded
          ? "border-[var(--color-primary)] bg-white shadow-md"
          : "border-[var(--color-border-light)] bg-white"
      } cursor-pointer space-y-3`}
      onClick={() => setExpanded((prev) => !prev)}
    >
      <div className="flex justify-between w-full">
        <p className="text-xs text-[var(--color-muted)] font-medium">
          Young Artist Program | Program
        </p>
        <ChevronDown className="w-4 h-4 justify-self-end text-[var(--color-muted)]" />
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] text-white text-sm font-semibold flex items-center justify-center">
          {exp.title[0].toUpperCase()}
        </div>
        <div>
          <h4 className="font-semibold text-[var(--color-dark)]">
            {exp.title.charAt(0).toUpperCase() + exp.title.slice(1)}
          </h4>
          <p className="text-sm text-[var(--color-muted)]">
            {exp.organization}
          </p>
        </div>
      </div>

      <div className="flex justify-between w-full">
        <div className="flex items-center gap-1 text-[var(--color-muted)]">
          <MapPin className="w-4 h-4" />
          <span className="text-sm ">{exp.location}</span>
        </div>
        <div className="flex items-center gap-1 text-[var(--color-muted)] text-sm">
          <CalendarDays className="w-4 h-4" />
          <span>{exp.date}</span>
        </div>
      </div>
      {expanded &&(
       <>
       <ProgramPanel exp={exp}/>
       <div className="flex flex-wrap gap-2 mt-3">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="bg-[var(--color-dark-text)] text-[var(--color-background)] text-xs font-medium px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
       </> 
      )}
    </div>
  );
};

export default MobileExperienceCard;
