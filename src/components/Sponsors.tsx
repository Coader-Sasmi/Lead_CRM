// components/Sponsors.tsx

const Sponsors = () => {

    return (
        <section className="pb-20 font-exo2 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative text-center mb-12">
                    <img src="/supported.png" alt="Logo" className="absolute right-[28%] lg:block hidden -top-20 w-20 h-20 mx-auto mb-4" />
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#090F4E] mb-6">
                        Our Supported LeadCRM
                    </h2>
                    <p className="text-xl text-gray-600">
                        LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We don’t want you to miss any revenue opportunity on the internet!
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 mb-12 items-center">
                    <img
                        src="/supported-left.png"
                        alt="Hubspot"
                        className="w-full md:w-[80%] h-auto object-contain flex-shrink-0"
                    />
                    <img
                        src="/supported-right.png"
                        alt="Salesforce"
                        className="w-full md:w-[12%] max-w-[120px] h-auto object-contain flex-shrink-0"
                    />
                </div>



                <div className="w-full flex items-center justify-center mt-16">
                    <button className="px-10 py-4 flex items-center gap-2 bg-[#B3FC6A] text-black rounded-lg hover:shadow-xl transition font-semibold text-lg">
                        Lets Integrate your CRM Now!
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;