"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const reviews = [
    {
        name: "David Fincher",
        text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
        rating: 5,
        avatar: "/testimonial1.png",
        platform: "On Capterra",
    },
    {
        name: "Lillian Williams",
        text: "My experience with LeadCRM has been excellent. It streamlined my workflow, improved lead tracking, and made follow-ups efficient.",
        rating: 5,
        avatar: "/testimonial2.png",
        platform: "On Capterra",
    },
    {
        name: "Michael",
        text: "Reliable Data Sync I've only had to refresh the extension a couple of times. Multi-contact enrichment huge plus, and support is responsive.",
        rating: 5,
        avatar: "/testimonial3.png",
        platform: "On Capterra",
    },
    {
        name: "Sarah Walker",
        text: "LeadCRM changed our entire lead approach. Amazing workflow automation and instant customer sync support!",
        rating: 5,
        avatar: "/testimonial1.png",
        platform: "On Capterra",
    },
    {
        name: "Benjamin",
        text: "Great CRM experience. Data sync and follow ups improvements increased conversions rapidly.",
        rating: 5,
        avatar: "/testimonial2.png",
        platform: "On Capterra",
    },
];

export default function Testimonials() {

    // show 3 cards at a time
    const visibleCards = 3;

    const [startIndex, setStartIndex] = useState(0);

    const next = () => {
        setStartIndex((prev) =>
            (prev + 1) % reviews.length
        );
    };

    const prev = () => {
        setStartIndex((prev) =>
            (prev - 1 + reviews.length) % reviews.length
        );
    };

    const slicedItems = Array.from({ length: visibleCards }).map(
        (_, i) => reviews[(startIndex + i) % reviews.length]
    );

    return (
        <section className="font-exo2 bg-white py-20 px-4 relative">
            <img src="/Ball.png" alt="ball" className="absolute top-0 right-0 -translate-y-1/2" />
            <div className="max-w-7xl mx-auto">

                {/* Arrow buttons */}
                <div className="flex justify-between md:flex-row flex-col items-center gap-3 mb-6 pr-8">
                    {/* Heading */}
                    <h2 className="text-[32px] font-[700] md:text-center text-[#100444]">
                        What people are saying about LeadCRM
                    </h2>

                    <div className="flex justify-end gap-3">
                        {/* LEFT */}
                        <button
                            onClick={prev}
                            className="w-10 h-10 rounded-full bg-[#090F4E] group border border-[#090F4E] shadow flex items-center justify-center hover:bg-gray-100"
                        >
                            <ChevronLeft className="text-white group-hover:text-[#090F4E]" size={20} />
                        </button>

                        {/* RIGHT */}
                        <button
                            onClick={next}
                            className="w-10 h-10 rounded-full bg-[#090F4E] border group border-[#090F4E] shadow flex items-center justify-center hover:bg-gray-100"
                        >
                            <ChevronRight className="text-white group-hover:text-[#090F4E]" size={20} />
                        </button>
                    </div>


                </div>

                {/* CARDS */}
                <div className="grid md:grid-cols-3 gap-8">

                    {slicedItems.map((item, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-[#E7E7E7] bg-[#F9F0F8] px-6 py-10 flex flex-col justify-between"
                        >
                            {/* REVIEW TEXT */}
                            <p className="text-[#4A4A4A] leading-[26px] text-[15px] mb-6">
                                “{item.text}”
                            </p>

                            {/* RATING */}
                            <div className="flex items-center gap-1 mb-10">
                                <img src="/playstore.png" alt="star" className="w-7 h-auto" />
                                {[...Array(item.rating)].map((_, index) => (
                                    <Star
                                        key={index}
                                        size={18}
                                        className="text-[#15006B] fill-[#15006B]"
                                    />
                                ))}
                            </div>
                            <div className="w-full h-[0.01rem] bg-gray-300 mb-4"></div>

                            {/* USER */}
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-gray-300 overflow-hidden">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h5 className="font-semibold text-[16px] text-[#100444]">
                                        {item.name}
                                    </h5>
                                    <p className="text-[13px] text-gray-500">
                                        {item.platform}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
