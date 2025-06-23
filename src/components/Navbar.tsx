import { ChevronDown, Folder, Search } from "lucide-react";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`sticky top-0 z-20 px-6 py-3  ${
        scrolled
          ? "bg-[var(--color-white)] shadow-sm border-b transition-all"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Search className="w-4 h-4  text-[var(--color-muted)]" />
          <Folder className="w-4 h-4  text-[var(--color-muted)]" />
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[var(--color-muted)] text-[var(--color-white)] text-sm font-semibold flex items-center justify-center"></div>
          <div className="flex gap-1 items-center">
            <span className="text-sm text-gray-500">Admin</span>
            <ChevronDown className="w-4 h-4  text-[var(--color-muted)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
