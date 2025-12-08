import React from "react";
import PrimaryButton from "../globalComponent/PrimaryButton";
import Arrowmark from '../assets/About_image/Arrow_mark_right.svg'
import Left_image from '../assets/About_image/left_image.svg'
import Right_image from '../assets/About_image/Right_image.svg'
import bulb from '../assets/About_image/bulb.svg'
import Marketing_director from '../assets/About_image/Marketing_director.svg'
import Marketing_directortwo from '../assets/About_image/Marketing_director-II.svg'
import ArjunJone from '../assets/About_image/ArjunJone.svg'
import Ceo from '../assets/About_image/CEO_image.svg'
import Left_arrow from '../assets/About_image/Left_Arrow.svg'
import Right_arrow from '../assets/About_image/Right_Arrow.svg'
import Project2 from '../assets/About_image/Project2.svg'
import Project3 from '../assets/About_image/Project3.svg'
import Project4 from '../assets/About_image/Project4.svg'


const About = () => {
  const projectImages = [
    Project4,
    Project2,
    Project3,
    Project4,
    Project2,
    Project3,
  ]
  return (
    <div className="container mx-auto lg:flex lg:flex-col lg:gap-5">
      <p className="mt-4 font-inter font-normal text-[57.84px] leading-[66.33px] tracking-[-3.47px] text-center align-middle">Expert guidance, tailored solution</p>
      <p className="mt-2 font-inter font-light text-[15.3px] leading-[22.88px] tracking-[0px] text-center align-middle">Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.</p>
      <div className="mt-2 flex flex-row gap-1 align-middle text-center justify-center">
          <PrimaryButton
            fullWidth={false}
            className="px-4 py-2 h-11 shadow-sm flex flex-row gap-2"
            style={{
              fontWeight: 500,
              fontSize: "15.78px",
              lineHeight: "22.47px",
              letterSpacing: "-0.08px"
            }}
          >
            Contact <img src={Arrowmark} alt="ArrowMark" />
          </PrimaryButton>
          <button
          type="button"
          className={`w-auto bg-transparent hover:bg-blue-700 text-black rounded-full py-3 px-6 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed border rounded`}
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: "14px",
          }}
        >
          Portfolio
        </button>
      </div>
      <div className="mt-4 mx-4 px-2 bg-[#F6F7F9] rounded-2xl p-2 
                grid grid-cols-2 gap-2 
                lg:grid-cols-3 lg:auto-rows-[268px]">

  {/* LEFT IMAGE */}
  <div className="rounded-[15px] overflow-hidden 
                  lg:row-span-2 lg:rounded-[17px]">
    <img
      src={Left_image}
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* TOP RIGHT BLUE CARD */}
  <div className="bg-button-bg p-4 rounded-[15px]
                  flex flex-col justify-between
                  lg:rounded-[17px]">
    <p className="font-inter font-medium text-[13px] leading-[19px] text-white">
      Complete customer satisfaction through
      tailored solutions and a commitment to
      excellence.
    </p>
    <p className="font-inter font-normal text-[46px] leading-[55px] text-white">
      95%
    </p>
  </div>

  {/* RIGHT BIG IMAGE */}
  <div className="rounded-[15px] overflow-hidden 
                  lg:row-span-2 lg:rounded-[17px]">
    <img
      src={Right_image}
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* BOTTOM BLACK CARD */}
  <div className="bg-[#232323] p-4 rounded-[15px] 
                  flex flex-col justify-between 
                  lg:rounded-[17px]">
    <img src={bulb} alt="" className="w-[40px] h-[40px]" />
    <p className="mt-3 font-inter text-[46px] leading-[55px] text-white">
      3+
    </p>
    <p className="font-inter font-medium text-[13px] leading-[19px] text-white">
      Years of innovation and practical insights,
      helping businesses grow and stay competitive
      in the market.
    </p>
  </div>
