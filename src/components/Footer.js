import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-gray-900 text-white py-6 w-full"
      style={{
        boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container mx-auto flex flex-col items-center px-4">
        {/* Company Info */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold tracking-wider">YA CAFE</h1>
          <p className="text-sm mt-2">&copy; 2024 All rights reserved</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>

        {/* Made by Section */}
        <div className="text-center">
          <p className="text-sm">
            Made with ❤️ by <span className="font-semibold">Yukthasree 🚀</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
