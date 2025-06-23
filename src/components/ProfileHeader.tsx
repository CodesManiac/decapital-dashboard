import { User } from "@/types";
import { Check, ChevronDown, MapPin } from "lucide-react";
import React from "react";

const ProfileHeader = ({ user }: { user: User }) => {
  const initials = (data: string | undefined | null): string => {
    if (!data) return "";
    return data
      .split(" ")
      .map((part) => part[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="bg-[var(--color-primary)] border border-[var(--color-border-light)] rounded-xl p-4 sm:p-6 mb-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <div className="w-16 h-16 rounded-full bg-[var(--color-white)] flex items-center justify-center text-[var(--color-primary)] font-semibold text-xl">
            {initials(user?.name)}
          </div>

          <div className="flex-1 space-y-2">
            {/* Name + Badge */}
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-2xl font-semibold text-[var(--color-white)] justify-self-center">
                {user?.name}
              </h2>
              <Check className="w-4 h-4 text-[#93b6af]" />
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
              <MapPin className="w-4 h-4" />
              <p>
                {user?.address?.city}, {initials(user?.address?.street)}
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 text-sm font-medium pt-3 border-t border-[var(--color-border-light)] lg:border-none lg:pt-0">
              <span className="border-b-2 border-[var(--color-white)] pb-1 text-[var(--color-white)]">
                About
              </span>
              <span className="text-[var(--color-muted)]">Media</span>
              <span className="text-[var(--color-muted)]">Highlights</span>
              <span className="text-[var(--color-muted)]">Experience</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-2 text-sm  w-full">
          <div className="flex items-center gap-2 text-[var(--color-muted)]">
            <p className="font-semibold text-center">CHURCH SINGER</p>
            <ChevronDown className="w-4 h-4" />
          </div>

          <button className="w-full sm:w-auto  items-center  text-center px-4 py-2 text-[var(--color-primary)] bg-[var(--color-white)] rounded-md text-base font-semibold">
            BOOK NOW
          </button>

          <span className="text-[var(--color-muted)] text-sm">
            <span className="text-[var(--color-white)] font-medium">
              $100–$400
            </span>{" "}
            / per group workshop
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
