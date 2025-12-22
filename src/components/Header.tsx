'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: t.nav.about, href: '#about' },
        { label: t.nav.menu, href: '#menu' },
        { label: t.nav.access, href: '#reviews' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-tight transition-colors text-[#ff9eb5]">
                    janie's greekie
                </h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`font-medium transition-colors ${isScrolled
                                ? 'text-gray-700 hover:text-rose-600'
                                : 'text-white/90 hover:text-white hover:drop-shadow-md'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Language Switcher */}
                    <div className={`flex items-center rounded-full p-1 transition-colors ${isScrolled ? 'bg-gray-100' : 'bg-white/20 backdrop-blur-sm'}`}>
                        {(['jp', 'en', 'th'] as const).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setLanguage(lang)}
                                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === lang
                                    ? 'bg-white text-rose-600 shadow-sm'
                                    : isScrolled ? 'text-gray-500 hover:text-gray-700' : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                {lang.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    {/* Language Switcher for Mobile (Simplified) */}
                    <button
                        onClick={() => setLanguage(language === 'jp' ? 'en' : language === 'en' ? 'th' : 'jp')}
                        className={`text-sm font-bold px-2 py-1 rounded transition-colors ${isScrolled
                            ? 'text-rose-600 bg-rose-50'
                            : 'text-white bg-white/20'
                            }`}
                    >
                        {language.toUpperCase()}
                    </button>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`focus:outline-none transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col space-y-4 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-800 text-lg font-medium py-2 border-b border-gray-50 last:border-0"
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Language Switcher in Mobile Menu */}
                        <div className="flex items-center justify-center bg-gray-100 rounded-full p-1 mt-4">
                            {(['jp', 'en', 'th'] as const).map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setLanguage(lang)}
                                    className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${language === lang
                                        ? 'bg-white text-rose-600 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    {lang.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
