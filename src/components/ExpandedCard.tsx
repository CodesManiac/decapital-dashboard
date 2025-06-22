import { Experience } from '@/types'
import { CalendarDays } from 'lucide-react'
import React from 'react'

const ExpandedCard = ({ exp }: { exp: Experience }) => {
  return (
    <div className="bg-[var(--color-primary)] text-white rounded-xl p-6 space-y-3">
     <div className='flex justify-between '>
     <p className="text-sm font-medium text-gray-300">Young Artist Program | Program</p>
     <div className=" flex items-center gap-2 text-sm  text-right text-gray-300 justify-self-end" >
     <CalendarDays className="w-4 h-4" /> <span>{exp.date}</span></div>
     </div>

      <h3 className="text-xl font-bold">{exp.title.charAt(0).toUpperCase() + exp.title.slice(1)}</h3>
      <p className="text-sm">{exp.organization}</p>

      <div className="flex flex-wrap gap-2">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="bg-[var(--color-dark-text)] text-[var(--color-background)] text-xs font-medium px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  )
}

export default ExpandedCard