</div>
      <div className="mt-4 flex flex-col items-center gap-3">
          <button
            type="button"
            className={`w-fit bg-transparent  text-black rounded-full py-3 px-6 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed border rounded lg:self-start`}
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "14px",
            }}
          >
            Expertise
          </button>
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-start w-full mt-3">
            <p className="
              font-inter font-normal 
              text-[34.3px] leading-[38.13px] tracking-[-2.06px] 
              lg:w-[350px]
              lg:text-[30.7px] 
              lg:leading-[34.11px] 
              lg:tracking-[-1.84px] 
              text-center
            ">
              Explore our comprehensive service offerings
            </p>


            <p className="mt-2 font-inter font-light text-[13.62px] leading-[22.88px] tracking-[0%] lg:w-[478.4078px]
            h-[37.0176px]
            opacity-100
            top-[67.7px]
            left-[847.71px] lg:mt-0 text-center">Meet the people behind the work—skilled professionals combining knowledge and modern strategies to deliver meaningful, long-term growth.</p>
          </div>
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-center lg:justify-center mt-10">
          <div class="mt-2 relative border w-fit h-[435.926px] rotate-0 opacity-100 rounded-[20.47px] border-none">
            <img src={ArjunJone} alt="Sample" class="w-[324.5137px] h-[435.9259px] rounded-[20.47px]" />
            <div class="absolute inset-0 flex flex-col items-center justify-end bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%)] w-[324.5137px] h-[86.1337px] top-[349.7px] opacity-100 rounded-[20.47px] ">
                <p className="font-inter font-medium text-[17.08px] leading-[23.88px] tracking-[-0.51px] align-middle capitalize text-white sm:">Arunijone</p>
                <p className="font-inter font-normal text-[13.62px] leading-[23.88px] tracking-normal align-middle text-white">UX/UI, Digital Marketing</p>
            </div>
          </div>
          <div class="mt-2 relative border w-fit h-[435.926px] rotate-0 opacity-100 rounded-[20.47px] border-none">
            <img src={Marketing_directortwo} alt="Sample" class="w-[324.5137px] h-[435.9259px] rounded-[20.47px] top-0" />
            <div class="absolute inset-0 flex flex-col items-center justify-end bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%)] w-[324.5137px] h-[86.1337px] top-[349.7px] opacity-100 rounded-[20.47px] ">
                <p className="font-inter font-medium text-[17.08px] leading-[23.88px] tracking-[-0.51px] align-middle capitalize text-white">Thiyagaraj</p>
                <p className="font-inter font-normal text-[13.62px] leading-[23.88px] tracking-normal align-middle text-white">Full-Stack Developer</p>
            </div>
          </div>
          <div class="mt-2 relative border w-fit h-[435.926px] rotate-0 opacity-100 rounded-[20.47px] border-none">
            <img src={Marketing_directortwo} alt="Sample" class="w-[324.5137px] h-[435.9259px] rounded-[20.47px]" />
            <div class="absolute inset-0 flex flex-col items-center justify-end bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%)] w-[324.5137px] h-[86.1337px] top-[349.7px] opacity-100 rounded-[20.47px] ">
                <p className="font-inter font-medium text-[17.08px] leading-[23.88px] tracking-[-0.51px] align-middle capitalize text-white">Gagan Deep</p>
                <p className="font-inter font-normal text-[13.62px] leading-[23.88px] tracking-normal align-middle text-white">Equity Researcher</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col align-middle items-center p-2 gap-6 bg-[#F6F7F9] m-2 rounded-xl m-4">
        <img className="mt-25 relative w-[95.34px] h-[95.34px] rotate-0 opacity-100 rounded-full" src={Ceo} alt="" />
        <p className="font-inter font-normal text-[28.6px] leading-[33.35px] tracking-[-0.86px] text-center align-middle capitalize">"They brought clarity to
        complex problems,
        breaking down barriers and
        delivering innovative
        solutions. I was truly
        impressed by how quickly
        their strategies turned into
        real, tangible outcomes,
        driving measurable growth
        and success for our
        business."</p>
        <div className="flex gap-2">
          <p className="font-inter font-normal text-[19.1px] leading-[26.7px] tracking-[-1.14px] text-center align-middle">John Doe</p>
          <p className="font-inter font-normal text-[19.1px] leading-[26.7px] tracking-[-1.14px] text-center align-middle">CEO, Tech Innovations</p>
        </div>
        <div className="flex gap-2 mb-15">
           <button
          type="button"
          className={"w-auto bg-transparent hover:bg-blue-700 border-amber-400 text-black rounded-full p-3 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed border-bg-blue rounded lg:hidden"}
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: "14px",
          }}
        >
          <img src={Left_arrow} alt="" />
        </button>
        <button
        type="button"
        className={"w-auto bg-transparent hover:bg-blue-700 text-black rounded-full p-3 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded lg:hidden"}
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "14px",
            }}
          >
        <img src={Right_arrow} alt="" />
        </button>
        </div>
      </div>
      <div className="px-6 flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <p className="font-inter font-normal text-[45.8px] leading-[52.49px] tracking-[-2.75px] text-center align-middle">Our Project</p>
          <div class="lg:w-[718.288px] opacity-100">
            <p className="font-inter font-light text-[15.03px] leading-[22.52px] tracking-[0] align-middle mt-4 text-center lg:text-start">At our firm, we pride ourselves on delivering
            tailored solutions that empower businesses to
            thrive. With years of experience across various
            industries, our dedicated team is committed to
            driving growth and operational excellence.</p>
        </div>
        </div>
        <div className="mt-2 flex flex-row gap-1 align-middle text-center justify-center lg:hidden">
          <PrimaryButton
            fullWidth={false}
            className="px-4 py-2 h-11 shadow-sm flex flex-row gap-2"
            style={{
              fontWeight: 500,
              fontSize: "15.78px",
              lineHeight: "22.47px",
              letterSpacing: "-0.08px"
            }}
          >
            Contact <img src={Arrowmark} alt="ArrowMark" />
          </PrimaryButton>
          <button
          type="button"
          className={`w-auto bg-transparent hover:bg-blue-700 text-black rounded-full py-3 px-6 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed border rounded`}
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: "14px",
          }}
        >
          Portfolio
        </button>
        </div>
        
        <div className="flex overflow-x-auto space-x-4 p-2 lg:mt-4">
          {projectImages.map((img, index) => (
            <div
              key={index}
              className="min-w-[350px] h-[435px] rounded-[30px] overflow-hidden bg-gray-200"
            >
              <img
                src={img}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
