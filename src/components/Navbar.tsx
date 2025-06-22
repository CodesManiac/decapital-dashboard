import { ChevronDown, Folder, Search } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-4">
      <Search  className="w-4 h-4  text-[var(--color-muted)]" />
        <Folder className="w-4 h-4  text-[var(--color-muted)]"  />
      </div>
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-[var(--color-muted)] text-white text-sm font-semibold flex items-center justify-center">
        
      </div>
       <div className='flex gap-1 items-center'>
       <span className="text-sm text-gray-500">Admin</span>
       <ChevronDown className="w-4 h-4  text-[var(--color-muted)]" />
       </div>
      </div>
      
    </div>
  )
}

export default Navbar
