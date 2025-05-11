import { useRef, useEffect } from "react";
import { GoSignOut } from "react-icons/go";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";
export default function UserMenu({
  isOpen,
  onClose,
  email,
  picture,
}: {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  picture: string;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onClose]);
  const getFirstLetterUppercase = (str: string) => {
    if (str.length === 0) return ""; // Return empty if the string is empty
    return str.charAt(0).toUpperCase(); // Get the first character and convert to uppercase
  };
  const handleSignout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  if (!isOpen) return null;
  return (
    <div className="absolute top-20 right-16 z-50">
      <div
        ref={menuRef}
        className="right-4 top-16 w-[fit-content] bg-dark/95 backdrop-blur-xl border border-dark-300/30 shadow-2xl rounded-xl overflow-hidden"
      >
        <div className="p-4 border-b border-dark-300/30 bg-dark-100/50 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              {picture != null ? (
                <img
                  src={`${picture}`}
                  alt="avatar"
                  className="w-7 h-7 rounded-full border border-accent/20"
                />
              ) : (
                <div className="w-7 h-7 rounded-full flex items-center justify-center border border-accent/20">
                  {getFirstLetterUppercase(email)}
                </div>
              )}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-dark" />
            </div>
            <div>
              <h3 className="text-gray-900 font-medium">{email}</h3>
            </div>
          </div>
          <div className="flex justify-center items-start flex-col w-full gap-2">
            <div className="text-gray-900 text-sm flex justify-between w-full border-b border-gray-300 py-2">
              <div className="flex justify-center items-center gap-2">
                <MdOutlineAccountCircle className="w-4 h-4" />
                <span>My Account</span>
              </div>
              <MdChevronRight className="w-5 h-5" />
            </div>
            <div className="text-gray-900 text-sm flex justify-between w-full border-b border-gray-300 py-2">
              <div className="flex justify-center items-center gap-2">
                <MdOutlineHelpOutline className="w-4 h-4" />
                <span>Help Center</span>
              </div>
              <MdChevronRight className="w-5 h-5" />
            </div>
            <button
              className="text-red-500 flex justify-center items-center gap-2"
              onClick={handleSignout}
            >
              <GoSignOut className="w-4 h-4" />
              <span>Sign out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
