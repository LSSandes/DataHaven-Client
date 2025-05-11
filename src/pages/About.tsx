import React from "react";
import LogoAbout from "../assets/logo_footer.webp";

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center items-center gap-3">
            <img src={LogoAbout} alt="" width={35}/>
            <h2
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              About DataHaven
            </h2>
          </div>
          <p
            className="mt-4 text-xl text-gray-600"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            AI-powered Data Visualization Platform
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3
                className="text-2xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "Roboto-Bold" }}
              >
                Our Mission
              </h3>
              <p className="text-lg text-gray-600">
                We're on a mission to make AI technology accessible to everyone.
                Our platform provides intuitive tools for engaging with advanced
                AI models, helping users unlock new possibilities in their work
                and daily lives.
              </p>
            </div>
            <div>
              <h3
                className="text-2xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "Roboto-Bold" }}
              >
                Our Vision
              </h3>
              <p className="text-lg text-gray-600">
                We envision a future where AI assists and enhances human
                capabilities, fostering innovation and creativity across all
                sectors. Our goal is to be at the forefront of this
                transformation.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              Our Values
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Innovation
                </h4>
                <p className="text-gray-600">
                  We constantly push boundaries to create cutting-edge AI
                  solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Transparency
                </h4>
                <p className="text-gray-600">
                  We believe in being open about our technology and its
                  capabilities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  User Privacy
                </h4>
                <p className="text-gray-600">
                  We prioritize the security and privacy of our users' data.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              Our Team
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              We're a diverse team of engineers, researchers, and designers
              passionate about making AI technology more accessible and useful
              for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
