'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-10" />
                <img
                    src="/images/img1.jpg"
                    alt="Delicious Thick Greek Yogurt with Honey"
                    className="w-full h-full object-cover transform scale-105 animate-slow-pan" // Added slight movement feel if possible, or just static scale
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h1 className="text-xl md:text-5xl font-medium text-white mb-8 whitespace-pre-line leading-relaxed tracking-[0.2em] uppercase drop-shadow-sm">
                        {t.hero.headline}
                    </h1>

                    {/* Elegant Separator */}
                    <div className="w-24 h-px bg-white/60 mx-auto mb-8" />

                    <p className="text-base md:text-lg text-white/90 mb-12 whitespace-pre-line max-w-2xl mx-auto font-light leading-loose tracking-wide">
                        {t.hero.subheadline}
                    </p>

                    <a
                        href="https://r.grab.com/g/6-20251222_130209_76BD91ACB5604BB2BFD1FC23C22FEF7F_MEXMPS-3-C7JZEBBCCKCVUA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 backdrop-blur-md border border-white/40 text-white font-medium py-4 px-12 rounded-full hover:bg-white hover:text-rose-500 transition-all duration-300 text-sm tracking-[0.15em] uppercase"
                        >
                            {t.hero.cta}
                        </motion.button>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/50"
            >
                <div className="flex flex-col items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-light">Scroll</span>
                    <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
}
