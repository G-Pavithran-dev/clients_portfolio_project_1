import React, { useState } from 'react'
import UiUXIcon from '../../assets/Service_images/icons/ui-ux-icon.svg'
import DigitalMarketingIcon from '../../assets/Service_images/icons/digital-marketing-icon.svg'
import EquityResearchIcon from '../../assets/Service_images/icons/equity-research-icon.svg'
import FullStackDevIcon from '../../assets/Service_images/icons/full-stack-icon.svg'
import CaseStudies from './CaseStudies'

const ServiceCategories = ({
  showFilters = true,
  featuredServiceId: propFeaturedServiceId = null,
  setFeaturedServiceId: propSetFeaturedServiceId = null,
  activeFilter: propActiveFilter = null,
  setActiveFilter: propSetActiveFilter = null,
}) => {
  // ===== LOCAL STATE (used when props not provided) =====
  const [localFeaturedServiceId, setLocalFeaturedServiceId] = useState(1)
  const [localActiveFilter, setLocalActiveFilter] = useState('All')

  // ===== DETERMINE STATE SOURCE =====
  // If props are provided, use them (controlled component)
  // Otherwise use local state (uncontrolled component)
  const featuredServiceId = propFeaturedServiceId ?? localFeaturedServiceId
  const setFeaturedServiceId =
    propSetFeaturedServiceId ?? setLocalFeaturedServiceId
  const activeFilter = propActiveFilter ?? localActiveFilter
  const setActiveFilter = propSetActiveFilter ?? setLocalActiveFilter
  const services = [
    {
      id: 1,
      icon: UiUXIcon,
      title: 'UX/UI',
      description: 'Designing intuitive experiences that elevate your brand.',
      filters: ['All', 'UX Research', 'UI Designs'],
    },
    {
      id: 2,
      icon: DigitalMarketingIcon,
      title: 'Digital Marketing',
      description: 'Building smart campaigns that connect you with customers.',
      filters: [
        'All',
        'SEO',
        'Google Ads',
        'Meta Ads',
        'Social Media Management',
        'E-Com Product Listing',
        'Website Analytics',
      ],
    },
    {
      id: 3,
      icon: EquityResearchIcon,
      title: 'Equity Research Analysis',
      description: 'Delivering data-driven insights to strengthen decisions.',
      filters: [
        'All',
        'Company Research Report',
        'Fundamental Analysis',
        'Valuation Model',
        'Industry & Sector Analysis',
        'Quarterly Reports Review',
        'Market Insights',
      ],
    },
    {
      id: 4,
      icon: FullStackDevIcon,
      title: 'Full-Stack Development',
      description: 'Creating reliable systems that support business growth.',
      filters: ['All', 'Digital Marketing', 'UI Designs', 'Google Ads', 'SEO'],
    },
  ]

  const featuredService = services.find((s) => s.id === featuredServiceId)

  const FilterComponent = (props) => {
    return (
      <div
        className={`${props.className} my-10 flex flex-wrap items-center justify-center gap-3`}
      >
        {featuredService.filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm border transition-all
                ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-50'
                }
              `}
          >
            {filter}
          </button>
        ))}
      </div>
    )
  }

  return (
    <section className="w-full py-4 md:py-12 lg:py-4">
      <div className="w-full rounded-lg flex flex-col items-center gap-6 bg-gray-bg border border-gray-bg p-6 md:p-8 lg:p-12">
        {/* SECTION TAG */}
        <div className="text-center mb-3">
          <span
            className="px-6 py-2 border border-black rounded-full text-sm"
            style={{ letterSpacing: '2px', fontWeight: '500' }}
          >
            SERVICES
          </span>
        </div>

        {/* HEADING */}
        <h2 className="md:w-[500px] text-center text-xl md:text-3xl font-semibold mb-10">
          Comprehensive solutions for your business needs
        </h2>

        {/* SERVICE CARDS GRID */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300">
          {services.map((service) => {
            const isActive = service.id === featuredServiceId

            return (
              <>
                <div
                  key={service.id}
                  onClick={() => {
                    setFeaturedServiceId(service.id)
                    setActiveFilter('All')
                  }}
                  className={`w-full cursor-pointer rounded-2xl p-6 py-12 border shadow-sm transition-all duration-300 flex flex-col items-center
                  ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-white hover:border-blue-400'
                  }
                `}
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10 mb-4"
                  />
                  <h3 className="text-lg text-center font-semibold mb-1">
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm text-center  ${
                      isActive ? 'text-white/90' : 'text-gray-600'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
                {isActive && showFilters && (
                  <FilterComponent className="flex lg:hidden" />
                )}
              </>
            )
          })}
        </div>
      </div>
      {showFilters && <FilterComponent className="hidden lg:flex" />}
    </section>
  )
}

export default ServiceCategories
