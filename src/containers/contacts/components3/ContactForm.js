import React from "react";

const ContactForm = () => {
  return (
    <div className="container mx-auto p-4">
      <form className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md">
        {/* <h2 className="text-2xl font-semibold mb-4">Contact Us</h2> */}

        {/* Full Name */}
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="mt-1 p-2 w-full border rounded-md bg-gray-100"
            placeholder="Your Full Name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md bg-gray-100"
            placeholder="Your Email"
            required
          />
        </div>

        {/* Phone Number and Subject */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="mt-1 p-2 w-full border rounded-md bg-gray-100"
              placeholder="Your Phone Number"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-600"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-1 p-2 w-full border rounded-md bg-gray-100"
              placeholder="Subject"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md bg-gray-100"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
