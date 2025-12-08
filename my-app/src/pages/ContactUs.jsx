import React, { useState } from "react";
import Email from '../assets/Contact_images/Email.svg';
import Phone from '../assets/Contact_images/Phone.svg';
import Location from '../assets/Contact_images/Location.svg';
import PrimaryButton from "../globalComponent/PrimaryButton";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="max-w-[calc(100%-1rem)] mx-auto rounded-lg bg-gray-bg border border-gray-bg relative z-50 mt-2 flex flex-col lg:flex-row gap-10">

      {/* LEFT SECTION */}
      <div className="w-full lg:w-1/2 mt-2 flex flex-col lg:ml-6 md:mt-4">
        <p className="inline-block border self-center md:self-start lg:self-start border-black rounded-full px-3 py-1 text-xs font-medium uppercase">
          CONTACT US
        </p>

        <p className="text-3xl font-normal self-center mt-4 sm:self-center md:self-start lg:self-start">
          Connect with Arunijone
        </p>

        <div className="text-sm text-center text-gray-600 mt-2 self-center md:self-start lg:self-start">
          Learn about my vision, story, and how I bring ideas to life.
        </div>

        {/* Contact Cards */}
        <div className="mt-10 flex flex-col gap-4 lg:mt-20">

          {/* Email */}
          <div className="bg-white flex items-start gap-3 p-4 rounded-xl shadow-sm w-full max-w">
            <img src={Email} alt="email icon" className="w-10 h-10" />
            <div>
              <p className="text-xs text-gray-500">Email Address</p>
              <p className="text-base font-medium">Arunijone@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white flex items-start gap-3 p-4 rounded-xl shadow-sm w-full max-w">
            <img src={Phone} alt="phone icon" className="w-10 h-10" />
            <div>
              <p className="text-xs text-gray-500">Phone Number</p>
              <p className="text-base font-medium">+91 85085 10983</p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white flex items-start gap-3 p-4 rounded-xl shadow-sm w-full max-w">
            <img src={Location} alt="location icon" className="w-10 h-10" />
            <div>
              <p className="text-xs text-gray-500">My Location</p>
              <p className="text-base font-medium">Rameswaram</p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT SECTION - FORM */}
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-1/2 p-6 rounded-xl"
      >

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-4">

          <div className="flex flex-col w-full">
            <label className="text-sm font-medium mb-1">Your Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="rounded-full border px-4 py-3 bg-white"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-sm font-medium mb-1">Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="rounded-full border px-4 py-3 bg-white"
            />
          </div>

        </div>

        {/* Email */}
        <div className="flex flex-col mt-4">
          <label className="text-sm font-medium mb-1">Email Address</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-full border px-4 py-3 bg-white"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col mt-4">
          <label className="text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="rounded-xl border px-4 py-3 bg-white h-40 resize-none"
          />
        </div>

        {/* Button */}
        <PrimaryButton
          type="submit"
          fullWidth={true}
          className="mt-6"
        >
          Submit
        </PrimaryButton>

      </form>
    </div>
  );
};

export default ContactUs;
