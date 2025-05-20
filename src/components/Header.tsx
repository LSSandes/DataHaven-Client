import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../store/atoms";
import UserMenu from "./UserMenu";
import LogoTitle from "../assets/logo_title.webp";

const Header: React.FC<{ toggleMobileSidebar: () => void }> = ({
  toggleMobileSidebar,
}) => {
  const user = useAtom(userAtom);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  console.log(toggleMobileSidebar);
  console.log("user--------->", user[0]);
  const getFirstLetterUppercase = (str: string) => {
    if (str.length === 0) return "";
    return str.charAt(0).toUpperCase();
  };
  return (
    <header className="w-full bg-white border-b border-gray-200 ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={LogoTitle} alt="logo" width={150} height="auto" />
          </Link>

          <nav
            className="hidden md:flex items-center space-x-8"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            {!user[0] ? (
              <Link
                to="/login"
                className="px-4 py-2 text-white border rounded-md hover:bg-blue-50 bg-[#1F3549] hover:border-[#1F3549] hover:text-[#1F3549] transition-colors duration-200 ease-in-out"
              >
                Log in
              </Link>
            ) : (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center space-x-2 p-1.5 text-gray-400 
                       hover:text-white hover:bg-dark-200/50 rounded-lg 
                       transition-all duration-300"
              >
                {user[0].picture !== undefined ? (
                  <img
                    src={`${user[0].picture}`}
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border border-accent/50"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full border border-accent/50  text-3xl">
                    {getFirstLetterUppercase(user[0]?.email || "")}
                  </div>
                )}
              </button>
            )}
            <UserMenu
              isOpen={isMenuOpen}
              email={user[0]?.email || ""}
              picture={user[0]?.picture || ""}
              onClose={() => setIsMenuOpen(false)}
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
