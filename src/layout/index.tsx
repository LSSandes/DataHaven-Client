import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // Corrected import
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSetAtom } from "jotai";
import { userAtom } from "../store/atoms";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const setUser = useSetAtom(userAtom);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    token && setUser(jwtDecode(token));
  }, []);
  return (
    <div className="flex flex-col w-full h-auto">
      <Header toggleMobileSidebar={toggleSidebar} />
      <Outlet />
      <Footer />
    </div>
  );
}
