// components/Hero.tsx

const Hero = () => {
    return (
        <section className="font-exo2 relative bg-white pt-12 pb-20 overflow-hidden" style={{ backgroundImage: "url('/hero_bg.png')" }}>
            {/* Background decorative circles */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-100 rounded-full opacity-30 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Trust Badge */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center space-x-2 bg-white border border-[#32b6d4] px-3 lg:px-5 py-2 rounded-full text-sm">
                        <span className="text-gray-600">🚀 Thousands of Professional using LeadCRM</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="text-center max-w-6xl mx-auto mb-12">
                    <h1 className="text-3xl md:text-6xl font-medium text-gray-900 mb-6 leading-tight">
                        LinkedIn CRM Integration
                    </h1>
                    <h2 className="text-3xl md:text-6xl font-medium mb-8 leading-tight">
                        Capture, Sync and Enrich in{' '}
                        <span className="text-[#32b6d4]">
                            Both Ways
                        </span>
                    </h2>

                    <p className=" mb-10 max-w-2xl text-sm mx-auto leading-relaxed">
                        Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.
                    </p>

                    {/* Integration Icons */}
                    <div className="flex justify-center items-center">
                        <div className="bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl flex items-center justify-center space-x-3 mb-8 p-4">
                            <p className="text-lg">Works with</p>
                            <img src="./hero1.png" alt="Integrations_Icons" className="w-12 h-auto" />
                            <img src="./hero2.png" alt="Integrations_Icons" className="w-12 h-auto" />
                            <img src="./hero3.png" alt="Integrations_Icons" className="w-12 h-auto" />
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex flex-col sm:flex-row justify-center items-center mb-5">
                        <img src="./hero4.png" alt="Capterra_Logo" className="lg:w-[25%] h-auto" />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex justify-center items-center lg:gap-4 gap-2">
                        <img src="./chrome.png" alt="CTA_Buttons" className="lg:w-[20%] w-[40%] h-auto" />
                        <img src="./chrome1.png" alt="CTA_Buttons" className="lg:w-[20%] w-[40%] h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;