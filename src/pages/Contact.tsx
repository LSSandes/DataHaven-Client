import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            style={{ fontFamily: "Roboto-Bold" }}
          >
            Contact Us
          </h2>
          <p
            className="mt-4 text-xl text-gray-600"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            We'd love to hear from you
          </p>
        </div>

        <div className="mt-16 max-w-xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-y-6"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-md font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow-sm block w-full sm:text-md border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow-sm block w-full sm:text-md border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-md font-medium text-gray-700"
              >
                Subject
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="shadow-sm block w-full sm:text-md border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-md font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow-sm block w-full sm:text-md border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-md gap-2"
              >
                <IoIosSend className="w-4 h-4" />
                Send message
              </button>
            </div>
          </form>

          <div className="mt-12" style={{ fontFamily: "Roboto-Regular" }}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="flex flex-col items-start justify-start">
                <div className="flex justify-center items-center gap-2">
                  <MdOutlineMailOutline className="w-4 h-4" />
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                </div>
                <p className="mt-2 text-base text-gray-500">
                  tomek@harvest-mobile.com
                </p>
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="flex justify-center items-center gap-2">
                  <HiOutlineOfficeBuilding className="w-4 h-4" />
                  <h3 className="text-lg font-medium text-gray-900">Office</h3>
                </div>
                <p className="mt-2 text-base text-gray-500">
                  123 AI Street
                  <br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
