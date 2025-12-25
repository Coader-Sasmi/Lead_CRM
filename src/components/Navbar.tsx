// components/Navbar.tsx
import { LogIn } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="font-exo2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="./Main_Logo.png" alt="main_logo" className="w-40 h-auto" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {["Product", "Pricing", "Resources", "Company"].map((item) => (
                            <button
                                key={item}
                                className="text-gray-700 hover:text-cyan-600 transition font-semibold flex items-center gap-1"
                            >
                                {item}
                                {item !== "Pricing" && (
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="px-5 py-2 w-fit bg-[#32b6d4] text-white rounded-lg hover:bg-cyan-600 transition text-sm font-medium">
                            Get Your Free Account
                        </button>
                        <button className="px-5 py-2 w-fit border flex items-center gap-2 border-[#32b6d4] text-[#32b6d4] rounded-lg hover:bg-gray-50 transition text-sm font-medium">
                            <LogIn size={16} className="text-[#32b6d4]" />Login
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* ✅ MOBILE MENU (ABSOLUTE OVERLAY) */}
            <div
                className={`lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-all duration-300 z-40
        ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
                <div className="px-6 py-6 space-y-4">
                    <a className="block font-medium text-gray-700 hover:text-cyan-600">Product</a>
                    <a className="block font-medium text-gray-700 hover:text-cyan-600">Pricing</a>
                    <a className="block font-medium text-gray-700 hover:text-cyan-600">Resources</a>
                    <a className="block font-medium text-gray-700 hover:text-cyan-600">Company</a>

                    <div className="pt-4 flex flex-col space-y-3">
                        <button className="w-fit px-5 py-2 bg-[#32b6d4] text-white rounded-lg">
                            Get Your Free Account
                        </button>
                        <button className="w-fit px-5 py-2 border border-[#32b6d4] rounded-lg flex items-center gap-2 text-[#32b6d4]">
                            <LogIn size={16} className="text-[#32b6d4]" /> Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
