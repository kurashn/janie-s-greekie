'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function StickyCTA() {
    const { t } = useLanguage();

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-4 pb-8 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="flex space-x-4">
                <a
                    href="https://r.grab.com/g/6-20251222_130209_76BD91ACB5604BB2BFD1FC23C22FEF7F_MEXMPS-3-C7JZEBBCCKCVUA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                >
                    <button className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-xl shadow-sm hover:bg-green-600 transition-colors">
                        {t.cta.grab}
                    </button>
                </a>
                <a
                    href="https://lin.ee/0iurdIC?openExternalBrowser=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                >
                    <button className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-sm hover:bg-green-700 transition-colors">
                        {t.cta.lineman}
                    </button>
                </a>
            </div>
        </div>
    );
}
