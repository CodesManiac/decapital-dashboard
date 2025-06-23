import { Experience } from "@/types";
import React from "react";

const ProgramPanel = ({ exp }: { exp: Experience }) => {
  return (
    <div className=" bg-white lg:p-6 rounded-xl space-y-4 lg:border lg:border-[var(--color-border-light)]">
      <div className="flex justify-between lg:block">
        <div>
          <h4 className="text-xs text-[var(--color-muted)] font-semibold uppercase mb-3">
            Program Info
          </h4>

          <p className="text-sm  text-[var(--color-muted)] mb-1">
            Name of the Program
          </p>

          <p className="text-sm font-semibold text-[var(--color-dark)] mb-3">
            {exp.organization}
          </p>
          <p className="text-sm  text-[var(--color-muted)] mb-1">Location</p>

          <p className="text-sm font-semibold text-[var(--color-dark)]">
            {exp.location}
          </p>
        </div>

        <div>
          <h4 className="text-xs text-[var(--color-muted)] font-semibold uppercase mb-3">
            Institution Info
          </h4>
          <p className="text-sm  text-[var(--color-muted)] mb-1">
            Name of the Institute
          </p>

          <p className="text-base font-semibold text-[var(--color-dark)]">
            {exp.organization}
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-xs text-[var(--color-muted)] font-semibold uppercase mb-3">
          Study Info
        </h4>
        <p className="text-sm  text-[var(--color-muted)] mb-1">Position</p>
        <p className="text-base font-semibold text-[var(--color-dark)]">
          {exp.title.charAt(0).toUpperCase() + exp.title.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default ProgramPanel;
