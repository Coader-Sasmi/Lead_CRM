// components/Challenges.tsx


const Challenges = () => {
    return (
        <section className="py-10 md:py-20 font-exo2 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#090F4E] mb-4">
                        Every LinkedIn Prospector faces these daily challenges
                    </h2>
                </div>

                <div className="flex lg:flex-row flex-col gap-8 items-center">
                    {/* Left Card - Without LeadCRM */}
                    <div className="lg:w-[45%] w-full bg-[#FFF7F8] lg:p-8 p-2 rounded-xl ">
                        <img src="/left.png" alt="Without LeadCRM" className="w-full mb-6" />
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-[#D24B68]">Without LeadCRM</h3>
                        </div>

                        <div className="flex flex-col gap-4">
                            {leftArray.map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="mt-1">
                                        <img src="/chalenge1.png" alt="check" className="w-6 h-6" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-wrap items-center md:gap-3 gap-1">
                                            <h3 className="font-semibold text-sm md:text-lg text-gray-900">
                                                {item.title}
                                            </h3>

                                            <span className="text-xs bg-[#FFDCD4] text-[#FF4C51] px-3 py-1 rounded-full">
                                                {item.badge}
                                            </span>
                                        </div>

                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* VS Divider */}
                    <div className="hidden lg:flex flex-col gap-6 items-center">
                        <div className="h-60 w-[0.1rem] bg-gray-300"></div>
                        <div className="text-gray-500 font-bold text-xl">VS</div>
                        <div className="h-60 w-[0.1rem] bg-gray-300"></div>
                    </div>

                    {/* Right Card - With LeadCRM */}
                    <div className="lg:w-[45%] w-full bg-white rounded-xl lg:p-8 p-2 shadow-sm">
                        <img src="/right.png" alt="With LeadCRM" className="w-full mb-6" />
                        <div className="flex items-center gap-4 mb-6">
                            <h3 className="text-2xl font-bold text-[#097737]">With LeadCRM</h3>
                            <img src="/Leadcrm.png" alt="leadcrm" className="w-8 h-8" />
                            <div className="text-[#097737]">4+ Hours/day Saved</div>
                        </div>


                        <div className="flex flex-col gap-4">
                            {rightArray.map((item, index) => (
                                <div key={index} className="flex gap-4">

                                    {/* icon */}
                                    <div className="min-w-[44px] h-[44px] flex items-center justify-center">
                                        <img
                                            src={item.icon}
                                            alt="feature-icon"
                                            className="object-contain w-10 h-auto"
                                        />
                                    </div>

                                    {/* text */}
                                    <div className="space-y-1">
                                        <h3 className="font-semibold text-[20px] text-[#101010] leading-tight">
                                            {item.title}
                                        </h3>

                                        <p className="text-[16px] text-gray-500 leading-[22px]">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="relative text-center mt-16">
                    <button className="px-10 py-4 bg-[#B3FC6A] text-black rounded-lg hover:shadow-xl transition font-semibold text-lg">
                        Start Using LeadCRM Now
                    </button>
                    <div className="hidden lg:block absolute -top-11 right-[19%]">
                        <img src="/btn1.png" alt="bottom-cta" className="w-60 h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenges;

const leftArray = [
    {
        title: "Manual Data Entry",
        badge: "3+ Hours wasted daily",
        description:
            "Copying LinkedIn contacts to CRM manually plus losing conversation history",
    },
    {
        title: "Incomplete Data",
        badge: "60% Data Incomplete",
        description:
            "LinkedIn profiles missing Email and Phones from 700M+ Database",
    },
    {
        title: "No CRM Visibility",
        badge: "Zero context available",
        description:
            "Can’t see existing CRM contacts when browsing LinkedIn profiles",
    },
    {
        title: "Limited Productivity",
        badge: "No smart assistance",
        description:
            "Writing messages manually plus no AI assistant for reply, Invite or comments.",
    },
];

const rightArray = [
    {
        icon: "/chalenge2.png",
        title: "Complete Bi-Directional Sync",
        desc: "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.",
    },
    {
        icon: "/chalenge3.png",
        title: "700M+ Contacts + Enrichment",
        desc: "Get verified emails and phone numbers from a vast global database.",
    },
    {
        icon: "/chalenge4.png",
        title: "CRM Overlay on LinkedIn",
        desc: "See full CRM insights directly on LinkedIn profiles without switching tabs.",
    },
    {
        icon: "/chalenge5.png",
        title: "AI Response + Templates + Bulk Exports",
        desc: "Save time with AI-crafted replies, pre-built templates, and one-click data exports.",
    },
];
