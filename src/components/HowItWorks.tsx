// components/HowItWorks.tsx

import { MoveRight } from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            number: "1",
            title: "Install the Extension",
            description: "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
            image: "/works2.png"
        },
        {
            number: "2",
            title: "Browse LinkedIn",
            description: "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
            image: "/works3.png"
        },
        {
            number: "3",
            title: "Get Enriched Data",
            description: "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
            image: "/works4.png"
        },
        {
            number: "4",
            title: "Sync to CRM Instantly",
            description: "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow  ups.",
            image: "/works5.png"
        }
    ];

    return (
        <section className="py-20 font-exo2 bg-[#EAEFFA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-start mb-16">
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#090F4E] mb-4">
                        How It Works
                    </h2>
                    <p className=" text-gray-600">From setup to success in <span className="font-semibold"> 4 simple steps</span></p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector Line - Desktop Only */}
                            {index < steps.length - 1 && (
                                <img src="/works1.png" alt="connector" className="w-hidden lg:block absolute top-10 left-48 w-36 h-auto" />
                            )}

                            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition h-full">
                                {/* Number Badge */}
                                <div className="font-sriracha px-6 py-3 flex items-center justify-center text-[#2D96BC] text-6xl lg:text-8xl font-medium">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-center text-sm leading-relaxed px-3">
                                    {step.description}
                                </p>
                                <div className="text-6xl mb-4 text-center mt-4">
                                    <img src={step.image} alt={step.title} className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="w-full flex items-center justify-center mt-16">
                    <button className="px-10 py-4 flex items-center gap-2 bg-[#B3FC6A] text-black rounded-lg hover:shadow-xl transition font-semibold text-lg">
                        Try LeadCRM Now <MoveRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;