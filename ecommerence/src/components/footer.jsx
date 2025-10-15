export default function Footer() {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold text-white">SwiftCart</span>
          <p className="text-sm mt-2">© 2024 All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end space-x-6">
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Support
          </a>
        </div>
      </div>
    </>
  );
}
