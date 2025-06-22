import { User } from "@/types";
import { Check, ChevronDown, MapPin } from "lucide-react";
import React from "react";

const ProfileHeader = ({ user }: { user: User }) => {
  console.log(user, "USers");
  const initials = (data: string | undefined | null): string => {
    if (!data) return '';
    return data
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };
  
  return (
    <div className="bg-[var(--color-primary)] border border-[var(--color-border-light)] rounded-xl p-6 mb-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[var(--color-white)] flex items-center justify-center text-[var(--color-primary)] font-semibold text-xl">
            {initials(user?.name)}
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <div className="flex items-center gap-8">
                <h2 className="text-2xl font-semibold text-[var(--color-white)]">
                  {user?.name}
                </h2>
                <Check className="w-4 h-4  text-[#93b6af]" />
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-muted)]" />
                <p className="text-sm text-[var(--color-muted)]">
                  {user?.address?.city}, {initials(user?.address?.street)}
                </p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-[var(--color-muted)] font-medium border-t lg:border-t-0 pt-4 lg:pt-0">
              <span className="border-b-3 border-[var(--color-white)] pb-1 text-[var(--color-white)]">
                About
              </span>
              <span>Media</span>
              <span>Highlights</span>
              <span>Experience</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4">
        <div className="flex gap-2 justify-end">
        <p className="text-sm font-semibold text-[var(--color-muted)]">CHURCH SINGER</p>
       <ChevronDown className="w-4 h-4  text-[var(--color-muted)]" />

        </div>
        <button className="px-2 py-2 text-[var(--color-primary)] bg-[var(--color-white)] rounded-md text-base font-semibold ">
          BOOK NOW
        </button>
        <span className="text-sm text-[var(--color-muted)]"><span className='text-[var(--color-white)]'>$100–$400</span> / per group workshop</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
