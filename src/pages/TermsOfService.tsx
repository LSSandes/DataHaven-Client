import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-3xl font-extrabold text-gray-900 mb-8"
          style={{ fontFamily: "Roboto-Bold" }}
        >
          Terms and Conditions of Use
        </h1>

        <div className="prose prose-blue max-w-none">
          <section
            className="mb-8 space-y-2 border-b border-gray-300 pb-6"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            <div className="flex flex-col justify-start items-start text-gray-600">
              <span className="" style={{ fontFamily: "Roboto-Bold" }}>
                Effective Date:{" "}
              </span>
              <span className="" style={{ fontFamily: "Roboto-Bold" }}>
                Last Updated:{" "}
              </span>
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

          <section
            className="mb-8 border-b border-gray-300 pb-6"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            <h2
              className="text-2xl  text-gray-900 mb-4 "
              style={{ fontFamily: "Roboto-Bold" }}
            >
              1. Platform Overview
            </h2>
            <p className="text-gray-600 mb-4">
              DataHaven is a web-based platform that aggregates publicly
              available datasets and allows users to generate summaries,
              visualizations, and reports from that data.
            </p>
          </section>

          <section
            className="mb-8 border-b border-gray-300 pb-6"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            <h2
              className="text-2xl  text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              2. User Accounts and Access
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Users must create an account to access the platform.</li>
              <li>
                We offer both free and paid subscription plans. Free accounts
                have daily usage limits. Paid subscribers gain access to
                additional features and premium datasets.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
            </ul>
          </section>

          <section
            className="mb-8 border-b border-gray-300 pb-6"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            <h2
              className="text-2xl  text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              3. Data Ownership and Usage
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>
                All data on DataHaven is aggregated from publicly available
                source
              </li>
              <li>
                We do{" "}
                <span className="" style={{ fontFamily: "Roboto-Bold" }}>
                  not own, create, or host
                </span>{" "}
                the original data.
              </li>
              <li>
                Users may not claim any ownership over the data accessed via the
                platform.
              </li>
              <li>
                You may use data and visualizations generated for personal or
                professional purposes, but{" "}
                <span className="" style={{ fontFamily: "Roboto-Bold" }}>
                  you are solely responsible
                </span>{" "}
                for how you use the information.
              </li>
            </ul>
          </section>

          <section
            className="mb-8 border-b border-gray-300 pb-6"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            <h2
              className="text-2xl  text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              4. Prohibited Activities
            </h2>
            <p className="text-gray-600 mb-4">
              You agree{" "}
              <span className="" style={{ fontFamily: "Roboto-Bold" }}>
                not to
              </span>
              :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>
                Scrape, crawl, or otherwise extract data using automated methods
                or bots.
              </li>
              <li>
                Attempt to overload, disrupt, or harm the platform's
                infrastructure.
              </li>
              <li>
                Use the platform for any illegal, unethical, or harmful purpose.
              </li>
              <li>Circumvent usage limits or authentication systems.</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We reserve the right to{" "}
              <span className="" style={{ fontFamily: "Roboto-Bold" }}>
                suspend or terminate
              </span>{" "}
              any account that violates these rules or engages in suspicious
              activity.
            </p>
          </section>

          <section
            className="mb-8 border-b border-gray-300 pb-6"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            <h2
              className="text-2xl  text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              5. Third-Party Services
            </h2>
            <p className="text-gray-600 mb-4">
              We integrate services provided by third parties including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>
                <span className="" style={{ fontFamily: "Roboto-Bold" }}>
                  OpenAI
                </span>{" "}
                for AI-generated summaries and visualizations,
              </li>
              <li>
                <span className="" style={{ fontFamily: "Roboto-Bold" }}>
                  Stripe
                </span>{" "}
                for payment processing, and
              </li>
              <li>
                <span className="" style={{ fontFamily: "Roboto-Bold" }}>
                  Google Analytics
                </span>{" "}
                for usage analytics.
              </li>
            </ul>
            <p className="text-gray-600 mb-4">
              Your use of DataHaven may be subject to the terms and privacy
              policies of these third-party providers.
            </p>
          </section>

          <section
            className="mb-8 border-b border-gray-300 pb-6"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            <h2
              className="text-2xl  text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              6. Disclaimers and Limitations of Liability
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>
                <span className="" style={{ fontFamily: "Roboto-Bold" }}>
                  No Guarantee of Accuracy:
                </span>{" "}
                DataHaven does not verify or guarantee the accuracy,
                completeness, or timeliness of any data provided.
              </li>
              <li>
                <span className="" style={{ fontFamily: "Roboto-Bold" }}>
                  Use at Your Own Risk:
                </span>{" "}
                All outputs (summaries, visualizations, etc.) are for
                informational purposes only. Any actions you take based on this
                information are strictly at your own risk.
              </li>
              <li>
                <span className="" style={{ fontFamily: "Roboto-Bold" }}>
                  No Liability:
                </span>{" "}
                We are not liable for any damages or losses resulting from use
                of the platform, including but not limited to business
                decisions, financial loss, or legal consequences.
              </li>
            </ul>
          </section>

          <section
            className="mb-8 border-b border-gray-300 pb-6"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            <h2
              className="text-2xl  text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              7. Termination
            </h2>
            <p className="text-gray-600 mb-4">
              We may suspend or terminate your account at any time, without
              notice, if we believe you are violating these Terms or engaging in
              harmful activities.
            </p>
          </section>
          <section
            className="mb-8 border-b border-gray-300 pb-6"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            <h2
              className="text-2xl  text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              8. Governing Law
            </h2>
            <p className="text-gray-600 mb-4">
              These Terms are governed by the laws of the State of Delaware,
              USA, and any disputes shall be resolved exclusively in its courts.
            </p>
          </section>
          <section
            className="mb-8 border-b border-gray-300 pb-6"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            <h2
              className="text-2xl  text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              9. Changes to Terms
            </h2>
            <p className="text-gray-600 mb-4">
              We may update these Terms from time to time. Material changes will
              be communicated to users, and continued use of the platform after
              changes implies agreement.
            </p>
          </section>
          <section className="mb-8" style={{ fontFamily: "Roboto-Regular" }}>
            <h2
              className="text-2xl  text-gray-900 mb-4"
              style={{ fontFamily: "Roboto-Bold" }}
            >
              10. Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have questions about these Terms, please contact us at: 📧{" "}
              <span className="" style={{ fontFamily: "Roboto-Bold" }}>
                contact@datahaven.tech
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
