'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
    const { t } = useLanguage();

    return (
        <section id="reviews" className="py-24 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-rose-500 font-bold tracking-wider uppercase mb-2 block"
                    >
                        {t.reviews.title}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900"
                    >
                        {t.reviews.subtitle}
                    </motion.h2>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {t.reviews.items.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 relative"
                        >
                            <Quote className="absolute top-8 left-8 w-12 h-12 text-rose-100 rotate-180" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>

                                <p className="text-xl md:text-2xl text-gray-700 italic font-medium leading-relaxed mb-8">
                                    "{review.content}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 font-bold text-xl">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-gray-900">{review.name}</div>
                                        <div className="text-sm text-gray-500">Verified Customer</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
