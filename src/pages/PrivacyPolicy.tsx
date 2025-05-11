import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-3xl font-extrabold text-gray-900 mb-8"
          style={{ fontFamily: "Roboto-Bold" }}
        >
          Privacy Policy
        </h1>

        <div className="prose prose-blue max-w-none">
          <section className="mb-8 space-y-2 border-b border-gray-300 pb-6">
            <div className="flex flex-col justify-start items-start text-gray-600">
              <span className="font-bold">Effective Date: </span>
              <span className="font-bold">Last Updated: </span>
            </div>
            <p
              className="text-gray-600 mb-4"
              style={{ fontFamily: "Roboto-Regular" }}
            >
              This Privacy Policy explains how{" "}
              <span style={{ fontFamily: "Roboto-Bold" }}>
                Harvest Media LLC
              </span>{" "}
              (“we”, “us”, “our”) collects, uses, and protects your personal
              information when you use{" "}
              <span style={{ fontFamily: "Roboto-Bold" }}>DataHaven</span> (
              <a
                href="https://datahaven.tech"
                target="_blank"
                rel="noopener noreferrer"
                className=" underline text-blue-500"
              >
                https://datahaven.tech
              </a>
              ), our web-based data aggregation and visualization platform.
              <br />
              <br />
              By using DataHaven, you agree to the practices described in this
              Privacy Policy.
            </p>
          </section>

          <section className="mb-8 border-b border-gray-300 pb-6">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              1. Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect the following types of information:
            </p>
            <p className="text-gray-600 mb-4 font-bold">
              a. Information You Provide
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>
                <span className="font-bold">Account information:</span> Name,
                email address, password, and billing details (If you are paid
                user).
              </li>
              <li>
                <span className="font-bold">Communication:</span> Messages or
                inquiries sent to our support team
              </li>
            </ul>
            <p className="text-gray-600 mb-4 font-bold">
              b. Automatically Collected Information
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>
                <span className="font-bold">User Data:</span> Pages visited,
                actions performed, timestamps, and session duration.
              </li>
              <li>
                <span className="font-bold">Device Data:</span> Browser type,
                operating system, IP address, and screen resolution.
              </li>
              <li>
                <span className="font-bold">Analytics Data:</span>
                Collected via{" "}
                <span className="font-bold">Google Analytics</span> for site
                optimization and traffic insights.
              </li>
            </ul>
          </section>

          <section className="mb-8 border-b border-gray-300 pb-6">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">We use your data to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Provide and maintain the platform</li>
              <li>
                Manage user accounts and process payments (via{" "}
                <span className="font-bold">Stripe</span>)
              </li>
              <li>Improve the service experience</li>
              <li>Monitor for abuse or suspicious activity</li>
              <li>Communicate updates, support, or service notices</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We <span className="font-bold">do not sell</span> or rent your
              personal information to third parties.
            </p>
          </section>

          <section className="mb-8 border-b border-gray-300 pb-6">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              3. Third-Party Services
            </h2>
            <p className="text-gray-600 mb-4">
              We use third-party providers to operate parts of our platform:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>
                <span className="font-bold">OpenAI</span> - for AI-generated
                content (data summaries and visualizations)
              </li>
              <li>
                <span className="font-bold">Strip</span> - for secure payment
                processing
              </li>
              <li>
                <span className="font-bold">Google Analytics</span> - for
                traffic and performance analysis
              </li>
            </ul>
            <p className="text-gray-600 mb-4">
              These providers may collect or process your data according to
              their own privacy policies.
            </p>
          </section>

          <section className="mb-8 border-b border-gray-300 pb-6">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              4. Data Storage and Security
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>
                Your information is stored on secure servers with encryption and
                access controls.
              </li>
              <li>
                We implement technical and organizational measures to protect
                your data.
              </li>
              <li>
                While we strive to use commercially acceptable means to protect
                your personal data, we cannot guarantee absolute security.
              </li>
            </ul>
          </section>

          <section className="mb-8 border-b border-gray-300 pb-6">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              5. Your rights
            </h2>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Access or correct your personal data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict certain data processing activities</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p className="text-gray-600 mb-4">
              To make such a request, email us at{" "}
              <span className="font-bold">contact@datahaven.tech</span>.
            </p>
          </section>
          <section className="mb-8 border-b border-gray-300 pb-6">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              6. Data Retention
            </h2>
            <p className="text-gray-600 mb-4">
              We retain personal data as long as your account is active or as
              necessary to provide services. Data may be retained longer to
              comply with legal obligations or resolve disputes.
            </p>
          </section>
          <section className="mb-8 border-b border-gray-300 pb-6">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              7. Children's Privacy
            </h2>
            <p className="text-gray-600 mb-4">
              DataHaven is not intended for use by individuals under the age of
              13. We do not knowingly collect personal data from children.
            </p>
          </section>
          <section className="mb-8 border-b border-gray-300 pb-6">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              8. International Users
            </h2>
            <p className="text-gray-600 mb-4">
              If you access the platform from outside the United States, be
              aware that your data may be transferred to and stored in the U.S.
              By using the platform, you consent to this transfer.
            </p>
          </section>
          <section className="mb-8 border-b border-gray-300 pb-6">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              9. Policy Updates
            </h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy periodically. We will notify
              users of significant changes via email or through the platform.
            </p>
          </section>
          <section className="mb-8 ">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              10. Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions or concerns about this Privacy Policy,
              reach us at: 📧
              <span className=" underline font-bold">
                contact@datahaven.tech
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
