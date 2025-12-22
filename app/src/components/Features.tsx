'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Droplets, Leaf, Clock } from 'lucide-react';

export default function Features() {
    const { t } = useLanguage();

    const icons = [
        <Droplets className="w-10 h-10 text-rose-600" aria-hidden="true" />,
        <Leaf className="w-10 h-10 text-green-600" aria-hidden="true" />,
        <Clock className="w-10 h-10 text-orange-600" aria-hidden="true" />
    ];

    return (
        <section id="about" className="py-24 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-rose-500 font-bold tracking-wider uppercase mb-2 block"
                    >
                        {t.features.title}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900"
                    >
                        {t.features.subtitle}
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {t.features.items.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 bg-white rounded-3xl text-center hover:shadow-xl transition-all duration-300 border border-white"
                        >
                            <div className="bg-rose-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {icons[index]}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed min-h-[4rem]">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
