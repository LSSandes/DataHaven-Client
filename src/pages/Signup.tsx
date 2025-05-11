import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.webp";
import GoogleLogo from "../assets/google_logo.svg";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { env } from "../config/env";
import { toast } from "react-toastify";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    if (password == confirmPassword) {
      try {
        await axios
          .post(`${env.BASE_URL}/auth/register`, {
            email: email,
            password: password,
          })
          .then((res) => {
            if (res.data.token) {
              window.location.href = "/login";
            }
          });
      } catch (error: any) {
        toast.warn(error.response.data.message);
      }
    } else {
      toast.warn("Password doesn't match!");
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await axios.post(`${env.BASE_URL}/auth/google`, {
          access_token: tokenResponse.access_token,
        });
        console.log("Backend Response:", response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } catch (error: any) {
        toast.warn(error.response.data.message);
      }
    },
    onError: () => {
      console.error("Google login failed");
      toast.warn("Google login failed!");
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="w-full flex justify-center">
        <img src={Logo} alt="" width={50} height="auto" />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          className="mt-6 text-center text-3xl font-extrabold text-gray-900"
          style={{ fontFamily: "Roboto-Bold" }}
        >
          Create an account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleSignup}
              >
                Create account
              </button>
            </div>
            <div
              className="flex items-center justify-center gap-4"
              style={{ fontFamily: "Roboto-Regular" }}
            >
              <div className="text-sm">
                <span>Already have an account?</span>
              </div>
              <span>
                <Link to="/login" className="text-sm text-blue-500">
                  Log in
                </Link>
              </span>
            </div>
            <div className="w-full flex justify-center items-center gap-2">
              <div className="w-[45%] border-t border-gray-300 mt-2"></div>
              <p className="mt-2 text-center text-sm text-gray-600 ">Or </p>
              <div className="w-[45%] border-t border-gray-300 mt-2"></div>
            </div>
            <button
              type="submit"
              className="flex justify-center items-center border border-[#D9D9D9] w-full font-bold bg-white text-[#2E3339] p-2 rounded-[20px] hover:bg-[#DDDDDD] h-9 text-sm gap-2"
              onClick={() => handleGoogleLogin()}
            >
              <img src={GoogleLogo} alt="" width={20} height="auto" />
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
