import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-black body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-start text-start  lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="space-y-4 w-64 flex-shrink-0 md:mx-0 mx-auto items-start justify-start content-start text-start md:text-left">
          <Link
            href={"/"}
            className="flex title-font font-medium  items-start md:justify-start justify-start text-black"
          >
            <Image width={150} height={150} src={"/Logo.png"} alt="Logo" />
          </Link>
          <p className="mt-2">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex items-center justify-center">
            <a href={"https://www.facebook.com"} target="_blank">
              <FaFacebookF className="text-black" size={30} />
            </a>
            <a href={"https://www.twitter.com"} target="_blank">
              <RiTwitterXFill className="ml-4 text-black" size={30} />
            </a>
            <a
              href={"https://www.linkedin.com/qazimtalhatariq"}
              target="_blank"
            >
              <FaLinkedinIn className="ml-4 text-black" size={30} />
            </a>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-start">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Company
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a className="text-gray-600 hover:text-gray-800">About</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  How it Works
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Support
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Support Carrer
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">24h Service</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Quick Chat</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Contact
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Whatsapp</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Support 24h</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-red-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-black text-sm text-center sm:text-left">
            © 2024 muhammadtalhatariq —
            <a
              href="https:github.com/qazimtalhatariq"
              rel="noopener noreferrer"
              className="text-black ml-1"
              target="_blank"
            >
              @muhammadtalhatariq
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-black">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-black">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-black">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <Link
              href={"https:github.com/qazimtalhatariq"}
              className="w-5 h-5 ml-3 text-black"
            >
              <svg
                className="github-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.43 9.8 8.2 11.37.6.11.82-.26.82-.58v-2.03c-3.34.73-4.03-1.61-4.03-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .1-.8.42-1.31.77-1.61-2.69-.3-5.52-1.34-5.52-5.97 0-1.32.47-2.4 1.23-3.24-.14-.3-.53-1.54.1-3.22 0 0 1.02-.33 3.34 1.25.97-.26 2-.39 3.02-.4 1.02.01 2.05.14 3.02.4 2.32-1.57 3.34-1.25 3.34-1.25.63 1.68.24 2.92.12 3.22.77.84 1.22 1.91 1.22 3.24 0 4.64-2.83 5.67-5.53 5.96.43.37.82 1.11.82 2.24v3.32c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
