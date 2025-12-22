'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-rose-50 text-rose-900 py-8 pb-32 md:pb-8">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-4 text-[#ff9eb5]">janie's greekie</h2>
                <p className="text-gray-600 text-sm">{t.footer.copyright}</p>
            </div>
        </footer>
    );
}
