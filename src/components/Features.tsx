"use client";

const Features = () => {
    const logos = [
        { name: "Access to 700M+ Contacts", logo: "/feature1.png" },
        { name: "One click push to CRM", logo: "/feature2.png" },
        { name: "Custom Field Mapping", logo: "/feature3.png" },
        { name: "Advanced Waterfall Enrichment", logo: "/feature4.png" },
    ];

    const loopLogos = [...logos, ...logos, ...logos]; // important: 3x helps seamless loop

    return (
        <section className="py-10 font-exo2 bg-gray-50 overflow-hidden">
            <div className="whitespace-nowrap">
                <div className="flex items-center animate-marquee">
                    {loopLogos.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-12 py-2"
                        >
                            <img src={item.logo} alt={item.name} className="w-10 h-auto" />

                            <p className="text-gray-800 font-medium whitespace-nowrap">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
