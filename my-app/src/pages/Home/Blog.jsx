import React, { useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import blogImg1 from "@/assets/Home's_images/blog's-img1.png";
import blogImg2 from "@/assets/Home's_images/blog's-img2.png";
import blogImg3 from "@/assets/Home's_images/blog-img3.png";
import blogImg4 from "@/assets/Home's_images/blog-img4.png";
import blogIcon1 from "@/assets/Home's_images/blog_icon1.png";
import blogIcon2 from "@/assets/Home's_images/blog_icon2.png";
import blogIcon3 from "@/assets/Home's_images/blog_icon3.png";
import blogIcon4 from "@/assets/Home's_images/blog_icon4.png";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(0); // 0 for first 2 items, 1 for next 2 items
  const scrollContainerRef = useRef(null);

  const handleViewAll = () => {
    if (scrollContainerRef.current) {
      // Scroll to the end when showing more
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
    setCurrentPage(1);
  };

  const handleShowPrevious = () => {
    if (scrollContainerRef.current) {
      // Scroll back to start when showing previous
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
    setCurrentPage(0);
  };

  const blogItems = [
    {
      id: 1,
      title: "Maximizing your marketing ROI",
      description:
        "Discover strategies to enhance your marketing return on investment effectively.",
      author: "Ryan Torff",
      date: "May 2, 2022",
      readTime: "4 min read",
      bgColor: "bg-[#E8E8E8]",
      image: blogImg1,
      avatar: blogIcon1,
    },
    {
      id: 2,
      title: "Leveraging Data-Driven Strategies for Business Growth",
      description:
        "Discover how data analytics can unlock newopportunities and drive sustainable business expansion.",
      author: "Zain Dokidis",
      date: "February 15, 2022",
      readTime: "7 min read",
      bgColor: "bg-[#F5F5F5]",
      image: blogImg2,
      avatar: blogIcon2,
    },
    {
      id: 3,
      title: "Driving innovation through design",
      description:
        "Explore how creative design solutions can transform your business strategy.",
      author: "Sarah Mitchell",
      date: "June 10, 2023",
      readTime: "5 min read",
      bgColor: "bg-[#E8E8E8]",
      image: blogImg3,
      avatar: blogIcon3,
    },
    {
      id: 4,
      title: "Effective team management techniques",
      description:
        "Learn how to tackle financial hurdles with expert guidance.",
      author: "Brandon Schleifer",
      date: "June 11, 2022",
      readTime: "6 min read",
      bgColor: "bg-[#F5F5F5]",
      image: blogImg4,
      avatar: blogIcon4,
    },
  ];

  return (
    <section className="w-full py-4 md:py-4 lg:py-4  min-w-[320px]">
      <div className="w-full  rounded-lg bg-gray-bg border border-gray-bg p-6 md:p-8 lg:p-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between mb-12">
          <div className="w-full lg:w-auto">
            {/* Blog Badge */}
            <div className="inline-block mb-6">
              <span
                className="px-4 py-2 rounded-full border border-gray-500 text-gray-700 uppercase"
                style={{
                  fontSize: "11.4px",
                  fontWeight: 500,
                  lineHeight: "13.73px",
                  letterSpacing: "1.72px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                OUR BLOG
              </span>
            </div>

            {/* Heading */}
            <h2
              className="mb-6 lg:mb-0"
              style={{
                fontSize: "33.79px",
                fontWeight: 400,
                lineHeight: "37.52px",
                letterSpacing: "-2.03px",
                color: "#111111",
              }}
            >
              Latest insights and trends
            </h2>
          </div>

          {/* View All / Show Previous Button - Both Mobile & Desktop */}
          <button
            onClick={currentPage === 0 ? handleViewAll : handleShowPrevious}
            className="px-6 py-3 bg-button-bg text-white rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity lg:mt-0"
            style={{
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {currentPage === 0 ? "View All" : "Show Previous"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Blog Horizontal Scroll - Desktop */}
        <div
          ref={scrollContainerRef}
          className="hidden lg:flex gap-8 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {blogItems.map((item) => (
            <div
              key={item.id}
              className="shrink-0"
              style={{
                width: "min(600px, 85vw)",
              }}
            >
              {/* Image Card */}
              <div
                className={`${item.bgColor} overflow-hidden flex items-center justify-center mb-6`}
                style={{
                  width: "100%",
                  height: "350px",
                  borderRadius: "20.41px",
                  opacity: 1,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover object-center w-full h-full"
                />
              </div>

              {/* Content Below Card */}
              <div>
                <h3
                  className="mb-4"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    color: "rgba(17, 17, 17, 0.8)",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="mb-6"
                  style={{
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: "20px",
                    color: "rgba(17, 17, 17, 0.6)",
                  }}
                >
                  {item.description}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#111111",
                      }}
                    >
                      {item.author}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: 400,
                        color: "#666666",
                      }}
                    >
                      {item.date} • {item.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Blog Card View */}
        <div className="lg:hidden">
          {/* Show 2 cards based on current page */}
          <div className="space-y-6">
            {blogItems
              .slice(currentPage * 2, currentPage * 2 + 2)
              .map((item) => (
                <div key={item.id} className="mb-6">
                  {/* Image Card */}
                  <div
                    className={`${item.bgColor} overflow-hidden flex items-center justify-center mb-6 rounded-3xl`}
                    style={{
                      height: "400px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-center  w-full h-full"
                    />
                  </div>

                  {/* Content Below Card */}
                  <div>
                    <h3
                      className="mb-4"
                      style={{
                        fontSize: "20px",
                        fontWeight: 500,
                        lineHeight: "28px",
                        color: "rgba(17, 17, 17, 0.8)",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mb-6"
                      style={{
                        fontSize: "14px",
                        fontWeight: 300,
                        lineHeight: "20px",
                        color: "rgba(17, 17, 17, 0.6)",
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#111111",
                          }}
                        >
                          {item.author}
                        </p>
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 400,
                            color: "#666666",
                          }}
                        >
                          {item.date} • {item.readTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for all browsers */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Blog;
