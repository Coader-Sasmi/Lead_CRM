// components/Navbar.tsx
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="font-exo2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="./Main_Logo.png" alt="main_logo" className='w-40 h-auto' />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="relative group">
                            <button className="text-gray-700 hover:text-cyan-600 transition flex items-center space-x-1">
                                <span className='font-semibold'>Product</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        <div className="relative group">
                            <button className="text-gray-700 hover:text-cyan-600 transition flex items-center space-x-1">
                                <span className='font-semibold'>Pricing</span>
                            </button>
                        </div>

                        <div className="relative group">
                            <button className="text-gray-700 hover:text-cyan-600 transition flex items-center space-x-1">
                                <span className='font-semibold'>Resources</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        <div className="relative group">
                            <button className="text-gray-700 hover:text-cyan-600 transition flex items-center space-x-1">
                                <span className='font-semibold'>Company</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-5 py-2 bg-[#32b6d4] text-white rounded-lg hover:bg-cyan-600 transition font-medium text-sm">
                            Get Your Free Account
                        </button>
                        <button className="px-5 py-2 border border-[#32b6d4] text-[#32b6d4] rounded-lg hover:bg-gray-50 transition font-medium text-sm flex items-center gap-2">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#32b6d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-log-in-icon lucide-log-in"><path d="m10 17 5-5-5-5" /><path d="M15 12H3" /><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /></svg></span>
                            Login
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2"
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

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 space-y-3">
                        <a href="#features" className="block text-gray-700 hover:text-cyan-600 transition">Features</a>
                        <a href="#pricing" className="block text-gray-700 hover:text-cyan-600 transition">Pricing</a>
                        <a href="#resources" className="block text-gray-700 hover:text-cyan-600 transition">Resources</a>
                        <a href="#company" className="block text-gray-700 hover:text-cyan-600 transition">Company</a>
                        <div className="pt-4 space-y-2">
                            <button className="w-full px-5 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition font-medium text-sm">
                                Try LeadCRM-IO
                            </button>
                            <button className="w-full px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium text-sm">
                                Login
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;