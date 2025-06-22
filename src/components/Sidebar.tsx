
'use client';

import { SidebarProps } from '@/types';
import { Bell, Book, Briefcase, Headset, Home, Mail } from 'lucide-react'


const Sidebar = ({active,setActive}:SidebarProps) => {

    const navItems = [
      { name: 'Home', icon: Home },
      { name: 'Work', icon: Briefcase },
      { name: 'Book', icon: Book },
      { name: 'Mail', icon: Mail },
      { name: 'Notifications', icon: Bell },
      { name: 'Headset', icon: Headset },
    ];
  
  return (
    <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-8">
      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
        A
      </div>

      <nav className="flex flex-col items-center space-y-8">
        {navItems.map(({ name, icon: Icon }) => {
          const isActive = active === name;
          return (
            <div
              key={name}
              onClick={() => setActive(name)}
              className={`relative cursor-pointer w-10 h-10 flex items-center justify-center rounded-full ${
                isActive ? 'bg-[var(--color-background)] hover:text-[var(--color-primary)]' : 'text-gray-500 hover:text-black'
              }`}
            >
              
              <Icon className="w-5 h-5" />
              {isActive && (
                <span className="absolute -right-2 w-2 h-2 bg-[var(--color-primary)] rounded-full"></span>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
