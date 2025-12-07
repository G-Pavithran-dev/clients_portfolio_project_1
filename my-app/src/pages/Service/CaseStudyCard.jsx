import React from 'react'
import { ArrowRight } from 'lucide-react'
import PersonIcon from '../../assets/Service_images/icons/person-icon.svg'

const CaseStudyCard = ({ data }) => {
  return (
    <div className="rounded-3xl overflow-hidden bg-gray-bg  transition-all flex flex-col lg:flex-row justify-around items-stretch">
      {/* Left: Thumbnail */}
      <div className="rounded-3xl w-full lg:w-2/5 h-auto lg:h-auto shrink-0 overflow-hidden">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </div>

      {/* Right: Content */}
      <div className="p-6 lg:p-8 flex flex-col justify-around w-full lg:w-3/5">
        {/* Header with title and menu */}
        <div className="flex flex-col justify-around gap-4">
          <h3 className="text-xl lg:text-2xl font-semibold leading-tight flex-1 pr-2">
            {data.title}
          </h3>
          <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
            {data.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 text-xs lg:text-sm bg-[#0161FE1A] text-[#111111CC] rounded-full  font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}

        {/* Footer: Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
            Explore <ArrowRight size={18} />
          </button>
          <button className="rounded-full">
            <img src={PersonIcon} typeof='image/svg+xml' alt='icon' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyCard
