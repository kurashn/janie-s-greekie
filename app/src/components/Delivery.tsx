'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Delivery() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.delivery.title}</h2>
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                        {t.delivery.text}
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
                        <a
                            href="https://r.grab.com/g/6-20251222_130209_76BD91ACB5604BB2BFD1FC23C22FEF7F_MEXMPS-3-C7JZEBBCCKCVUA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#00B14F] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-[#009e47] transition-all transform hover:-translate-y-1 text-center flex items-center justify-center gap-2"
                        >
                            {/* Grab Logo Placeholder or Text */}
                            <span>GrabFood</span>
                        </a>
                        <a
                            href="https://lin.ee/0iurdIC?openExternalBrowser=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#06C755] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-[#05b34c] transition-all transform hover:-translate-y-1 text-center flex items-center justify-center gap-2"
                        >
                            {/* LINE MAN Logo Placeholder or Text */}
                            <span>LINE MAN</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
