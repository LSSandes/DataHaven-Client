import React from "react";
import { Link } from "react-router-dom";
import LogoFooter from "../assets/logo_footer.webp";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { PiBuildingApartment } from "react-icons/pi";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <img src={LogoFooter} alt="" width={30} height="auto" />
              <Link to="/" className="text-xl font-bold text-gray-900">
                DataHaven
              </Link>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Access and analyze global data with ease
            </p>
            <div className="flex justify-center items-center gap-4">
              <FaFacebook className="w-6 h-6 text-blue-500 cursor-pointer" />
              <IoLogoYoutube className="w-6 h-6 text-red-500 cursor-pointer" />
              <FaInstagramSquare className="w-6 h-6 text-pink-500 cursor-pointer" />
              <FaTwitter className="w-6 h-6 text-blue-500 cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <div className="flex justify-start items-center gap-2">
                <MdOutlinePrivacyTip className="w-5 h-5" />
                <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              </div>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm text-gray-600 hover:text-blue-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-sm text-gray-600 hover:text-blue-500"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-start items-center gap-2">
                <PiBuildingApartment className="w-5 h-5" />
                <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              </div>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-gray-600 hover:text-blue-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-gray-600 hover:text-blue-500"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} DataHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
