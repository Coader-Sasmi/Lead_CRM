// components/Solutions.tsx
"use client";

import { Cpu, Database, RefreshCcw, Rocket } from "lucide-react";
import { useState } from "react";

const Solutions = () => {
    const [activeTab, setActiveTab] = useState<number>(1);

    const tabs = [
        {
            id: 1,
            label: "CRM Data Enrichment",
            icon: <Database className="size-5 text-[#00205C]" />,
        },
        {
            id: 2,
            label: "CRM Data Sync",
            icon: <RefreshCcw className="size-5 text-[#00205C]" />,
        },
        {
            id: 3,
            label: "Bulk Export & Enrichment",
            icon: <Rocket className="size-5 text-[#00205C]" />,
        },
        {
            id: 4,
            label: "AI Productivity",
            icon: <Cpu className="size-5 text-[#00205C]" />,
        },
    ];

    return (
        <section className="py-14 md:py-20 font-exo2 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#090F4E] mb-3">
                        Complete LinkedIn Sales Solutions
                    </h2>
                    <p className="text-base md:text-xl text-gray-600">
                        Everything you need for professional LinkedIn prospecting
                    </p>
                </div>

                {/* Tabs */}
                <div className="w-full">
                    {/* Mobile Scroll */}
                    <div className="flex gap-6 overflow-x-auto scrollbar-hide px-1 md:px-10 pt-4 md:pt-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="flex-shrink-0 flex flex-col items-center gap-2 group"
                            >
                                <div className="flex items-center gap-2 whitespace-nowrap">
                                    {tab.icon}
                                    <span className="text-[#00205C] font-medium text-sm md:text-base">
                                        {tab.label}
                                    </span>
                                </div>

                                <div
                                    className={`h-[3px] md:h-[4px] rounded-full transition-all duration-300 
                    ${activeTab === tab.id
                                            ? "bg-[#001242] w-20 md:w-44"
                                            : "bg-transparent w-20 md:w-44 group-hover:bg-[#d6dcec]"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>

                    <div className="w-full border-b border-gray-300 mt-4" />
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-12 mt-10 mb-14 border border-gray-100">
                    <h2 className="text-[#4D4D4D] text-base md:text-xl leading-relaxed">
                        It’s hard to find accurate contact data for every prospect due to{" "}
                        <span className="inline-block mt-2 md:mt-0 text-[#FF4C51] rounded-full py-1 px-3 bg-[#FFDCD4] text-sm md:text-base">
                            Incomplete Data
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 pt-8 md:pt-10">
                        <img
                            src="/solution-left.png"
                            alt="solutions"
                            className="w-full h-auto object-contain"
                        />
                        <img
                            src="/solution-right.png"
                            alt="solutions"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
