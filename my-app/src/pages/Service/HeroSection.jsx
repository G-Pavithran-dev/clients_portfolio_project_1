import React from 'react'
import serviceImage from '../../assets/Service_images/service-hero.png'

const HeroSection = () => {
  // ===== GLOBAL CONTENT =====
  const heading = 'Explore services'
  const description =
    'Discover solutions tailored to your business needs. From strategic planning to smooth operations, we provide the expertise and tools to support your growth.'
  const altText = 'Explore Services'

  // ===== GLOBAL STYLES =====
  const commonHeadingStyles = {
    fontWeight: 600,
    lineHeight: '1.2',
    letterSpacing: '-0.5px',
  }

  const commonDescriptionStyles = {
    fontWeight: 400,
    lineHeight: '1.6',
  }

  const commonImageStyles = {
    borderRadius: '1rem', // rounded-2xl
  }

  // ===== BREAKPOINT-SPECIFIC STYLES =====
  const mobileStyles = {
    heading: { ...commonHeadingStyles, fontSize: '32px' },
    description: { ...commonDescriptionStyles, fontSize: '14px' },
  }

  const tabletStyles = {
    heading: { ...commonHeadingStyles, fontSize: '40px', fontFamily: 'Inter' },
    description: {
      ...commonDescriptionStyles,
      fontSize: '15px',
      fontFamily: 'Inter',
    },
  }

  const desktopStyles = {
    heading: { ...commonHeadingStyles, fontSize: '48px' },
    description: { ...commonDescriptionStyles, fontSize: '16px' },
  }

  return (
    <section className="w-full py-4 md:py-12 lg:py-4 min-w-[320px]">
      <div className="w-full rounded-lg bg-gray-bg border border-gray-bg p-6 md:p-8 lg:p-12">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-6">
          {/* Heading */}
          <h1 className="text-center" style={mobileStyles.heading}>
            {heading}
          </h1>

          {/* Description */}
          <p
            className="text-gray-600 text-center px-2"
            style={mobileStyles.description}
          >
            {description}
          </p>

          {/* Image Container */}
          <div className="flex justify-center">
            <img
              src={serviceImage}
              alt={altText}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col gap-6 items-center">
          {/* Top Content */}
          <div className="w-full flex flex-row gap-6 justify-between p-2">
            {/* Heading */}
            <h1 style={desktopStyles.heading}>{heading}</h1>

            {/* Description */}
            <p className="w-lg p-2" style={desktopStyles.description}>
              {description}
            </p>
          </div>

          {/* Bottom Image */}
          <div className="flex justify-center w-full">
            <img src={serviceImage} alt={altText} className="rounded-2xl" />
          </div>
        </div>

        {/* Tablet Layout (md) */}
        <div className="hidden md:grid lg:hidden gap-6">
          {/* Heading */}
          <h1 className="text-center" style={tabletStyles.heading}>
            {heading}
          </h1>

          {/* Description */}
          <p
            className="text-gray-600 text-center px-4"
            style={tabletStyles.description}
          >
            {description}
          </p>

          {/* Image Container */}
          <div className="flex justify-center">
            <img
              src={serviceImage}
              alt={altText}
              className="rounded-2xl w-full h-auto object-cover"
              style={{
                maxWidth: '600px',
                aspectRatio: '1/0.7',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
