import React from "react";
import { Check } from "lucide-react";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      description: "Perfect for getting started",
      features: [
        "1,000 API calls per month",
        "Basic data access",
        "Email support",
        "API documentation",
      ],
    },
    {
      name: "Pro",
      price: "$29",
      description: "For growing businesses",
      features: [
        "10,000 API calls per month",
        "Advanced data access",
        "Priority support",
        "Custom integrations",
        "Team collaboration",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited API calls",
        "Full data access",
        "Dedicated support",
        "Custom solutions",
        "SLA guarantee",
        "Advanced analytics",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            style={{ fontFamily: "Roboto-Bold" }}
          >
            Simple, transparent pricing
          </h2>
          <p
            className="mt-4 text-xl text-gray-600"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="ml-1 text-xl text-gray-500">/mo</span>
                  )}
                </div>
                <p className="mt-5 text-lg text-gray-500">{plan.description}</p>
                <div className="pt-6 pb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                        <span className="ml-3 text-base text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="my-3 flex justify-center items-center">
                <button className="w-[90%] bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition-colors">
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
