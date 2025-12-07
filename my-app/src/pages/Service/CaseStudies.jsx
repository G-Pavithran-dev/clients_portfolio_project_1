import React from 'react'
import CaseStudyCard from './CaseStudyCard'
import Rameswaram from '../../assets/Service_images/CaseStudies/rameswaram.png'
import SeaSoft from '../../assets/Service_images/CaseStudies/seasoft.png'
import SampleImg1 from '../../assets/Service_images/CaseStudies/sample-image-1.png'
import SampleImg2 from '../../assets/Service_images/CaseStudies/sample-image-2.png'
import SampleImg3 from '../../assets/Service_images/CaseStudies/sample-image-3.png'
import SampleImg4 from '../../assets/Service_images/CaseStudies/sample-image-4.png'
import caseStudiesData from './caseStudiesData.json'

// Map image file names to imported images
const imageMap = {
  'rameswaram.png': Rameswaram,
  'seasoft.png': SeaSoft,
  'sample-image-1.png': SampleImg1,
  'sample-image-2.png': SampleImg2,
  'sample-image-3.png': SampleImg3,
  'sample-image-4.png': SampleImg4,
}

const CaseStudies = ({ featuredServiceId, activeFilter }) => {
  // Resolve thumbnail images from JSON data
  const caseStudies = caseStudiesData.caseStudies.map((study) => ({
    ...study,
    thumbnail: imageMap[study.thumbnail] || study.thumbnail,
  }))

  // Filter case studies based on selected service + filter
  const filteredStudies = caseStudies.filter((cs) => 
    cs.serviceId === featuredServiceId &&
    cs.filters.includes(activeFilter)
    // (activeFilter === 'All' || cs.filters.includes(activeFilter)
  )

  return (
    <div className="w-full rounded-lg py-8 md:py-12 lg:py-16 bg-gray-bg flex flex-col gap-8 px-2 md:px-8 lg:px-12">
      {/* Header */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <span
          className="inline-block px-6 py-2 border border-gray-400 rounded-full text-sm"
          style={{ letterSpacing: '2px', fontWeight: '500' }}
        >
          CASE STUDIES
        </span>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 text-center md:text-left">
          <h2 className="text-3xl w-fit lg:text-4xl font-semibold mt-4 mb-2">
            Our Success Stories Real Results, <br className="hidden xl:block" />{' '}
            Real Impact
          </h2>
          <p className="w-auto text-gray-600 xl:px-8">
            Discover how our work has helped clients achieve measurable{' '}
            <br className="hidden xl:block" /> growth and overcome key
            challenges.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="flex flex-col gap-8">
        {filteredStudies.length === 0 ? (
          <p className="text-center col-span-full text-gray-500 py-12">
            No case studies available for this filter.
          </p>
        ) : (
          filteredStudies.map((study) => (
            <CaseStudyCard key={study.id} data={study} />
          ))
        )}
      </div>
    </div>
  )
}

export default CaseStudies
