import { Home, PlayCircle, Star, User } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-8">
      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
        A
      </div>
      <nav className="flex flex-col items-center space-y-6">
        <Home className="w-5 h-5 text-gray-500 hover:text-black" />
        <User className="w-5 h-5 text-gray-500 hover:text-black" />
        <PlayCircle className="w-5 h-5 text-gray-500 hover:text-black" />
        <Star className="w-5 h-5 text-gray-500 hover:text-black" />
      </nav>
    </aside>
  )
}

export default Sidebar
