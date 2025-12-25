// components/Sponsors.tsx

const Sponsors = () => {
    return (
        <section className="pb-16 md:pb-20 font-exo2 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="relative text-center mb-10 md:mb-12">
                    <img
                        src="/supported.png"
                        alt="Logo"
                        className="hidden lg:block absolute right-[28%] -top-20 w-20 h-20"
                    />

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#090F4E] mb-4 md:mb-6">
                        Our Supported LeadCRM
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        LeadCRM provides Native Integrations with popular CRM tools to make
                        the most out of your LinkedIn prospecting.
                    </p>
                </div>

                {/* Images – ALWAYS ROW */}
                <div className="flex flex-row flex-nowrap items-center justify-center gap-3 sm:gap-6 mb-12 overflow-hidden">

                    {/* Left Image */}
                    <img
                        src="/supported-left.png"
                        alt="Hubspot"
                        className="w-[70%] sm:w-[75%] md:w-[80%] h-auto object-contain"
                    />

                    {/* Right Image */}
                    <img
                        src="/supported-right.png"
                        alt="Salesforce"
                        className="w-[18%] sm:w-[14%] md:w-[12%] max-w-[120px] h-auto object-contain"
                    />
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-10 md:mt-16">
                    <button className="px-6 sm:px-10 py-3 sm:py-4 bg-[#B3FC6A] rounded-lg font-semibold text-base sm:text-lg hover:shadow-xl transition">
                        Lets Integrate your CRM Now!
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Sponsors;
