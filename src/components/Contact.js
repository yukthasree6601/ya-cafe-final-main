import React from "react";
import { useSelector } from "react-redux"; // Import useSelector

export default function Contact() {
  // Access theme from Redux

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-4">
          If you have any questions or need assistance, please feel free to
          reach out to us using the contact form below or via email.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2">
          <strong>Address:</strong> chitoor, Andhra pradesh, India
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> +91 6789045345
        </p>
        <p className="mb-2">
          <strong>Email:</strong> yukthasree6601@gmail.com
        </p>
      </div>
    </div>
  );
}
