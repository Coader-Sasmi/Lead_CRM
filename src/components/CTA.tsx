// components/CTA.tsx

import { MoveRight } from "lucide-react";

const CTA = () => {

    return (
        <section className="py-20 font-exo2 bg-[#EAEFFA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-start mb-16">
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#090F4E] mb-4">
                        Join Thousands of Professionals Using LeadCRM
                    </h2>
                </div>
                <img src="/cta.png" alt="CTA" className="w-full h-auto object-contain" />

                {/* Bottom CTA */}
                <div className="w-full flex items-center justify-center mt-16">
                    <button className="px-10 py-4 flex items-center gap-2 bg-[#B3FC6A] text-black rounded-lg hover:shadow-xl transition font-semibold text-lg">
                        Get Started Today <MoveRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;