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
        <section className="py-20 font-exo2 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#090F4E] mb-4">
                        Complete LinkedIn Sales Solutions
                    </h2>
                    <p className="text-xl text-gray-600">
                        Everything you need for professional LinkedIn prospecting
                    </p>
                </div>

                {/* Tabs */}
                <div className="w-full flex flex-col">
                    <div className="flex justify-between w-full px-10 pt-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="flex flex-col items-center gap-2 group"
                            >
                                <div className="flex items-center gap-2">
                                    {tab.icon}
                                    <span className="text-[#00205C] font-medium text-base">
                                        {tab.label}
                                    </span>
                                </div>

                                <div
                                    className={`h-[4px] w-44 rounded-full transition-all duration-300 
                                        ${activeTab === tab.id
                                            ? "bg-[#001242]"
                                            : "bg-transparent group-hover:bg-[#d6dcec]"
                                        }`}
                                ></div>
                            </button>
                        ))}
                    </div>

                    <div className="w-full border-b border-gray-300 mt-4"></div>
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100">
                    <h2 className="text-[#4D4D4D] text-xl">It’s hard to find the accurate contact data for every prospects by <span className="text-[#FF4C51] rounded-full py-2 px-4 bg-[#FFDCD4] text-base">Incomplete Data</span> </h2>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pt-10">
                        <img src="/solution-left.png" alt="solutions" className="w-full" />
                        <img src="/solution-right.png" alt="solutions" className="w-full" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Solutions;
